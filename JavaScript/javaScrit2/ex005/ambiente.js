
var pessoa = {
    idade: 20,
    nome:"Jean Carlos",
    sobreNome:"Aires",
    altura: 1.68,
    casado: false,
    aniversario: function (){
        pessoa.idade++;
    },
    nomoComSobreNome: function(){
        pessoa.nome = pessoa.nome + " " + pessoa.sobreNome;
    }
};
pessoa.aniversario();
pessoa.nomoComSobreNome()
console.log(pessoa);