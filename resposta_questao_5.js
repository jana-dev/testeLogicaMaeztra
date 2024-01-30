//conceito de permutação
//A fórmula para permutação de n elementos é n!, onde n! é o produto de todos os inteiros positivos de 1 até n.

//função que recebe o número de pessoas e calcula as possibilidades de modos distintos para tirar a foto
function calcularModosDistintos(numeroPessoas) {
    //condição que garante retornar um valor para caso o numeroPessoas seja menor ou igual a zero
    if (numeroPessoas <= 0) {
        return 0;
    } else {
        //inicializamos o modosDistintos com 1 para começar o cálculo (referente a 1 pessoa)
        let modosDistintos = 1;
        for (let i = 1; i <= numeroPessoas; i++) {
            modosDistintos *= i;
            //exemplo do calculo:
            //1*1 = 1 (para uma pessoa, apenas 1 modo)
            //1*2 = 2 (para 2 pessoas, 2 modos)
            //2*3 = 6 (para 3 pessoas, 6 modos)
            //6*4 = 24 (para 4 pessoas, 24 modos)
        }

        return modosDistintos;
    }
}

// Exemplo de uso:
let numeroPessoas = 4;
let modos = calcularModosDistintos(numeroPessoas);
console.log(`Para ${numeroPessoas} pessoas, existem ${modos} modos distintos de organização para tirar a foto.`);
