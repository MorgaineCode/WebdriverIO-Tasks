class Task3Page {
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
}

module.exports = new Task3Page();
