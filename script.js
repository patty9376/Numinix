
    const display = document.getElementById("display");
    let expression = "";

    function appendValue(value) {
      if (display.textContent === "0" || display.textContent === "Error") {
        display.textContent = value;
      } else {
        display.textContent += value;
      }
      expression = display.textContent;
    }

    function clearDisplay() {
      expression = "";
      display.textContent = "0";
    }

    function backspace() {
      if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
        expression = display.textContent;
      } else {
        clearDisplay();
      }
    }

    function calculate() {
      try {
        expression = display.textContent;
        let result = eval(expression);
        display.textContent = result;
      } catch (err) {
        display.textContent = "Error";
      }
    }

    document.addEventListener("keydown", function (e) {
      if ((e.key >= 0 && e.key <= 9) || ["+", "-", "*", "/", ".", "(", ")"].includes(e.key)) {
        appendValue(e.key);
      } else if (e.key === "Enter") {
        e.preventDefault();
        calculate();
      } else if (e.key === "Backspace") {
        backspace();
      } else if (e.key === "Escape") {
        clearDisplay();
      }
    });
  