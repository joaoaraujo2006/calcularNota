
var nota = [10, 7, 8];
var cont = 0;

for (i of nota){
    var maior = 0;
    cont++;
    console.log("A nota " + cont + " é: " + i);
    if (i > maior){
        maior = i;
    }
}

console.log("A maior nota é " + maior)
var media = (nota[0] + nota[1] + nota[2]) / 3;

function calcularResultado(){
    if(media >= 7){
        resultado = "Você foi aprovado! Parabéns!"
    }
    else{
        resultado = "Infelizmente você foi reprovado!"
    }
}
calcularResultado();

console.log("A sua média é " + Math.round(media)); // Vai arredondar a média
console.log(resultado);

