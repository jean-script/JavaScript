function clicou(){
    document.getElementById("agradecimento").innerHTML= `<strong>Obrigado por clicar</strong>`;
}
function redirecionar(){
    open("https://www.youtube.com/")//abre em outra aba do navegador
    location.href = "https://github.com/gustavoguanabara"//abre na mesma aba
}
function trocar(element){
    //document.getElementById("mousemove").innerHTML =`Obrigado jasgj`
    element.innerHTML = `Obrigado por passar o mouse`;
}
function voltar(element){
    //document.getElementById("mousemove").innerHTML =`Passe o mouse aqui`;
    element.innerHTML = `voltou`
}
function load(){
    alert("Página carregada")
}
function funçaoChange(element){
    console.log(element.value);
}