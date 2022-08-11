const Task3Page = require("../pageobjects/task3.page");

describe("Task 3", () => {
  it("Selects option from the dropdown menu", async () => {
    await browser.url("/exercises/exercise3?seed=47fd35b8-4aec-4671-84ad-48a79196f3ba");

    //selecting expected text from the dropdown
    await Task3Page.dropdown.click();
    await Task3Page.allOptions[1].isDisplayed();
    await Task3Page.dropdown.selectByVisibleText(
      await Task3Page.expectedText.getText()
    );

    //verification of the trail
    await expect(Task3Page.resultField).toHaveText(
      await Task3Page.goal.getText()
    );
    
    // submiting solutuion and verifying the result
    await Task3Page.btnSolution.click();
    await expect(Task3Page.resultField).toHaveText("OK. Good answer");
  });
});
