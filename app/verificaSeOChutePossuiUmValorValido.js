function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;
    if (Number.isNaN(numero)) {
        console.log('Valor inválido');
    }
}