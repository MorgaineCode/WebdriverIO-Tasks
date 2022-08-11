const Page = require("./page");

class Task4Page extends Page {
  get goal() {
    return $("//td[contains(text(),'Trail set to:')]//code");
  }

  get expectedText0() {
    return $("(//td/code)[1]").getText();
  }

  get expectedText1() {
    return $("(//td/code)[2]").getText();
  }

  get expectedText2() {
    return $("(//td/code)[3]").getText();
  }

  get expectedText3() {
    return $("(//td/code)[4]").getText();
  }

  get btnSolution() {
    return $("#solution");
  }

  get resultField() {
    return $("//*[@id='trail']/code");
  }


  async selectRadioInput(group,text) {
   const radio = await $(`//div[contains(h5,'${group}')]//text()[contains(.,'${text}')]/preceding::input[1]`);
   await radio.waitForDisplayed();
   await radio.click();
  }

  open() {
    return super.open("/exercise4?seed=4902f02e-9c01-43d6-a1d7-beb119b41cbc");
  }
}

module.exports = new Task4Page();
