const prompt = require("prompt-sync")({sigint:true});

let num1 = +5;
let num2 = +4;

function adicao(x,y){
    let soma = x + y;

    return(soma);
}

adicao(num1, num2);