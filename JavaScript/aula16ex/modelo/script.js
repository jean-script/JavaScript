function adicionar() {
    var num = document.getElementById("num").value;
    var res = document.getElementById("res");
    if (num.length == 0) {
        alert("[ERRO] Digite um número!")
    }else{
        res.innerHTML += `<p>Adicionado ${num}</p>`
    }
}
