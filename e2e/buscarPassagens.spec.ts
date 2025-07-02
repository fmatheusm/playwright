import { test } from "./pages/PaginaHome";
import ExemploPaginaPrincipal from "./pages/PaginaHomeExemplo";

test.describe("Buscar Passagens", () => {
    test.beforeEach(async ({ paginaHome }) => {
        await paginaHome.visitar();
    })
    test("Deve buscar passagem de apenas de ida", async ({ paginaHome }) => {
        await paginaHome.definirSomenteIda();

        await paginaHome.abrirModalPassageiros();
        await paginaHome.definirPassageirosAdultos(3);
        await paginaHome.definirPassageirosCriancas(1);
        await paginaHome.definirPassageirosBebes(1);
        await paginaHome.fecharModalPassageiros();

        await paginaHome.definirOrigemEDestino('minas gerais', 'rio de janeiro');
        await paginaHome.definirData(new Date());
        await paginaHome.buscarPassagens();

        await paginaHome.estaMostrandoPassagem('Somente ida', 'Minas Gerais', 'Rio de Janeiro')
    })

    test.skip("EXEMPLO dev buscar passagem apenas de ida", async ({ page }) => {
        const exemploPaginaPrincipal = new ExemploPaginaPrincipal(page);

        await exemploPaginaPrincipal.visitar();
        await exemploPaginaPrincipal.definirSomenteIda();

        await exemploPaginaPrincipal.abrirModalPassageiros();
        await exemploPaginaPrincipal.definirPassageirosAdultos(3);
        await exemploPaginaPrincipal.definirPassageirosCriancas(1);
        await exemploPaginaPrincipal.definirPassageirosBebes(1);
        await exemploPaginaPrincipal.fecharModalPassageiros();

    })
});