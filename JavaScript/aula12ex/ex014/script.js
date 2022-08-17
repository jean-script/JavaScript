function carregar() {
    var msg = document.getElementById('msg');;
    var img = document.getElementById("imagem");
    var data = new Date()
    hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'manha.png'
        document.body.style.background = "#e7f0f7"
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = "#846a4e"
    } else {
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = "#086167"
    }
}
