var pessoa = {
    idade: 25,
    nome: "Jean Carlos",
    altura: 1.60,
    casado: false,
};

    var apresentar = function (){
    console.log("O nome da pessoa é " + pessoa.nome +"\n" 
    +"Sua idade:"+ pessoa.idade + " anos" + "\n");
    if(pessoa.idade >= 25){
        alert("Esta Jovem")
    } else {
        alert("Está adulto")
    }
};
apresentar();