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

  get group0() {
    return $$("//div[contains(h5,'Group 0')]/input");
  }

  get group1() {
    return $$("//div[contains(h5,'Group 1')]/input");
  }

  get group2() {
    return $$("//div[contains(h5,'Group 2')]/input");
  }

  get group3() {
    return $$("//div[contains(h5,'Group 3')]/input");
  }

  get btnSolution() {
    return $("#solution");
  }

  get resultField() {
    return $("//*[@id='trail']/code");
  }

  async selectFromGroup(group, expectedText) {
    let inputs = await group;
    let chosen = "";
    const text = await expectedText;
    for (let i = 0; i < inputs.length; ++i) {
      let nextSibling = await inputs[i].getProperty("nextSibling");
      if (nextSibling.data == text) {
        chosen = inputs[i];
      }
    }
    await chosen.click();
  }

  open() {
    return super.open("/exercise4?seed=4902f02e-9c01-43d6-a1d7-beb119b41cbc");
  }
}

module.exports = new Task4Page();
