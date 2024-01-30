//função que recebe um numero inteiro positivo e verifica a ordenação
function checkOrdering(number) {
    // Convertendo o número para uma string para manipular os dígitos individualmente
    let numString = number.toString();
    
    let isAscending = true;
    let isDescending = true;

    //numString.length - 1 para que não ultrapasse o limite da string
    for (let i = 0; i < numString.length - 1; i++) {
        // Verificando a variação entre os dígitos
        let diff = parseInt(numString[i + 1]) - parseInt(numString[i]);
        
        // Se a variação for maior que 1, não está ordenado
        if (diff > 1) {
            isAscending = false;
            isDescending = false;
            break; //saindo do loop pois já foi verificado que nao está ordenado
        }
        // Se a variação for menor que 0, não está em ordem crescente
        if (diff < 0) {
            isAscending = false;
        }
        // Se a variação for maior que 0, não está em ordem decrescente
        if (diff > 0) {
            isDescending = false;
        }
    }
    
    // Retornando o resultado da verificação
    if (isAscending) {
        return "Está ordenado em ordem crescente";
    } else if (isDescending) {
        return "Está ordenado em ordem decrescente";
    } else {
        return "Não está ordenado";
    }
}

// Testando a função
console.log(checkOrdering(12345678));
console.log(checkOrdering(65432));  
console.log(checkOrdering(1599));  
console.log(checkOrdering(122345)); 
console.log(checkOrdering(5443)); 
console.log(checkOrdering(123789)); 
console.log(checkOrdering(12356789)); 



//Testes de mesa:

//ex não ordenado:
//1599
// '1599'
// 5 - 1 (4)
// se 4 > 1 (verdadeiro)
// resultado: não ordenado pois a diferença não pode ser maior do que 1

//ex ordenado crescente:
// 122345
// '122345'
// 2 - 1 (1)
// se 1 > 1 (falso, está ordenado, só descobrir se é crescente ou decrescente)
// se 1 > 0 (verdadeiro) , se a diferença entre os números é positivo, ordem crescente

//ex ordenado decrescente:
// 321
// '321'
// 2 - 3 (-1)
// se -1 > 1 (falso, está ordenado, descobrir se é crescente ou decrescente)
// se -1 < 0 (verdadeiro), se a diferença entre os números é negativo, ordem decrescente