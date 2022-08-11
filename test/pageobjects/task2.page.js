class Task2Page {
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
}

module.exports = new Task2Page();
