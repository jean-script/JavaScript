function gerar(){
    var min = 1
    var max = 100
    var dif = max - min 
    var aleatorio = Math.random() //Esta função gera um valor real aleatorio entre 0 e 1
    var num = min + Math.trunc(dif * aleatorio)
    var res = document.querySelector("#resposta");
    res.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark>!</p>`
}
function Limpar(){
    let res = document.getElementById("resposta");
    res.innerHTML = null //vai esvaziar a section toda
}