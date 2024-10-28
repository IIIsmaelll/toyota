document.addEventListener("DOMContentLoaded", function() {
    const botaoSim = document.getElementById("botaoSim");
    const botaoNao = document.getElementById("botaoNao");

    // Função para exibir uma mensagem quando o botão "SIM" é clicado
    botaoSim.addEventListener("click", function() {
        alert("rsrsrsrs");
    });

    // Função para mover o botão "NÃO" para uma posição aleatória
    botaoNao.addEventListener("mouseenter", function() {
        // Gera posições aleatórias dentro dos limites da janela
        const larguraJanela = window.innerWidth - botaoNao.offsetWidth;
        const alturaJanela = window.innerHeight - botaoNao.offsetHeight;

        const posicaoAleatoriaX = Math.floor(Math.random() * larguraJanela);
        const posicaoAleatoriaY = Math.floor(Math.random() * alturaJanela);

        // Define a nova posição do botão
        botaoNao.style.position = "absolute";
        botaoNao.style.left = `${posicaoAleatoriaX}px`;
        botaoNao.style.top = `${posicaoAleatoriaY}px`;
    });
});
