
function $(id) {
  return document.getElementById(id);
}

function addValue(value) {
  $("display").value += value;
}

function ac() {
  $("indicator").value = ""
  $("calculation").value = "";
  $("display").value = "";
  updateMemoryIndicator();
}

let memory = 0;

function updateMemoryIndicator() {
  const indicator = $("indicator");
  indicator.value = memory !== 0 ? "M" : "";
}

function addMemory() {
  const display = $("display");
  memory += secureEval(display.value || "0");
  updateMemoryIndicator();
}

function subtractMemory() {
  const display = $("display");
  memory -= secureEval(display.value || "0");
  updateMemoryIndicator();
  
}

function recallMemory() {
  const display = $("display");
  display.value = memory;
  updateMemoryIndicator();
}

function clearMemory() {
  memory = 0;
  updateMemoryIndicator();
}

function flipSign() {
  const display = $("display")
  display.value = secureEval(display.value) * -1;
}

function percentage() {
  const display = $("display")
  display.value = secureEval(display.value) / 100;
}

function calculate() {
  const display = $("display")
  const calculation = $("calculation")

  calculation.value = display.value

  display.value = secureEval(calculation.value)
  calculation.value = value;
}

function secureEval(expression) {
  const safePattern = /^[0-9+\-*/%.() ]+$/;

  if (!safePattern.test(expression)) {
    throw new Error("Invalid characters in expression.");
  }

  try {
    // eslint-disable-next-line no-new-func
    return Function('"use strict"; return (' + expression + ')')();
  } catch (e) {
    throw new Error("Error evaluating expression.");
  }
}

function flashButton(id) {
  const button = $(id);
  if (!button) return;

  button.classList.add("pressed");
  setTimeout(() => {
    button.classList.remove("pressed");
  }, 100);
}

document.addEventListener("keydown", function(event) {
  const key = event.key;

  const keyMap = {
    "0": "zero",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    "+": "add",
    "-": "subtract",
    "*": "multiply",
    "/": "divide",
    "%": "percent",
    ".": "dot",
    "M+": "add_memory",
    "M-": "subtact_memory",
    "MR": "recall_memory",
    "CM": "clear_memory",
    "Enter": "equal",
    "Escape": "all_clear",
  };

  if ("0123456789+-*/.%".includes(key)) {
    addValue(key);
  } else if (key === "M+") {
    addMemory();
  } else if (key === "M-") {
    subtractMemory();
  } else if (key === "MR") {
    recallMemory();
  } else if (key === "MC") {
    clearMemory();
  } else if (key === "Enter") {
    event.preventDefault();
    calculate();
  } else if (key === "Escape") {
    ac();
  } else if (key === "Backspace") {
    const display = $("display");
    display.value = display.value.slice(0, -1);
  }

  const btnId = keyMap[key];
  if (btnId) {
    flashButton(btnId);
  }
});