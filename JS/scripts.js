/* ===============================================
   SCRIPT DAS ABAS (Tabs)
   Usado em: parque.html, petp.html, pnmmt.html
   ===============================================
*/
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Esconde todo o conteúdo das abas
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove a classe "active" de todos os botões de aba
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostra a aba clicada e adiciona a classe "active" ao botão
    var tabToShow = document.getElementById(tabName);
    if (tabToShow) {
        tabToShow.style.display = "block";
    }

    if (evt && evt.currentTarget) {
        evt.currentTarget.className += " active";
    }
}
    // Ativa a primeira aba por padrão (se houver abas na página)
    var firstTabButton = document.querySelector(".tab-link");
    if (firstTabButton) {
        firstTabButton.click();
    }
