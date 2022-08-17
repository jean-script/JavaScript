function calcular(){
    var produto = prompt("Digite aqui o produto desejado:");
    var preço = Number(prompt('Digite aqui o preço do '+produto+':'));
    var saida = document.querySelector("#saida");
    var desc = preço * 10/100
    saida.innerHTML = `<p>o produto  solicitado é ${produto}</p>`
    saida.innerHTML +=`<p> seu valor é ${preço}</p>`
    saida.innerHTML +=`<p> Com o desconto sai ${preço - desc}` 
}