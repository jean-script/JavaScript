function media() {
    var nome = prompt("Qual é o nome do aluno");
    let n1 = Number(prompt(`Qual foi a primeira nota de ${nome}?`));
    let n2 = Number(prompt('Além de ' + n1 + ', qual foi a outra nota ' + nome + '?'));
    med = (n1 + n2) / 2
    var msg = ""
    if (med >= 6) {
        msg = `Meus parabéns!`
    } else {
        msg = `Estude um pouco mais`
    }
    var res = document.querySelector("#situação");
    res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.</p>`;
    res.innerHTML += `<p> As notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>`;
    res.innerHTML += `<p>A média final será <mark>${med}</mark>.</p>`;
    res.innerHTML += `<p>A mensegem que temos é: <strong style='color:red;'>${msg}</strong>.</p>`

}