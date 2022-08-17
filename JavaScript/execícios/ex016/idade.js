function calcidade(){
    let agora = new Date
    var ano = agora.getFullYear()

    var nasc = Number(prompt("Em que ano nasceu?"));
    var idade = ano - nasc 

    let res = document.querySelector("#saida");
    res.innerHTML =`<p> Quem nasceu em ${nasc} vai completar <strong>${idade}</strong> anos em ${ano}.</p>`
}