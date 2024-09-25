const modal = document.getElementById("modal");
const imagemModal = document.getElementById("imagemModal");
const botaoFechar = document.getElementById("fechar");

const imagens = document.querySelectorAll(".fotografias");

imagens.forEach(imagem => {
    imagem.addEventListener("click", () => {
        modal.style.display = "block";
        imagemModal.src = imagem.src;
    });
});

botaoFechar.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", () => {
    modal.style.display = "none";
});

