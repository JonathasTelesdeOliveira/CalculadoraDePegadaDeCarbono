function imprimirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

imprimirTexto('h1', 'Consumo de eletricidade');

imprimirTexto('p', 'Insira seu consumo MENSAL de energia, ou o valor de sua conta. Veja onde encontrar essa informação na sua conta de energia elétrica');

function limparCampo(){
    let EntradaNome = document.querySelector('.input-name');
    EntradaNome.value = '';
}
