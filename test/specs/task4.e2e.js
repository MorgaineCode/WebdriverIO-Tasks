const Task4Page = require("../pageobjects/task4.page");

describe("Task 4", () => {
  it("Selects options using radio buttons", async () => {
    await Task4Page.open();
    //selecting elements associated to expected text for each group
    await Task4Page.selectFromGroup(Task4Page.group0, Task4Page.expectedText0);
    await Task4Page.selectFromGroup(Task4Page.group1, Task4Page.expectedText1);
    await Task4Page.selectFromGroup(Task4Page.group2, Task4Page.expectedText2);
    await Task4Page.selectFromGroup(Task4Page.group3, Task4Page.expectedText3);

    //verifying trail
    await await expect(Task4Page.goal.getText()).toEqual(
      Task4Page.resultField.getText()
    );
    //submiting solution and veryfing result
    await Task4Page.btnSolution.click();
    await expect(Task4Page.resultField).toHaveText("OK. Good answer");
  });
});
