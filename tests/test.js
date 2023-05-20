import { expect, test } from '@playwright/test';

test('about page has expected h1', async ({ page }) => {
	await page.goto('/about');
	expect(await page.textContent('h1')).toBe('About swyxkit!');
});

test.describe('test thoughts page', () => {
	test('thoughts page to preserve url params', async ({ page }) => {
		// Go to http://localhost:4173/
		await page.goto('/thoughts');

		// Click [placeholder="Hit \/ to search"]
		await page.locator('[placeholder="Hit \\/ to search"]').click();

		// Fill [placeholder="Hit \/ to search"]
		await page.locator('[placeholder="Hit \\/ to search"]').fill('test');
		await expect(page).toHaveURL('http://localhost:4173/thoughts?filter=test');

		// Click label:has-text("Thoughts")
		await page.locator('label:has-text("Thoughts")').click();
		await expect(page).toHaveURL('http://localhost:4173/thoughts?filter=test&show=Thoughts');
	});

	test('thoughts to honour existing params', async ({ page }) => {
		await page.goto('http://localhost:4173/thoughts?filter=test&show=Thoughts');
		await expect(page).toHaveURL('http://localhost:4173/thoughts?filter=test&show=Thoughts');
	});
});
