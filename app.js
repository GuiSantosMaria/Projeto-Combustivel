function calcular() {
    let etanol = parseFloat(document.getElementById('etanol').value);
    let gasolina = parseFloat(document.getElementById('gasolina').value);
    if (isNaN(etanol) || isNaN(gasolina) || etanol <= 0 || gasolina <= 0) {
        alert('Por favor, insira valores válidos e positivos para etanol e gasolina.');
        return;
    }
    
    let resultado = etanol / gasolina;
    
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
