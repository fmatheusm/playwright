import { expect, Locator, Page } from "@playwright/test";
import { test as base } from '@playwright/test'

export const test = base.extend<{ paginaLogin: PaginaLogin }>({
    paginaLogin: async ({ page }, use) => {
        const paginaLogin = new PaginaLogin(page);
        await paginaLogin.visitar();
        await use(paginaLogin);
    }
});

class PaginaLogin {
    private readonly page: Page;
    private readonly botaoLogin: Locator;
    private readonly inputEmail: Locator;
    private readonly inputPassword: Locator;
    private readonly botaoAcessarConta: Locator;
    private readonly iconeUser: Locator;

    constructor(page: Page) {
        this.page = page;
        this.botaoLogin = page.getByTestId('botao-login');
        this.inputEmail = page.getByTestId('input-email');
        this.inputPassword = page.getByTestId('input-senha');
        this.botaoAcessarConta = page.getByTestId('botao-acessar-conta');
        this.iconeUser = page.getByRole('link', { name: 'Ícone da pessoa usuária' });
    }

    async visitar() {
        await this.page.goto('/');
        await this.botaoLogin.click();
        await expect(this.page).toHaveURL('/auth/login');
    }

    async login(email: string, pwd: string) {
        await this.preencherCampos(email, pwd);
        await this.clickAcessarConta();

    }

    async preencherCampos(email: string, pwd: string) {
        await this.inputEmail.fill(email);
        await this.inputPassword.fill(pwd);
    }

    async clickAcessarConta() {
        await this.botaoAcessarConta.click();
    }

    async loginComSucesso() {
        await expect(this.page).toHaveURL('/home');
        await expect(this.iconeUser).toBeVisible();
    }

    async exibeMensagemDeErro(msg: string) {
        const elementoErro = this.page.getByText(msg);
        await expect(elementoErro).toBeVisible();
    }

    async exibirMensagensCampoObrigatorio() {
        await this.inputEmail.click();
        await this.inputPassword.click();
        await this.inputEmail.click();
    }
}

export default PaginaLogin;