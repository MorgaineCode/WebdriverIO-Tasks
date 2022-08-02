const Page = require("./page");

class Task3Page extends Page {
  get goal() {
    return $("//td[contains(text(),'Trail set to:')]//code");
  }

  get expectedText() {
    return $("(//td/code)[1]");
  }

  get dropdown() {
    return $("#s13");
  }

  get allOptions() {
    return $$("//option");
  }

  get resultField() {
    return $("#trail");
  }

  get btnSolution() {
    return $("#solution");
  }

  open() {
    return super.open("/exercise3?seed=4902f02e-9c01-43d6-a1d7-beb119b41cbc");
  }
}

module.exports = new Task3Page();
