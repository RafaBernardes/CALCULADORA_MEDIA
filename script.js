function calcular() {

    var mediaAprovacao = document.getElementById('mediaAprovacao').value.trim(); // OBTEM O VALOR DO CAMPO E REMOVE ESPACO EM BRANCO

    // VERIFICA SE O CAMPO MEDIAAPROVACAO ESTA VAZIO
    if (mediaAprovacao === "") {
        alert("Preencha o campo Média para aprovação.");
        return; // RETORNA SE O CAMPO MEDIA ESTIVER VAZIO
    }

    if(mediaAprovacao <= 0 || mediaAprovacao >= 100){
        alert("Valor inválido!");
        limparCampos();
        return; // NAO CALCULA A MEDIA SE O CAMPO FOR <= QUE 0 OU >= 100 
    }

    // CONVERTE O VALOR PARA NUMERO PARA USAR COMO COMPARACAO
    mediaAprovacao = parseFloat(mediaAprovacao);

    // VERIFICA SE O VALOR É UM NUMERO VALIDO
    if (isNaN(mediaAprovacao)) {
        alert("Digite um número válido para a Média de Aprovação.");
        return; // RETORNA SE NAO FOR UM NUMERO VALIDO
    }
  
    // OBTEM OS VALORES DE CADA NOTA 
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);

    // CALCULO MEDIA
    var media = (nota1 + nota2 + nota3) / 3;

    // MOSTRA A MEDIA NA DIV RESULTADO
    var resultadoFinal = document.querySelector('.resultadoFinal');
    resultadoFinal.textContent = ' ' + media.toFixed(2); // EXIBE MEDIA COM DUAS CASAS DECIMAIS

/*______________________________________________________*/

var status = document.querySelector('.status');
var mediaAprovacao = parseFloat(document.getElementById('mediaAprovacao').value);


// VERIFICA SE A MEDIA E MAIOR OU IGUAL A MEDIA DE APROVACAO   

if (media >= mediaAprovacao) {
    status.textContent = 'Aprovado';
    status.classList.add('aprovado');
    status.classList.remove('reprovado');
} else {
    status.textContent = 'Reprovado';
    status.classList.add('reprovado');
    status.classList.remove('aprovado');
}

if (media < mediaAprovacao) {
    status.style.color = 'red';  //SE A MEDIA FOR MENOR QUE A MEDIA DE APROVACAO, O TEXTO FICA VERMELHO
} else {
    status.style.color = 'blue'; // SE A MEDIA FOR MAIOR OU IGUAL FICA AZUL
}

if(media < mediaAprovacao) {
    resultadoFinal.style.color = 'red'; // SE A MEDIA FOR MENOR QUE A MEDIA DE APROVACAO, O TEXTO FICA VERMELHO
} else {
    resultadoFinal.style.color = 'blue'; //SE A MEDIA FOR MAIOR OU IGUAL FICA AZUL
}

while(nota1 <= 0 || nota1 > 100){
    alert("nota 1 invalida")
    limparCampos();
    return;
}
if(nota2 <= 0 || nota2 > 100){
    alert("nota 2 invalida")
    limparCampos();
    return;
}
if(nota3 <= 0 || nota3 > 100){
    alert("nota 3 invalida")
    limparCampos();
    return;
}


// FUNCAO LIMPAR CAMPOS

function limparCampos() {
    document.getElementById('nota1').value = ''; // Limpa o campo da nota 1
    document.getElementById('nota2').value = ''; // Limpa o campo da nota 2
    document.getElementById('nota3').value = ''; // Limpa o campo da nota 3
    document.getElementById('mediaAprovacao').value = ''; // Limpa o campo da média de aprovação
    var resultadoFinal = document.querySelector('.resultadoFinal');
    resultadoFinal.textContent = ''; // Limpa o resultado final na div
    var status = document.querySelector('.status');
    status.textContent = ''; // Limpa o status na div
}
}