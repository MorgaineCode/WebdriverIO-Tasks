const RequestHelper = require("../pageobjects/request.helper");
const Task2Page = require("../pageobjects/task2.page");

describe("Task 2", () => {
  it("Fills input field and presses the button", async () => {
    await browser.url("/exercises/exercise2?seed=47fd35b8-4aec-4671-84ad-48a79196f3ba")

    //filling input field with expected text
    await Task2Page.inputField.click();
    await Task2Page.inputField.setValue(await Task2Page.expectedText);
    await expect(Task2Page.inputField).toHaveValueContaining(
      await Task2Page.expectedText
    );
    await browser.setupInterceptor();
    
    //pressing button and trail verification
    await Task2Page.btnB1.click();
    await expect(Task2Page.resultField).toHaveText(
      await Task2Page.goal.getText()
    );

    //request verification
    const req = await browser.getRequest(0);
    const requestDetails = await RequestHelper.requestDetails(req);
    await expect(requestDetails.responseStatus).toEqual(200);
    expect(requestDetails.responseBody).toEqual(await Task2Page.goal.getText());

    //solution submit and verification
    await Task2Page.btnSolution.click();
    await expect(Task2Page.resultField).toHaveText("OK. Good answer");
  });
});
