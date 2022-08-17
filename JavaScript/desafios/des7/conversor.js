var cotação = Number(prompt("Antes de mais nada. Quanto está a cotação do dólar agora?"));
cotação.toFixed(2).replace('.',',');
function converter(){
    var re = document.querySelector("#res");
    var din= Number(prompt("Quantos R$ você tem atualmente?"));
    con = din * 10
    re.innerHTML += `<p>cotação do dolar ${cotação}.</p>`
    re.innerHTML += `<p>Seu dinheiro em R$ ${din} reais, e em dolar é ${con}.</p>`
}