const Page = require("./page");

class Task2Page extends Page {
  get goal() {
    return $("//td[contains(text(),'Trail set to:')]//code");
  }

  get expectedText() {
    return $("(//td/code)[1]").getText();
  }

  get btnB1() {
    return $("#btnButton1");
  }

  get inputField() {
    return $("#t14");
  }

  get resultField() {
    return $("#trail");
  }

  get btnSolution() {
    return $("#solution");
  }

  get inputFieldName() {
    return $("(//td/code)[2]");
  }

  open() {
    return super.open("/exercise2?seed=4902f02e-9c01-43d6-a1d7-beb119b41cbc");
  }
}

module.exports = new Task2Page();
