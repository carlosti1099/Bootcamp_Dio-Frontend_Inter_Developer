console.log("Hello world");

//testando no terminal usando node
//node console.js  --> Hello world

//Exemplo 2
function returnEvenvalues(array) {
    let evenNums = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            evenNums.push(array[i]);
        } else {
            console.log(`${array[i]} não é par!`);
        }
    }
    console.log('Os números pares são:', evenNums);
}

let array = [1, 2, 4, 5, 7, 8];

returnEvenvalues(array);