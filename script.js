document.addEventListener('DOMContentLoaded', function () {

    // Dados do gráfico
    let chartData = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Vendas',
            data: [100, 120, 90, 150, 180, 200],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };

    // Opções do gráfico
    let chartOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    // Renderizar gráfico
    let ctx = document.getElementById('chart').getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: chartOptions
    });

    // Dados da tabela
    let tableData = [
        { mês: 'Janeiro', vendas: 100 },
        { mês: 'Fevereiro', vendas: 120 },
        { mês: 'Março', vendas: 90 },
        { mês: 'Abril', vendas: 150 },
        { mês: 'Maio', vendas: 180 },
        { mês: 'Junho', vendas: 200 }
    ];

    // Renderizar tabela
    let table = document.getElementById('data-table');
    tableData.forEach(function (row) {
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${row.mês}</td><td>${row.vendas}</td>`;
        table.appendChild(tr);
    });
});