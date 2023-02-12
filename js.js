
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var msg = document.getElementById('msg')
    var anoNasc = document.getElementById('ano-nasc')
    var img = document.querySelector('#img')
    var radioSexo = document.getElementsByName('rad-sexo')
    var idade = ano - anoNasc.value
    var genero = ''

    if (anoNasc.value.length == 0 || anoNasc.value > ano) {
        msg.innerHTML = 'Dados inválidos!'
        msg.style.color = 'red'
        img.src = ''
    } else {
        if (radioSexo[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade <= 10) {
                img.src = 'img/bebe-meninos.jpg'
            } else if (idade >= 10 && idade <= 20) {
                img.src = 'img/jovem-homem.jpg'
            } else if (idade > 20 && idade <= 60) {
                img.src = 'img/adulto-homem.jpg'
            } else if (idade > 60){
                img.src = 'img/idoso.jpg'
            }
        } else if (radioSexo[1].checked) {
            genero = 'mulher'
            if(idade >= 0 && idade <= 10) {
                img.src = 'img/bebe-menina.jpg'
            } else if (idade >= 10 && idade <= 20) {
                img.src = 'img/jovem-mulher.jpg'
            } else if (idade > 20 && idade <= 60) {
                img.src = 'img/adulto-mulher.jpg'
            } else if (idade > 60) {
                img.src = 'img/idosa.jpg'
            }
        }
        msg.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        msg.style.color = '#55c8df'
    }
}
