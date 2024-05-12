import { test, expect } from "@playwright/test";
test("test", async ({ page }) => {
  await Promise.all([
    page.waitForLoadState("networkidle"),
    page.goto("http://localhost:5173/"),
  ]);
  
  await expect(page.locator(".content-list")).toBeVisible();
  await expect(page.locator(".content-details")).toBeVisible();
  let elements = await page.$$("li");
  const elementCount = elements.length;
  let date = "2023-07-01";
  let date2 = "2023-07-02";
  
  await page.locator("#clearButton").click();
  await page.locator("#field1").fill("Field 1");
  await page.locator("#field2").fill("Field 2");
  await page.locator("#field3").fill("Field 3");
  await page.locator("#field4").fill("4");
  await page.locator("#field5").fill("2023-07-01");
  await page.locator("#saveButton").click();
  elements = await page.$$("li");
  expect(elements.length).toEqual(elementCount + 1);
  expect(page.locator("li:last-child .field1")).toContainText("Field 1");
  expect(page.locator("li:last-child .field2")).toContainText("Field 2");
  expect(page.locator("li:last-child .field3")).toContainText("Field 3");
  expect(page.locator("li:last-child .field4")).toContainText("4");
  expect(page.locator("li:last-child .field5")).toContainText(date, { ignoreCase: true, useInnerText: true });
  
  await page.locator("li:last-child .field1").click();
  await page.locator("#field1").fill("Test 1");
  await page.locator("#saveButton").click();
  expect(page.locator("li:last-child .field1")).toContainText("Test 1");
  
  await page.locator("li:last-child .field2").click();
  await page.locator("#field2").fill("Test 2");
  await page.locator("#saveButton").click();
  expect(page.locator("li:last-child .field2")).toContainText("Test 2");
  
  await page.locator("li:last-child .field3").click();
  await page.locator("#field3").fill("Test 3");
  await page.locator("#saveButton").click();
  expect(page.locator("li:last-child .field3")).toContainText("Test 3");
  
  await page.locator("li:last-child .field4").click();
  await page.locator("#field4").fill("1");
  await page.locator("#saveButton").click();
  expect(page.locator("li:last-child .field4")).toContainText("1");
  
  await page.locator("li:last-child .field5").click();
  await page.locator("#field5").fill("2023-07-02");
  await page.locator("#saveButton").click();
  expect(page.locator("li:last-child .field5")).toContainText(date2, { ignoreCase: true, useInnerText: true });
  
  await page.locator("li:last-child .deleteButton").click();
  elements = await page.$$("li");
  expect(elements.length).toEqual(elementCount);
  
  await page.getByRole("button", { name: "Clear" }).click();
  await page.locator("#field2").fill("Field 2");
  await page.locator("#field3").fill("Field 3");
  await page.locator("#field4").fill("4");
  await page.locator("#field5").fill("2023-07-01");
  await page.locator("#saveButton").click();
  elements = await page.$$("li");
  expect(elements.length).toEqual(elementCount);
  
  await page.getByRole("button", { name: "Clear" }).click();
  await page.locator("#field1").fill("Field 1");
  await page.locator("#field3").fill("Field 3");
  await page.locator("#field4").fill("4");
  await page.locator("#field5").fill("2023-07-01");
  await page.locator("#saveButton").click();
  elements = await page.$$("li");
  expect(elements.length).toEqual(elementCount);
  
  await page.getByRole("button", { name: "Clear" }).click();
  await page.locator("#field1").fill("Field 1");
  await page.locator("#field2").fill("Field 2");
  await page.locator("#field4").fill("4");
  await page.locator("#field5").fill("2023-07-01");
  await page.locator("#saveButton").click();
  elements = await page.$$("li");
  expect(elements.length).toEqual(elementCount);
  
  await page.getByRole("button", { name: "Clear" }).click();
  await page.locator("#field1").fill("Field 1");
  await page.locator("#field2").fill("Field 2");
  await page.locator("#field3").fill("Field 3");
  await page.locator("#field4").fill("");
  await page.locator("#field5").fill("2023-07-01");
  await page.locator("#saveButton").click();
  elements = await page.$$("li");
  expect(elements.length).toEqual(elementCount);
  
  await page.locator("li:first-child .deleteButton").click();
  elements = await page.$$("li");
  expect(elements.length).toEqual(elementCount - 1);
  expect(page.locator("li:first-child .id")).toContainText("2");
  
  let deleteButtons = await page.$$(".deleteButton");
  for (const button of deleteButtons) {
    await button.click();
  }
  elements = await page.$$("li");
  expect(elements.length).toEqual(0);
});
