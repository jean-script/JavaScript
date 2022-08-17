let amigo = {
    nome: "José",
    sexo: "m",
    peso: 50,
    engordar(p = 0) {
        console.log("engordou");
        this.peso += p
    }
}
amigo.engordar(30)
console.log(`${amigo.nome} pesa ${amigo.peso}kg `)