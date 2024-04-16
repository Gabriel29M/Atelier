//Selecionando os elementos do DOM após o DOM estar totalmente carregado!

document.addEventListener('DOMContentLoaded', function () {
    // Selecionando os elementos do DOM
    let valor1Input = document.getElementById('valor1');
    let valor2Input = document.getElementById('valor2');
    let calcularBtn = document.getElementById('calcularBtn');
    let resultadoDiv = document.getElementById('resultado');

    // Adicionando um ouvinte de evento para o botão
    calcularBtn.addEventListener('click', function () {
        // Convertendo os valores dos inputs para números
        let valor1 = parseFloat(valor1Input.value);
        let valor2 = parseFloat(valor2Input.value);

        // Verificando se os valores são válidos
        if (isNaN(valor1) || isNaN(valor2)) {
            resultadoDiv.textContent = "Por favor, insira números válidos.";
        } else {
            // Calculando a soma
            let soma = valor1 + valor2;

            // Exibindo o resultado
            resultadoDiv.textContent = "A soma é " + soma;
        }
    });
});
