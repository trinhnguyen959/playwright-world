import {test}  from '@playwright/test'

test('Basic action', async ({page}) => {
	await page.goto('https://material.playwrightvn.com/018-mouse.html');

	await page.locator('//*[@id="clickArea"]').click();

	await page.locator('//*[@id="clickArea"]').dblclick();

	await page.locator('//*[@id="clickArea"]').click({
		modifiers: ['ControlOrMeta', 'Shift'],
	});
})

test('basic input', async ({page}) => {
	await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');

	await page.locator('//*[@id="username"]').pressSequentially('playwrightvn', {
		delay: 10,
	});
	await page.locator('//*[@id="male"]').check();
	await page.locator('//*[@id="female"]').check();
	await page.locator('//*[@id="traveling"]').uncheck();

	const isChecked = await page.locator('//*[@id="male"]').isChecked();
	if (!isChecked) {
		await page.locator('//*[@id="traveling"]').check();
	}
});

test('select', async ({page}) => { 
	await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');
	await page.locator('//*[@id="interests"]').selectOption(['Music', 'Art']);
	await page.locator('//*[@id="country"]').selectOption({
		label: 'Canada',
	});
});

test('date time picker, slider, color picker', async ({page}) => {
	await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');
	await page.locator('//*[@id="dob"]').fill('2023-10-01');
	await page.locator('//*[@id="rating"]').fill('8');
	await page.locator('//*[@id="favcolor"]').fill('#7961b5');
});

test('file and hover', async ({page}) => {
	await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');
	await page.locator('//*[@id="profile"]').setInputFiles('./tests/test.txt');
	await page.locator('//*[@class="tooltip"]').hover();
});