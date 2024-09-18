function toggleTexto() {
    const texto = document.querySelector('#texto');
    const btMostrar = document.querySelector('#btMostrar');
    
    if (texto.style.visibility === 'hidden') {
        texto.style.visibility = 'visible';
        btMostrar.textContent = 'Esconder';
    } else {
        texto.style.visibility = 'hidden'; 
        btMostrar.textContent = 'Mostrar'; 
    }
}

document.querySelector('#btMostrar').addEventListener('click', toggleTexto);
