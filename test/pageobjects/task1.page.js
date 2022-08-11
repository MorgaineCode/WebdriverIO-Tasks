class Task1Page {
  get goal() {
    return $("//td[contains(text(),'Trail set to:')]//code");
  }

  get btnB1() {
    return $("#btnButton1");
  }

  get btnB2() {
    return $("#btnButton2");
  }

  get resultField() {
    return $("#trail");
  }

  get btnSolution() {
    return $("#solution");
  }

  async selectButton() {
    const sequenceText = await this.goal.getText();
    const sequenceArray = await sequenceText.match(/.{2}/g);
    const buttons = {};
    for (let i = 0; i < sequenceArray.length; ++i) {
      const element = sequenceArray[i];
      if (element == "b2") {
        buttons["step" + (i + 1)] = this.btnB2;
      } else {
        buttons["step" + (i + 1)] = this.btnB1;
      }
    }
    return { buttons, sequenceText, sequenceArray };
  }
}

module.exports = new Task1Page();
