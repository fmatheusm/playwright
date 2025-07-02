import { test } from './pages/PaginaLogin'
import massaLogin from './fixtures/login.json';

test.describe('Pagina de login', () => {
    test('Deve realizar login com sucesso', async ({ paginaLogin }) => {
        await paginaLogin.login('qa@teste.com', 'pwd123')
        await paginaLogin.loginComSucesso();
    });

    massaLogin.user.forEach(user => {
        test(`Não deve conseguir fazer login com credenciais invalidas ${user.email}`, async ({ paginaLogin }) => {
            await paginaLogin.login(user.email, user.pwd)
            await paginaLogin.exibeMensagemDeErro(massaLogin.mensagens.naoAutorizado);
        });
    });

    test('Campo não deve aceitar email invalido', async ({ paginaLogin }) => {
        massaLogin.user[0].email = 'teste.com.br';
        await paginaLogin.preencherCampos(massaLogin.user[0].email, massaLogin.user[0].pwd);
        await paginaLogin.exibeMensagemDeErro(massaLogin.mensagens.emailInvalido);
    });

    massaLogin.camposObrigatorios.forEach((campos) => {
        test(`Não deve realizar login com o campo ${campos} vazio`, async ({ paginaLogin }) => {
            await paginaLogin.exibirMensagensCampoObrigatorio();
            await paginaLogin.exibeMensagemDeErro(campos);
        })
    });
});