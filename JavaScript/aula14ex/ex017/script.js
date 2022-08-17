function contar(){
    var inici = document.getElementById("inicio");
    var fi = document.getElementById("fim");
    var pass = document.getElementById("passo");
    var res = document.getElementById("resultado");
   
    if(inici.value.length == 0 || fi.value.length == 0 || pass.value.length == 0){
       // alert("[ERRO] Faltam dados!")
        res.innerHTML=`Impossìvel contar`
    }else{
     res.innerHTML = `Contando <br>`
     let i =Number(inici.value);
     let f = Number(fi.value);
     let p = Number(pass.value);
     if(p <= 0){
         alert("Passo invalido! Considerando passo 1")
         p = 1
     }
    if(i < f){
        //contagem crescente
         for(let c = i;c <= f; c += p ){
           res.innerHTML+=`${c} \u{1F449}	`
     }
        }else{
            //contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML +=` ${c} \u{1F449} `
            }
        }
        res.innerHTML+=`\u{1F3C1}`
    }
        
}

