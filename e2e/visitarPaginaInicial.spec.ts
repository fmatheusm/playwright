import { test, expect } from '@playwright/test';


test.describe("Pagina Inicial", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    })

    test('Devo visitar a página inicial', async ({ page }) => {
        await expect(page).toHaveTitle('Jornada Milhas');
        const tituloPassagens = page.getByRole('heading', { name: 'passagens' });
        await expect(tituloPassagens).toBeVisible();
    });

    test('Pega titulo passagens pelo css selector', async ({ page }) => {
        const tituloPassagens = page.getByTestId('titulo-passagens');
        await expect(tituloPassagens).toBeVisible();
    });

});