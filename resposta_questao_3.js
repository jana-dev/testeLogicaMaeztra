//função que recebe a sequencia de caracteres e verifica se é válida ou não
function validSequence(str) {
    //array criado para ir adicionando os caracteres "abertos"
    const list = [];
    //objeto criado para validar os caracteres corretamente 
    const validateChar = {
        '[': ']',
        '{': '}',
        '(': ')'
    };

    //itera sobre cada item da string de entrada
    for (let i = 0; i < str.length; i++) {
        //armazena o caracter atual
        const char = str[i];

        //se o caracter for qualquer um dos de abertura, adicione na pilha
        if (char === '[' || char === '{' || char === '(') {
            list.push(char);
        //senao, se for um dos caracteres de fechamento
        } else if (char === ']' || char === '}' || char === ')') {
            // Remove o último caractere de abertura da pilha e o armazena na variavel
            const lastOpen = list.pop();
            // Verifica se o caractere de fechamento corresponde ao último caractere de abertura
            if (validateChar[lastOpen] !== char) {
                // Se não corresponder, a sequência não é válida, então retorna falso
                return false;

            }
        }

    }

    // Retorna verdadeiro se a pilha estiver vazia, o que significa que todos os caracteres foram fechados corretamente
    return list.length === 0;
}
// Testando exemplos
console.log(validSequence("{ [ ( ) ( ) { } [ ] ] { } }"));
console.log(validSequence("{ [ ( ( ) ] }"));
console.log(validSequence("{ } [ ] ( )"));
console.log(validSequence("( ( ) { } [ [ ] )"));
console.log(validSequence("[ { } ( [ ) ] ]")); 


//teste de mesa para o caso falso
//  '[ { } ( [ ) ] ]'  > pra cada caracter: (adiciona os abertos, para o fechado exclui o ultimo aberto e verifica no mapa a correspondencia)
// '['
// '[ {'
// '}' exclui o ultimo aberto, corresponde, continua a iteração '['
// '[ ('
// '[ ( ['
// ')' exclui o ultimo aberto e não corresponde, sai do loop e retorna false

//teste de mesa para o caso verdadeiro
// '{ [ ( ) ( ) { } [ ] ] { } }'
// '{'
// '{ ['
// '{ [ ('
// ')' exclui o ultimo, corresponde, continua a iteração
// '{ [ ('
// ')' exclui o ultimo, corresponde, continua a iteração
// '{ [ {'
// '}' exclui o ultimo, corresponde, continua a iteração
// '{ [ ['
// ']' exclui o ultimo, corresponde, continua a iteração
// ']' exclui o ultimo, corresponde, continua a iteração
// '{ {'
// '}' exclui o ultimo, corresponde, continua a iteração
// '}' exclui o ultimo, corresponde acabou a iteração e o array está vazio, tudo fechou corretamente, retorna true

