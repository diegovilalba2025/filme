document.addEventListener("DOMContentLoaded", function() {
    // Definindo a variável para indicar se o site está em manutenção
    const manutencaoAtiva =false; // Altere para false quando o site estiver fora de manutenção

    // Função para verificar se o site está em manutenção
    function verificarManutencao() {
        if (manutencaoAtiva) {
            // Redireciona para a página de manutenção
            window.location.href = "manutencao.html"; // Caminho relativo correto
        }
    }

    // Chamando a função de verificação de manutenção
    verificarManutencao();

    // Login
    if (document.getElementById("formLogin")) {
        document.getElementById("formLogin").addEventListener("submit", function(event) {
            event.preventDefault();
            
            const emailLogin = document.getElementById("emailLogin").value;
            const senhaLogin = document.getElementById("senhaLogin").value;
            
            const emailCadastrado = localStorage.getItem("email");
            const senhaCadastrada = localStorage.getItem("senha");
            
            if (emailLogin === emailCadastrado && senhaLogin === senhaCadastrada) {
                window.location.href = "index.html";
            } else {
                alert("E-mail ou senha incorretos!");
            }
        });
    }

    // Cadastro
    if (document.getElementById("formCadastro")) {
        document.getElementById("formCadastro").addEventListener("submit", function(event) {
            event.preventDefault();
            
            const nome = document.getElementById("nome").value;
            const email = document.getElementById("emailCadastro").value;
            const senha = document.getElementById("senhaCadastro").value;
            
            localStorage.setItem("nome", nome);
            localStorage.setItem("email", email);
            localStorage.setItem("senha", senha);
            
            window.location.href = "site.html";
        });
    }

    // Recuperação de Senha
    if (document.getElementById("formRecuperacao")) {
        document.getElementById("formRecuperacao").addEventListener("submit", function(event) {
            event.preventDefault();
            
            const emailRecuperacao = document.getElementById("emailRecuperacao").value;
            const emailCadastrado = localStorage.getItem("email");
            
            if (emailRecuperacao === emailCadastrado) {
                alert("E-mail enviado para recuperação de senha! Verifique sua caixa de entrada.");
                window.location.href = "site.html";
            } else {
                alert("E-mail não encontrado! Tente novamente.");
            }
        });
    }
});
