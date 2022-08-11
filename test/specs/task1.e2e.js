
const { config } = require("../../wdio.conf");
const RequestHelper = require("../pageobjects/request.helper");
const {
  selectButton,
  verifyRequest: requestDetails,
} = require("../pageobjects/task1.page");
const Task1Page = require("../pageobjects/task1.page");

config
describe("Task 1", () => {
  it("Presses buttons in a given sequence", async () => {
    
    await browser.url("/exercises/exercise1?seed=47fd35b8-4aec-4671-84ad-48a79196f3ba");
    
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
    await expect(requestDetails.responseBody).toEqual(elemSelections.sequenceText);
    //submiting results and verification
    await Task1Page.btnSolution.click();
    await expect(Task1Page.resultField).toHaveText("OK. Good answer");
  });
});
