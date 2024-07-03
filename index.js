const prompt = require("prompt-sync")({sigint:true});

let num = [];

function entrada(){
    for(let i = 0; i < 2; i++){
        number = +(prompt(`Digite o ${i+1}º número: `));
        num.push(number);
    }
}

function adicao(x,y){
    let soma = x + y;

    return(console.log(`A soma entre os dois números digitados é igual a ${soma}.`));
}

entrada();
adicao(num[0],num[1]);