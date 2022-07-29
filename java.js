let TotalZero = 0;
let userinput = "0";
let previousOperator = null;
const screen = document.querySelector(".screen");

document
  .querySelector(".cal-buttons")
  .addEventListener("click", function (event) {
    buttonClick(event.target.innerText);
  });

function buttonClick(value) {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
    rerender();
}

function handleNumber(value) {
  if (userinput === "0") {
    userinput = value;
  } else {
    userinput += value;
  }
  
}

function handleSymbol(value) {
  switch (value) {
    case "C":
      userinput = "0";
      TotalZero = 0;
      previousOperator = null;
      break;
    case "=":
      if (previousOperator === null) {
        return;
      }
      flushOperation(parseInt(userinput));
      previousOperator = null;
      userinput = "" + TotalZero;
      TotalZero = 0;
      break;
    case "←":
      if (userinput.length === 1) {
        userinput = "0";
      } else {
        userinput = userinput.substring(0, userinput.length - 1);
      }
      break;
    default:
      handleMath(value);
      break;
  }
}

function handleMath(value) {
    const intBuffer = parseInt(userinput);
    if(TotalZero === 0){
        TotalZero = intBuffer;
    } else {
        flushOperation(intBuffer);
    }

    previousOperator = value;
    userinput = "0";
}

function flushOperation(intBuffer) {
    if(previousOperator === "+"){
        TotalZero += intBuffer;
    } else if(previousOperator === "-"){
        TotalZero -= intBuffer;
    } else if(previousOperator === "×"){
        TotalZero *= intBuffer;
    } else {
        TotalZero /= intBuffer;
    }
}

function rerender() {
  screen.innerText = userinput;
}
