let elementoDigital = document.querySelector ('.digital')

let elementoSegundos = document.querySelector ('.p_s')
let elementoMinutos = document.querySelector ('.p_m')
let elementoHoras = document.querySelector ('.p_h')

function relogioAtualizado() {
    let agora = new Date()

    let hora = agora.getHours()
    let minuto = agora.getMinutes()
    let segundo = agora.getSeconds()

    elementoDigital.innerHTML = `${zeroFixo (hora)}:${zeroFixo (minuto)}:${zeroFixo (segundo)}`

    let segundosDeg = ((360 / 60) * segundo) - 90
    let minutosDeg = ((360 / 60) * minuto) - 90
    let horasDeg = ((360 / 12) * hora) - 90

    elementoSegundos.style.transform = `rotate(${segundosDeg}deg)`
    elementoMinutos.style.transform = `rotate(${minutosDeg}deg)`
    elementoHoras.style.transform = `rotate(${horasDeg}deg)`
}

function zeroFixo (tempo) {
    if (tempo < 10) {
        return `0${tempo}`
    } else {
        return tempo
    }

    //Pode fazer de forma simplificada:
    //return tempo < 10 ? `0${tempo} : tempo`
}

setInterval (relogioAtualizado, 1000)

relogioAtualizado()