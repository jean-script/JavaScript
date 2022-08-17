function verificar(){
   var data = new Date();
   var ano = data.getFullYear();
   var fano = document.querySelector("#txtando");
   var res = document.querySelector("#res");
   if(fano.value.length == 0 || Number (fano.value) > ano){
       alert(" [ERRO]Verifique os dados e tente novamente");
   }else{
       var fsex = document.getElementsByName("radsex");
       var idade = ano - Number(fano.value);
       var genero = ''
       var img = document.createElement('img');
       img.setAttribute('id', 'foto');
       if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'homemP.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'homemJ.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'homemA.png')
            }else{
                //idoso
                img.setAttribute('src', 'homenV.png')
                }
        }else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'mulherP.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src','mulherJ.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src','mulherA.png')
            } else {
                //idoso
                img.setAttribute('src','mulherV.png')
       }
    }
       res.style.textAlign = "center"
       res.innerHTML=`Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
   }
}
