const prompt = require("prompt-sync")({sigint:true});

let num = [];

function entrada(){

    while(num.length < 2){
        number = +(prompt(`Digite o ${num.length+1}º número: `));
        if (isNaN(number)){
            console.log("Tipo de entrada inválida, tente um número...")
        }else{
        num.push(number);
        }
    }
}

function operacao(){
    
    if(num[1] !== 0){
        console.log(`
        ## Seleciona a operação desejada ##
        1 - Soma
        2 - Subtração
        3 - Multiplicação
        4 - Divisão
        5 - Porcentagem`)
    }else{
        console.log(`
        ## Seleciona a operação desejada ##
        1 - Soma
        2 - Subtração
        3 - Multiplicação
        4 - Divisão (Opção indisponível)
        5 - Porcentagem (Opção indisponível)`)
    }
    
    let ope = +prompt("");

    switch (ope) {
        case 1:
            adicao(num[0],num[1]);
        break;

            case 2:
                subtracao(num[0],num[1]);
            break;

                case 3:
                    multiplicacao(num[0],num[1]);
                break;

                    case 4:
                        if(num[1] == +0){
                            console.log("É impossível realizar uma divisão por 0")
                            num = [];
                            entrada();
                            operacao();
                        }else{
                        divisao(num[0],num[1]);
                        }
                    break;

                        case 5:
                            if(num[1] == +0){
                                console.log("É impossível realizar uma divisão por 0")
                                num = [];
                                entrada();
                                operacao();
                            }else{
                            porcentagem(num[0],num[1]);
                            }
                        break;
    
        default:
            console.log("\n\nDigite uma opção válida para a operação desejada...")
            operacao();
            break;
    }
    }

function adicao(x,y){
    let sum = x + y;

    return(console.log(`A soma entre os dois números digitados é igual a ${sum}.`));
}

function subtracao(x,y){
    let sub = x - y;

    return(console.log(`A subtração entre os dois números digitados é igual a ${sub}.`));
}

function multiplicacao(x,y){
    let mul = x * y;

    return(console.log(`A multiplicação entre os dois números digitados é igual a ${mul}.`));
}

function divisao(x,y){
    let div = x / y;

    return(console.log(`A divisão entre os dois números digitados é igual a ${div}.`));
}

function porcentagem(x,y){
    let per = (x / y) * 100;

    return(console.log(`O primeiro número digitado representa ${per}% do segundo`));
}

entrada();
operacao();

//AAAAAAA//