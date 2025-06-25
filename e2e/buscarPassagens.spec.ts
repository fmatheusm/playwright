import test from "@playwright/test";
import PaginaHome from "./pages/PaginaHome";
import ExemploPaginaPrincipal from "./pages/PaginaHomeExemplo";

test.describe("Buscar Passagens", () => {
    test("Deve buscar passagem de apenas de ida", async ({ page }) => {
        const paginaHome = new PaginaHome(page);

        await paginaHome.visitar();
        await paginaHome.definirSomenteIda();

        await paginaHome.abrirModalPassageiros();
        await paginaHome.definirPassageirosAdultos(3);
        await paginaHome.definirPassageirosCriancas(1);
        await paginaHome.definirPassageirosBebes(1);
        await paginaHome.fecharModalPassageiros();

        await paginaHome.definirOrigemEDestino('minas gerais', 'rio de janeiro');
    })

    test("EXEMPLO dev buscar passagem apenas de ida", async ({ page }) => {
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