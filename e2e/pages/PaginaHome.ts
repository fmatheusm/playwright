import { Page, Locator } from "@playwright/test";

export default class PaginaHome {
    private readonly page: Page;
    private readonly campoDropDownOrigem: Locator;
    private readonly campoDropDownDestino: Locator;
    private readonly botaoSomenteIda: Locator;
    private readonly botaoPassageiros: Locator;
    private readonly addAdulto: Locator;
    private readonly addCriancas: Locator;
    private readonly addBebes: Locator;
    private readonly botaoFecharModalPassageiros: Locator;
    private readonly inputDataIda: Locator;
    private readonly botaoBuscarPassagem: Locator;
    private readonly textoIdaVolta: Locator;
    private readonly containerOrigem: Locator;
    private readonly containerDestino: Locator;
    private readonly botaoComprar: Locator;

    constructor(page: Page) {
        this.page = page;

        this.campoDropDownOrigem = page
            .getByTestId('campo-dropdown-origem')
            .getByLabel("Origem");

        this.campoDropDownDestino = page
            .getByTestId("campo-dropdown-destino")
            .getByLabel('Destino');

        this.botaoSomenteIda = page.getByTestId("botao-somente-ida");

        this.botaoPassageiros = page.getByTestId("abrir-modal-passageiros");

        this.addAdulto = page.getByTestId("seletor-passageiro-adultos")
            .locator("[alt='Ícone do operador de adição']");

        this.addCriancas = page.getByTestId("seletor-passageiro-criancas")
            .locator("[alt='Ícone do operador de adição']");

        this.addBebes = page.getByTestId("seletor-passageiro-bebes")
            .locator("[alt='Ícone do operador de adição']");

        this.botaoFecharModalPassageiros = page.getByTestId("fechar-modal-passageiros");

        this.inputDataIda = page.getByTestId("campo-data-ida");

        this.botaoBuscarPassagem = page.getByTestId("botao-buscar-passagens");

        this.textoIdaVolta = page.getByTestId("texto-ida-volta");

        this.containerOrigem = page.getByTestId("container-origem");

        this.containerDestino = page.getByTestId("container-destino");

        this.botaoComprar = page.getByTestId("botao-comprar");
    }

    async visitar() {
        await this.page.goto("/");
    }

    async definirSomenteIda() {
        await this.botaoSomenteIda.click();
    }

    async abrirModalPassageiros() {
        await this.botaoPassageiros.click();
    }

    async definirPassageirosAdultos(quantidade: number) {
        for (let i = 1; i < quantidade; i++) {
            await this.addAdulto.click();
        }
    };

    async definirPassageirosCriancas(quantidade: number) {
        for (let i = 1; i <= quantidade; i++) {
            await this.addCriancas.click();
        }
    };

    async definirPassageirosBebes(quantidade: number) {
        for (let i = 1; i <= quantidade; i++) {
            await this.addBebes.click();
        }
    };

    async fecharModalPassageiros() {
        await this.botaoFecharModalPassageiros.click();
    }

    async definirOrigemEDestino(origem: string, destino: string) {
        await this.campoDropDownOrigem.fill(origem);
        await this.campoDropDownOrigem.press('Enter');

        await this.campoDropDownDestino.fill(destino);
        await this.campoDropDownDestino.press('Enter');
    }

}