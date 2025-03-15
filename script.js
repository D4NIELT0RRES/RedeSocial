// Função para alternar entre as telas
function alternarTelas() {
    const telaLogin = document.getElementById('login-screen');
    const telaRegistro = document.getElementById('register-screen');

    if (telaLogin.classList.contains('hidden')) {
        telaLogin.classList.remove('hidden');
        telaRegistro.classList.add('hidden');
    } else {
        telaLogin.classList.add('hidden');
        telaRegistro.classList.remove('hidden');
    }
}

// Função para inicializar os eventos de clique
function inicializarEventos() {
    // Evento para o botão "Registre-se" na tela de Login
    const linkRegistreSe = document.querySelector('.register-text a');
    if (linkRegistreSe) {
        linkRegistreSe.addEventListener('click', function (e) {
            e.preventDefault(); // Evita o comportamento padrão do link
            alternarTelas();
        });
    }

    // Evento para o botão "Login" na tela de Registro
    const linkLogin = document.querySelector('.login-text a');
    if (linkLogin) {
        linkLogin.addEventListener('click', function (e) {
            e.preventDefault(); // Evita o comportamento padrão do link
            alternarTelas();
        });
    }
}

// Função para iniciar o sistema de telas
function iniciarSistemaTelas() {
    // Verifica se as telas existem na página
    const telaLogin = document.getElementById('login-screen');
    const telaRegistro = document.getElementById('register-screen');

    if (telaLogin && telaRegistro) {
        // Inicializa os eventos de clique
        inicializarEventos();

        // Garante que a tela de login esteja visível ao carregar a página
        telaLogin.classList.remove('hidden');
        telaRegistro.classList.add('hidden');
    } else {
        console.error("Telas de login ou registro não encontradas!");
    }
}

// Inicia o sistema de telas quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', iniciarSistemaTelas);