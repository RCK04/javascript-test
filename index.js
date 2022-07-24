function carregar(){
    let mensagem = document.getElementById('mensagem')
    let imagem = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12)
    {
        //Bom dia
        imagem.src = './src/images/Zenitsu.webp'
        imagem.src = './src/images/Inosuke.webp'
        document.body.style.background = '#ecdc9f'
    }

    else if(hora >= 12 && hora < 18)
    {
        // Boa tarde
        imagem.src = './src/images/Rengoku.webp'
        imagem.src = './src/images/tanjiro.webp'
        document.body.style.background = '#b9846f'
    
    }   

    else{
        // Boa noite

        imagem.src = './src/images/Akaza.webp'
        document.body.style.background = '#515154'
    }
}