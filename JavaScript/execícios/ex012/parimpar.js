function teste(){
    let numero = Number(prompt("Digite um número:"));
    let tipo = ``
    if (numero % 2 == 0) {
        tipo = '<strong>PAR</strong>';
    }else {
        tipo = '<strong>ÌMPAR</strong>';
    }
    var result = document.querySelector('#res');
    result.innerHTML =`<p> O número ${numero} que foi digitado é ${tipo}!</p>`
}