const prompt = require("prompt-sync")({sigint:true});

let num = [];

function entrada(){
    for(let i = 0; i < 2; i++){
        number = +(prompt(`Digite o ${i+1}º número: `));
        num.push(number);
    }
}

function operacao(){
    console.log(`
    ## Seleciona a operação desejada ##
    1 - Soma
    2 - Subtração
    3 - Multiplicação
    4 - Divisão
    5 - Porcentagem`)
    let ope = prompt("");
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
adicao(num[0],num[1]);
subtracao(num[0],num[1]);
multiplicacao(num[0],num[1]);
divisao(num[0],num[1]);
porcentagem(num[0],num[1]);

// AAAAA //