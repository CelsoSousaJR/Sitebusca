// Referência para o elemento reposicionável
const elementoReposicionavel = document.getElementById('elemento-reposicionavel');

// Variáveis para armazenar a posição inicial do clique e a posição do elemento
let posicaoInicialX, posicaoInicialY, elementoX, elementoY;

// Evento de escuta para quando o usuário pressiona o botão do mouse
elementoReposicionavel.addEventListener('mousedown', iniciarArraste);
console.log(elementoReposicionavel)
function iniciarArraste(evento) {
    evento.preventDefault();

    // Obter a posição inicial do clique
    posicaoInicialX = evento.clientX;
    posicaoInicialY = evento.clientY;

    // Obter a posição atual do elemento
    const estiloElemento = getComputedStyle(elementoReposicionavel);
    elementoX = parseInt(estiloElemento.left);
    elementoY = parseInt(estiloElemento.top);

    // Adicionar eventos de escuta para detectar quando o usuário solta o botão do mouse e move o mouse
    document.addEventListener('mouseup', pararArraste);
    document.addEventListener('mousemove', reposicionarElemento);
}

function reposicionarElemento(evento) {
    evento.preventDefault();

    // Calcular a diferença entre a posição inicial do clique e a posição atual do mouse
    const diferencaX = evento.clientX - posicaoInicialX;
    const diferencaY = evento.clientY - posicaoInicialY;

    // Atualizar a posição do elemento com base na diferença
    elementoReposicionavel.style.left = `${elementoX + diferencaX}px`;
    elementoReposicionavel.style.top = `${elementoY + diferencaY}px`;
}

function pararArraste() {
    // Remover eventos de escuta quando o usuário soltar o botão do mouse
    document.removeEventListener('mouseup', pararArraste);
    document.removeEventListener('mousemove', reposicionarElemento);
}
