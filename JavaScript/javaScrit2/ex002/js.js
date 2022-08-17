var x = 5;
var y = 10;
function or (){
    return x < 10 || y > 10;
}
console.log("Função retornada or ", or());
//Operador or || significa ou um deles pode ser verdadeiro

function and(){
    return x < 10 && y > 10; 
}
console.log("Função retornada and ", and());
//Operador and && significa E, os dois tem que ser verdadeiros

function not(){
    return  x != 10;
}
console.log("Função retornada not",not())
//Operador not != significa diferante