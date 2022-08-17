var contador = 0 
let res = document.querySelector('section#res')
function contar(){
    contador ++
    res.innerHTML = `<p>O  contador está com <mark>${contador}</mark> clientes.</p>`
}
function zera(){
    contador = 0
   res.innerHTML = `<p>O contador está com 0 clientes.</p>`
}