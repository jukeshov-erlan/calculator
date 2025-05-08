const buttonElements = document.querySelectorAll('button');

const inputField = document.querySelector('.result');

for (let i = 0; i < buttonElements.length; i++) {
  buttonElements[i].addEventListener('click', () => {
    const buttonValue = buttonElements[i].textContent;
    console.log(buttonValue);
    
    if (buttonValue === 'C') {
      clearResult();
    } else if (buttonValue === '=') {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  })
}

const clearResult = () => {
  inputField.value = '';
}

function calculateResult() {
  inputField.value = eval(inputField.value);
}

function appendValue(buttonValue) {
  inputField.value += buttonValue;
}