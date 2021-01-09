function carregar(){
    var msg  = window.document.getElementById('msg')
    var img  = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
   // var hora = 21
    msg.innerHTML = `Agora são ${hora}:${minutos} horas. `
    if (hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#F4A460'
    } else if (hora >=12 && hora <= 18){
        //BOA TARDE
        img.src = 'fototarde.jpg'
        document.body.style.background = '#dda994'
    } else {
        //BOA NOITE
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#054e5f'

    }

}


