import test from "@playwright/test";
import PaginaHome from "./pages/PaginaHome";

test.describe("Buscar Passagens", () => {
    test("Deve buscar passagem de apenas de ida", async ({ page }) => {
        const paginaHome = new PaginaHome(page);

        await paginaHome.visitar();
    })
});