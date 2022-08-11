const { selectRadioInput } = require("../pageobjects/task4.page");
const Task4Page = require("../pageobjects/task4.page");

describe("Task 4", () => {
  it("Selects options using radio buttons", async () => {
    await browser.url("/exercises//exercise4?seed=47fd35b8-4aec-4671-84ad-48a79196f3ba");
   
    //get reference text
    const text0 = await Task4Page.expectedText0;
    const text1 = await Task4Page.expectedText1;
    const text2 = await Task4Page.expectedText2;
    const text3 = await Task4Page.expectedText3;
 
    //select respective radio inputs
    await Task4Page.selectRadioInput('Group 0', text0);
    await Task4Page.selectRadioInput('Group 1', text1);
    await Task4Page.selectRadioInput('Group 2', text2);
    await Task4Page.selectRadioInput('Group 3', text3);

    //verifying trail
    await await expect(Task4Page.goal.getText()).toEqual(
      Task4Page.resultField.getText()
    );
    
    //submiting solution and veryfing result
    await Task4Page.btnSolution.click();
    await expect(Task4Page.resultField).toHaveText("OK. Good answer");
  });
});
