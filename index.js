const prompt = require("prompt-sync")({sigint:true});                                                       // Declara uma variável do tipo const para utilizar o comando require do pacote npm prompt-sync.

let num = [];                                                                                               // Declara uma variável num do tipo array.

function adicao(x,y){                                                                                       // Função que realiza a operação de adição.
    let sum = x + y;

    return(console.log(`A soma entre os dois números digitados é igual a ${sum}.`));
}

function subtracao(x,y){                                                                                    // Função que realiza a operação de adição.
    let sub = x - y;

    return(console.log(`A subtração entre os dois números digitados é igual a ${sub}.`));
}

function multiplicacao(x,y){                                                                                // Função que realiza a operação de multiplicação.
    let mul = x * y;

    return(console.log(`A multiplicação entre os dois números digitados é igual a ${mul}.`));
}

function divisao(x,y){                                                                                      // Função que realiza a operação de divisão.
    let div = x / y;

    return(console.log(`A divisão entre os dois números digitados é igual a ${div}.`));
}

function porcentagem(x,y){                                                                                  // Função que realiza o cálculo de porcentagem, calculando o % do 1º número em relação ao 2º.
    let per = (x / y) * 100;

    return(console.log(`O primeiro número digitado representa ${per}% do segundo`));
}

function entrada(){                                                                                         // Função que irá solicitar a entrada de 2 números ao usuário. Fazendo a validação dos dados para aceitar apenas a entrada de números.

    while(num.length < 2){
        number = prompt(`Digite o ${num.length+1}º número: `).replaceAll(" ","");
        if (isNaN(+number)||number === ""){
            console.log("Tipo de entrada inválida, tente um número...")
        }else{
        num.push(+number);
        }
    }
}

function operacao(){                                                                                        // Função que cria o menu de opções entre as operações disponíveis.
    
    if(num[1] !== 0){
        console.log(`
        ## Seleciona a operação desejada ##
        1 - Soma
        2 - Subtração
        3 - Multiplicação
        4 - Divisão
        5 - Porcentagem
        6 - Sair`)
    }else{                                                                                                  // A função possui uma 2ª variação para caso a segundo número digitado seja = 0, não permitindo divisões.
        console.log(`
        ## Seleciona a operação desejada ##
        1 - Soma
        2 - Subtração
        3 - Multiplicação
        4 - Divisão (Opção indisponível)
        5 - Porcentagem (Opção indisponível)
        6 - Sair`)
    }
    
    let ope = +prompt("");                                                                                  // Declara uma variável ope e chama o prompt para receber a entrada da opção escolhia no menu.

    switch (ope) {                                                                                          // Cria o switch case que irá chamar as funções de operação de acordo com a opção do menu selecionada.
        case 1:
            adicao(num[0],num[1]);                                                                          // Chama a função de adição, caso seja o case 1.
        break;

        case 2:
            subtracao(num[0],num[1]);                                                                       // Chama a função de subtração, caso seja o case 2.
        break;

        case 3:
            multiplicacao(num[0],num[1]);                                                                   // Chama a função de multiplicação, caso seja o case 3.
        break;

        case 4:
            if(num[1] == +0){                                                                               // Faz um if que irá verificar se o 2º número digitado é = 0.
                console.log("É impossível realizar uma divisão por 0")                                      // Caso o 2º número digitado seja = 0, cumpre-se a condição do if e imprime uma mensagem informando que a operação é impossível.
                num = [];                                                                                   // Esvazia o array num para que a entrada seja reiniciada.
                entrada();                                                                                  // Chama novamente a função entrada().
                operacao();                                                                                 // Chama novamente a função operação().
            }else{
                divisao(num[0],num[1]);                                                                     // Chama a função de divisão, caso seja o case 4 e passe pela verifiação de 2º número = 0.
            }
        break;

        case 5:
            if(num[1] == +0){                                                                               // Faz um if que irá verificar se o 2º número digitado é = 0. If segue a mesma estrutura do case 4.
                console.log("É impossível realizar uma divisão por 0 e portanto, impossível determinar o percentual do primeiro número em relação ao segundo")
                num = [];
                entrada();
                operacao();
            }else{
                porcentagem(num[0],num[1]);                                                                  // Chama a função de porcentagem, caso seja o case 5 e passe pela verifiação de 2º número = 0.
            }
        break;

        case 6:                                                                                              // O case 6 fará a função de encerramento do código com o break, caso seja selecionada a opção "6 - Sair" no menu.

        break;
    
        default:
            console.log("\n\nDigite uma opção válida para a operação desejada...")                           // O default do switch case será um console.log que imprime uma mensagem solicitando uma opção válida de operação, pois cairá aqui caso a opção selecionada não esteja entre as 6 disponíveis.
            operacao();                                                                                      // Chama novamente a função operacao().
        break;
    }
    }


entrada();                                                                                                   // Chama a função entrada().
operacao();                                                                                                  // Chama a função operacao().