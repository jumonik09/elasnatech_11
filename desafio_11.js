let numero = prompt("Escreva um número");
let numero_1= parseInt(numero);
console.log(numero_1);
let par = numero_1 % 2 == 0;  /*boolean*/
let positivo= numero_1 > 0; /*booleano*/
let menor= numero_1 < 100; /*booleano comparacao*/


if(par && positivo && menor ){
    alert("O número digitado atende aos critérios")
} else {
    alert ("O número digitado não atende aos critérios")
}

