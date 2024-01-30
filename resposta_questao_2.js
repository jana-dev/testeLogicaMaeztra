//função que recebe o array e encontra os numeros duplicados
function findDuplicates(array) {
    //objeto para contar a quantidade de cada numero
    let counter = {};
    //array para armazenar os numeros duplicados
    let duplicates = [];

    // Contagem de ocorrências de cada numero
    for (let i = 0; i < array.length; i++) {
        //numero atual
        let number = array[i];
        //verifica se já existe um valor válido dentro do objeto, se nao existir coloca o 0 como padrão para poder somar
        counter[number] = (counter[number] || 0) + 1;
    }

    // Verifica quais elementos têm mais de uma ocorrência
    for (let key in counter) {
        //se o valor de cada elemento dentro do objeto for maior que 1, adiciona no array dos duplicados
        if (counter[key] > 1) {
            duplicates.push(parseInt(key));
        }
    }

    return duplicates;
}

// Exemplos:
const input = [2,5,5,7,8,9,9];
const output = findDuplicates(input);
console.log(output);

//Teste de mesa:
// [2,3,3,4]
// 2:1
// 3:1
// 3:2
// 4:1

// para cada elemento desse objeto, se o valor é maior que 1, adicione no array:
// [3]