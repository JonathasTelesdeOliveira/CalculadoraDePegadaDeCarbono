function imprimirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function limparCampo(){
    let EntradaNome = document.querySelector('.input-name');
    EntradaNome.value = '';
}
// Eletricidade
function alterarEntrada1 () {
    const entrada = document.querySelector('.conteiner_calc_entrada');
    entrada.placeholder = "(ex: R$ ou Kw)";
    entrada.id = "LUZ";
}
function alterarImagem1() {
    const imagem = document.querySelector('.conteiner_rosa2');
    imagem.src = "assets/Luz.png";
    imagem.alt = "Imagem LUZ carregada";
}
//---------------------------------------------------------------
// Gasto com Gás
function alterarEntrada2 () {
    const entrada = document.querySelector('.conteiner_calc_entrada');
    entrada.placeholder = "(ex:30,60,90)";
    entrada.id = "Gas";
}
function alterarImagem2() {
    const imagem = document.querySelector('.conteiner_rosa2');
    imagem.src = "assets/gas.png";
    imagem.alt = "Imagem 2 carregada";
}
//-----------------------------------------------------------------------
// Gasto com Ônibus
function alterarEntrada3 () {
    const entrada = document.querySelector('.conteiner_calc_entrada');
    entrada.placeholder = "(ex: Horas )";
    entrada.id = "Onibus";
}
function alterarImagem3() {
    const imagem = document.querySelector('.conteiner_rosa2');
    imagem.src = "assets/OnibusCanvas.png";
    imagem.alt = "Imagem onibus carregada";
}
//-----------------------------------------------------------------------
// Gasto com Viajem 
function alterarEntrada4 () {
    const entrada = document.querySelector('.conteiner_calc_entrada');
    entrada.placeholder = "(ex:KM )";
    entrada.id = "Automvel";
}
function alterarImagem4() {
    const imagem = document.querySelector('.conteiner_rosa2');
    imagem.src = "assets/viajem.png";
    imagem.alt = "Imagem automovel carregada";
}
//-----------------------------------------------------------------------
// Viajens de Avião
function alterarEntrada5 () {
    const entrada = document.querySelector('.conteiner_calc_entrada');
    entrada.placeholder = "(N° de viajens)";
    entrada.id = "Aviao1";
}
function alterarImagem5() {
    const imagem = document.querySelector('.conteiner_rosa2');
    imagem.src = "assets/Aviao2.png";
    imagem.alt = "Imagem avião carregada";
}
//-----------------------------------------------------------------------
// Viajens de Avião
function alterarEntrada6 () {
    const entrada = document.querySelector('.conteiner_calc_entrada');
    entrada.placeholder = "(N° de viajens)";
    entrada.id = "Aviao2";
}
function alterarImagem6() {
    const imagem = document.querySelector('.conteiner_rosa2');
    imagem.src = "assets/Aviao2.png";
    imagem.alt = "Imagem avião carregada";
}
// Frango
function alterarEntrada7 () {
    const entrada = document.querySelector('.conteiner_calc_entrada');
    entrada.placeholder = "(N°: 1,2,3,4,...)";
    entrada.id = "Frango";
}
function alterarImagem7() {
    const imagem = document.querySelector('.conteiner_rosa2');
    imagem.src = "assets/Frango.png";
    imagem.alt = "Imagem frango carregada";
}
// Carne
function alterarEntrada8 () {
    const entrada = document.querySelector('.conteiner_calc_entrada');
    entrada.placeholder = "(N° de refeições)";
    entrada.id = "Carne";
}
function alterarImagem8() {
    const imagem = document.querySelector('.conteiner_rosa2');
    imagem.src = "assets/carne.png";
    imagem.alt = "Imagem carne carregada";
}

let  etapa = 1;
function proximaEtapa() {
    if (etapa === 1) {
        // Eletricidade
        alterarEntrada1();
        alterarImagem1();
        imprimirTexto('h1', 'Consumo de eletriciade');
        imprimirTexto('p', 'Informe o consumo mensal em KW/. Veja onde encontrar essa informação na sua conta de energia.');
    }
    if (etapa === 2) {
        // Gasto com Gás
        alterarEntrada2();
        alterarImagem2();
        imprimirTexto('h1', 'Informe o consumo');
        imprimirTexto('p', 'Informe quantos dias dura um botijão de gás na sua casa.');
    }
    if (etapa === 3) {
        // Gasto com Ônibus
        alterarEntrada3();
        alterarImagem3();
        imprimirTexto('h1', 'KM Gasto');
        imprimirTexto('p', 'Quanto tempo gasta no ônibus mensalmente?');
    }
    if (etapa === 4) {
        // Gasto automovél
        alterarEntrada4();
        alterarImagem4();
        imprimirTexto('h1', 'KM Gasto');
        imprimirTexto('p', 'Informe os KM gasto pelos automóveis mensal?');
    }
    if (etapa === 5) {
        // Viajens de Avião
        alterarEntrada5();
        alterarImagem5();
        imprimirTexto('h1', 'N° de viajens');
        imprimirTexto('p', 'Quantas viagens curtas (500 km) de avião você faz por ano?');
    }
    if (etapa === 6) {
        // Viajens de Avião
        alterarEntrada5();
        alterarImagem5();
        imprimirTexto('h1', 'N° de viajens');
        imprimirTexto('p', 'Quantas viagens longas (+500 km) de avião você faz por ano?');
    }
     if (etapa === 7) {
        // Viajens de Avião
        alterarEntrada7();
        alterarImagem7();
        imprimirTexto('h1', 'N° refeiçãoes');
        imprimirTexto('p', 'Quantas refeições faz por dia?');
    }
     etapa++;
}
