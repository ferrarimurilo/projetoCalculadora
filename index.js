const prompt = require("prompt-sync")({sigint:true});

let num = [];

function entrada(){
    for(let i = 0; i < 2; i++){
        number = +(prompt(`Digite o ${i+1}º número: `));
        num.push(number);
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

entrada();
adicao(num[0],num[1]);
subtracao(num[0],num[1]);