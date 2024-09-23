// seleciona todos os titulos das tabs
const tabs = document.querySelectorAll('.tabLinks');
// seleciona todos os conteúdos das tabs
const tabContents = document.querySelectorAll('.tabContent');

// para cada tab adiciona um evento click
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // remove a class active
    tabs.forEach(t => t.classList.remove('active'));
    // esconde conteúdo de todas as tabs
    tabContents.forEach(content => content.style.display = "none");

    // torna a tab selecionada active
    tab.classList.add('active');
    // tira Tab ao id da tab para procurar o seu conteúdo pelo id -> tiro no pé?
    // block para mostrar o conteúdo
    document.getElementById(tab.id.replace('Tab', '')).style.display = "block";
  });
});

// obriga a que o conteúdo da primeira tab seja apresentado por defeito
tabs[0].click();
