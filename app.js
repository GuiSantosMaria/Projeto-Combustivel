function calcular() {
    // Obtém os valores dos inputs
    let etanol = parseFloat(document.getElementById('etanol').value);
    let gasolina = parseFloat(document.getElementById('gasolina').value);

    // Verifica se algum dos valores é inválido (NaN ou menor ou igual a zero)
    if (isNaN(etanol) || isNaN(gasolina) || etanol <= 0 || gasolina <= 0) {
        alert('Por favor, insira valores válidos e positivos para etanol e gasolina.');
        return;
    }

    // Calcula a razão
    let resultado = etanol / gasolina;

    // Define a imagem e mensagem conforme a razão
    let mensagem = `Resultado: ${resultado.toFixed(2)}<br>`;
    
    if (resultado <= 0.7) {
        document.getElementById('status').src = "./Imagens/tanqueEtanol.png";
        mensagem += "Abasteça com <strong>etanol</strong>: é mais vantajoso.";
    } else {
        document.getElementById('status').src = "./Imagens/tanqueGasolina.png";
        mensagem += "Abasteça com <strong>gasolina</strong>: é a melhor opção.";
    }

    document.getElementById('mensagem').innerHTML = mensagem;
}

function limpar() {
    document.getElementById('status').src = './Imagens/tanque.png';
    document.getElementById('mensagem').innerHTML = '';
    document.getElementById('etanol').value = '';
    document.getElementById('gasolina').value = '';
}
