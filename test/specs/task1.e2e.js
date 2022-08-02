// const RequestHelper = require("../helpers/request.helper");
const RequestHelper = require("../pageobjects/request.helper");
const {
  selectButton,
  verifyRequest: requestDetails,
} = require("../pageobjects/task1.page");
const Task1Page = require("../pageobjects/task1.page");

describe("Task 1", () => {
  it("Presses buttons in a given sequence", async () => {
    await Task1Page.open();
    const elemSelections = await Task1Page.selectButton();
    // pressing buttons and checking the results
    await elemSelections.buttons.step1.click();
    await expect(Task1Page.resultField).toHaveText(
      elemSelections.sequenceArray[0]
    );
    await elemSelections.buttons.step2.click();
    await expect(Task1Page.resultField).toHaveText(
      elemSelections.sequenceArray[0] + elemSelections.sequenceArray[1]
    );
    // pressing last button, verifying API response details and result field
    await browser.setupInterceptor();
    await elemSelections.buttons.step3.click();
    await expect(Task1Page.resultField).toHaveText(elemSelections.sequenceText);
    //request verification
    const req = await browser.getRequest(0);
    const requestDetails = await RequestHelper.requestDetails(req);
    await expect(requestDetails.responseStatus).toEqual(200);
    expect(requestDetails.responseBody).toEqual(
      "trail:" + `${elemSelections.sequenceText}`
    );
    //submiting results and verification
    await Task1Page.btnSolution.click();
    await expect(Task1Page.resultField).toHaveText("OK. Good answer");
  });
});
