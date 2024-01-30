//função que calcula os anos que mais teve pessoas trabalhando através da matriz recebida
function anosComMaisPessoasTrabalhando(matriz) {
    //objeto para armazenar quantas pessoas trabalharam em cada ano
    let anosTrabalhados = {};

    // Itera sobre cada entrada da matriz
    matriz.forEach(entrada => {
        //armazena o ano do inicio do trabalho
        let inicio = entrada[0];
        //armazena o ano da aposentadoria
        let fim = entrada[1];

        // Para cada ano entre o início e o fim, incrementa o contador
        for (let ano = inicio; ano <= fim; ano++) {
            //// Se o ano já existe no objeto, incrementa o contador; senão, cria uma entrada no objeto com contador igual a 1
            if (anosTrabalhados[ano]) {
                anosTrabalhados[ano]++;
            } else {
                anosTrabalhados[ano] = 1;
            }
        }
    });

    // Variáveis para armazenar os anos com mais pessoas trabalhando e o número máximo de pessoas
    let anosComMaisPessoas = [];
    let maxPessoas = 0;

    // Encontra o ano ou anos com mais pessoas trabalhando
    for (let ano in anosTrabalhados) {
        // Se o número de pessoas trabalhando no ano atual for maior que o número máximo registrado até agora,
        // atualiza o array de anos com mais pessoas e o número máximo de pessoas
        if (anosTrabalhados[ano] > maxPessoas) {
            anosComMaisPessoas = [ano];
            maxPessoas = anosTrabalhados[ano];
        // Se o número de pessoas for igual ao número máximo, adiciona o ano atual ao array de anos com mais pessoas
        } else if (anosTrabalhados[ano] === maxPessoas) {
            anosComMaisPessoas.push(ano);
        }
    }

    return anosComMaisPessoas;
}

// Testando a função
let matriz = [[1960, 2005], [1945, 2008], [1938, 1999]];
console.log(anosComMaisPessoasTrabalhando(matriz)); // Saída: [1960, 1961, 1962, ..., 2005, 2006, 2007, 2008]
