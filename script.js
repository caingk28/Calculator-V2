let displayValue = '0';
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;
let memory = 0;
let history = [];

const display = document.querySelector('.current');
const historyDisplay = document.querySelector('.history');
const buttons = document.querySelector('.buttons');
const themeToggle = document.querySelector('.theme-toggle');

function updateDisplay() {
  display.textContent = displayValue;
}

function updateHistory() {
  historyDisplay.textContent = history.join(' ');
}

function inputDigit(digit) {
  if (waitingForSecondOperand) {
    displayValue = digit;
    waitingForSecondOperand = false;
  } else {
    displayValue = displayValue === '0' ? digit : displayValue + digit;
  }
}

function inputDecimal() {
  if (!displayValue.includes('.')) {
    displayValue += '.';
  }
}

function clear() {
  displayValue = '0';
  firstOperand = null;
  operator = null;
  waitingForSecondOperand = false;
}

function backspace() {
  if (displayValue.length > 1) {
    displayValue = displayValue.slice(0, -1);
  } else {
    displayValue = '0';
  }
}

function handleOperator(nextOperator) {
  const inputValue = parseFloat(displayValue);

  if (operator && waitingForSecondOperand) {
    operator = nextOperator;
    return;
  }

  if (firstOperand === null && !isNaN(inputValue)) {
    firstOperand = inputValue;
  } else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);
    displayValue = `${parseFloat(result.toFixed(7))}`;
    firstOperand = result;
    history.push(`${firstOperand} ${nextOperator}`);
  }

  waitingForSecondOperand = true;
  operator = nextOperator;
}

function calculate(firstOperand, secondOperand, operator) {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    case '/':
      return secondOperand !== 0 ? firstOperand / secondOperand : 'Error';
    case '%':
      return (firstOperand / 100) * secondOperand;
    default:
      return secondOperand;
  }
}

function handleFunction(fn) {
  const inputValue = parseFloat(displayValue);
  let result;

  switch (fn) {
    case 'sqrt':
      result = Math.sqrt(inputValue);
      break;
    case 'square':
      result = inputValue * inputValue;
      break;
    case 'reciprocal':
      result = 1 / inputValue;
      break;
  }

  displayValue = `${parseFloat(result.toFixed(7))}`;
  firstOperand = result;
  waitingForSecondOperand = true;
}

function handleMemory(action) {
  const inputValue = parseFloat(displayValue);

  switch (action) {
    case 'mc':
      memory = 0;
      break;
    case 'mr':
      displayValue = `${memory}`;
      break;
    case 'm-plus':
      memory += inputValue;
      break;
    case 'm-minus':
      memory -= inputValue;
      break;
  }
}

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}

buttons.addEventListener('click', (event) => {
  const { target } = event;
  if (!target.matches('button')) return;

  if (target.classList.contains('operator')) {
    handleOperator(target.dataset.op);
    updateDisplay();
    updateHistory();
    return;
  }

  if (target.classList.contains('decimal')) {
    inputDecimal();
    updateDisplay();
    return;
  }

  if (target.classList.contains('clear')) {
    clear();
    updateDisplay();
    return;
  }

  if (target.classList.contains('backspace')) {
    backspace();
    updateDisplay();
    return;
  }

  if (target.classList.contains('equals')) {
    handleOperator('=');
    updateDisplay();
    updateHistory();
    return;
  }

  if (target.classList.contains('function')) {
    handleFunction(target.dataset.fn);
    updateDisplay();
    return;
  }

  if (target.classList.contains('memory')) {
    handleMemory(target.dataset.action);
    updateDisplay();
    return;
  }

  if (target.classList.contains('theme-toggle')) {
    toggleTheme();
    return;
  }

  inputDigit(target.dataset.num);
  updateDisplay();
});

document.addEventListener('keydown', (event) => {
  if (event.key >= '0' && event.key <= '9') {
    inputDigit(event.key);
  } else if (event.key === '.') {
    inputDecimal();
  } else if (event.key === '=' || event.key === 'Enter') {
    handleOperator('=');
  } else if (event.key === 'Backspace') {
    backspace();
  } else if (event.key === 'Escape') {
    clear();
  } else if (['+', '-', '*', '/'].includes(event.key)) {
    handleOperator(event.key);
  }
  updateDisplay();
  updateHistory();
});

updateDisplay();