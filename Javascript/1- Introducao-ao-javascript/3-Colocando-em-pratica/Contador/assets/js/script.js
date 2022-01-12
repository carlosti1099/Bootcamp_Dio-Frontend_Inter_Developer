var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    //Ativando blue
    if (currentNumber >= 0){
        document.getElementById('currentNumber').style.color = 'blue';
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    //Ativando red
    if (currentNumber < 0) {
        document.getElementById('currentNumber').style.color = 'red';
    }
}

//Usando método addEventListener ()
document.getElementById("demo").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("demo").innerHTML = "Hello world";
}

//Ativar/desativar botao incrementar
var i = 0;

    function incNumber() {
        if (i < 5) {
            i++;
        }
        document.getElementById("display").innerHTML = i;
    }

    function decNumber() {
        if (i > -5) {
            --i;
        }
        document.getElementById("display").innerHTML = i;
    }
