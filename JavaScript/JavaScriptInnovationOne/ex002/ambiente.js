/*function soma(n1 , n2){
    return n1 + n2;
}
console.log(soma(5,10))
  
function setReplace(frase, nome,novo_nome){
    return frase.replace(nome , novo_nome)
}
console.log(setReplace("vai Japão","Japão" ,"Brasil"));

var validar = 0;

function validadeIdade(idade){
     if (idade >= 18){
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual sua idade?")
validadeIdade(idade);
console.log(validar);
console.log("Sua idade é " + idade)
*/

function botão(){
    var res = document.querySelector("#saida");
    res.innerHTML = `<p><strong>Obrigado por clicar<strong></p>`
}
function trocar(){
    document.getElementById("saida").innerHTML = "<p>Thanks you, how are you? My brothers</p>"
}

function redirecionar(){
    document.querySelector("#saida");
    open("https://www.youtube.com/")//Abre novas abas thanks you 
    //location.href = "https://www.youtube.com/"//abre sobre a sua página

    //var img = document.querySelector("#fundo");
    //img.style.backgroundImage = "url('Wallpaper_ben$a_pc.jpg')"
}
function saida(){
    document.getElementById("saida").innerHTML = `<p>voltou</p>`
}
