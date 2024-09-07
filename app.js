function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar a placa do veiculo no formato XXX-9999</p>";
        return;
    }

    // Converte a placa para maiúsculas para comparação
    campoPesquisa = campoPesquisa.toUpperCase();

    // Procura o veículo pela placa no array de dados
    let veiculoEncontrado = dados.find(veiculo => veiculo.placa === campoPesquisa);

    if (veiculoEncontrado) {
        // Exibe os dados do veículo se encontrado
        section.innerHTML = `
            <div class="item-resultado">
                <h2>${veiculoEncontrado.marca} ${veiculoEncontrado.modelo}</h2>
                <p><strong>Placa:</strong> ${veiculoEncontrado.placa}</p>
                <p><strong>Quilometragem:</strong> ${veiculoEncontrado.quilometragem} km</p>
                <p><strong>Óleo:</strong> ${veiculoEncontrado.oleo}</p>
            </div>
        `;
    } else {
        // Exibe mensagem de erro se a placa não for encontrada
        section.innerHTML = "<p>Veículo não cadastrado.</p>";
    }
}