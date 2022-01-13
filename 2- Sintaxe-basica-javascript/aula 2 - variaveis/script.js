//tipos primitivos

// boolean
// typeof serve para saber tipo da variavel
var vOuF = false;
console.log(typeof(vOuF));  

// number
var numeroQualquer = 1;
console.log(numeroQualquer);          //mostra 1
console.log(typeof(numeroQualquer));  //mostra tipo var

// string
var nome = 'Carlos';
console.log(typeof(nome));

// como declarar variaveis
var variavel = 'carlos';
variavel = 'simone';
console.log(variavel);

let variavel2 = 'carlos';
console.log(variavel2);

//nao pode ser reatribuida
const constante = 'carlosjr';
console.log(constante);

//escopo
var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();

// atribuicao
var atrubuicao = 'Simone';

// comparacao
// retorna positivo
var comparacao = '0' == 0;  
console.log(comparacao);

// comparacao identica
// retorna falso
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);


// -- Operadores aritméticos --
// adicao
var adicao = 1 + 1;
console.log(adicao);

//subtracao
var subtracao = 2 - 1;
console.log(subtracao);

//multiplicacao
var multiplicacao = 2 * 3;
console.log(multiplicacao);

//divisao real
var divisaoReal = 6 / 2;
console.log(divisaoReal);

//divisao inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

//potenciacao
var potenciacao = 2 ** 10;
console.log(potenciacao);

// -- Operadores Relacionais --
// Maior
var maiorque = 5 > 2;
console.log(maiorque);

// Menor
var menorque = 5 < 2;
console.log(menorque);

//Maior ou igual a
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

// -- Operadores Logicos --
// "e"
var e = true && false;
console.log(e);

// "OU"
var ou = true || false;
console.log(ou);

// "nao"
var nao = !true;
console.log(nao);
