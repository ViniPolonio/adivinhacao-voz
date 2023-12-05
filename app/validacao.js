function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute
    if (ChuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div> Valor inválido: Fale com um número entre $ {menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3> O número secreto era ${numeroSecreto}</h3>
        
        <button id="jogar-novamente" class="btn-jogar>Jogar novamente</button>
        
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menorr <i class="fa-solid fa-up-long"></i></div>`
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }
}

function ChuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero >= maiorValor || numero < maiorValor
}

SpeechRecognitionAlternative.addEventListener('end', () => recognotion.start())