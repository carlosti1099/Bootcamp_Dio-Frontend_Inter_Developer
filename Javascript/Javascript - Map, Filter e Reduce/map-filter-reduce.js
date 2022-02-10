// Usando map

const array = [1, 2, 3, 4, 5];

array.map((item) => item * 2);  // retorno: [2, 4 , 6, 8, 10];


// Usando forEach

const array = [1, 2, 3, 4, 5];

array.forEach((item) => item * 2);  //retorno: underfine


// Usando Filter

const frutas = ['maçã fuji', 'maçã verde', 'goiaba', 'laranja'];

frutas.filter((fruta) => fruta.includes('maçã'))  // retorno: ['maçã fuji', 'maçã verde'];