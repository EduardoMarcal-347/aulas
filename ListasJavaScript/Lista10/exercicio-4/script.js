let timer = prompt('Digite o tempo a ser para carregar a página:')

function showAviso(){
    
    let aviso = document.getElementById('aviso');
    aviso.innerHTML = `Por favor, aguarde ${timer} segundos para carregar a página do Google`;
    timer--;
    if(timer==-1){
        loadPage();
    }

}


function initWarning(){

    crono = setInterval(showAviso, 1000);

}

function loadPage(){

    clearInterval(crono);
    window.location.href = "https://www.google.com.br/";

}