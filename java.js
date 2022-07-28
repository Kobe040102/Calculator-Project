let Totalzero = 0;
let userinput = "0";
let previousOperator;

document.querySelector('.#row2').addEventListener("click", function(event){
    buttonClick(event.target.value);
});
function buttonClick(value)