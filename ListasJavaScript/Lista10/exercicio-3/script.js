let nome = prompt('Insira seu nome:');
let cont = 14;

function aumentarNome(){
    
    document.getElementById('nomeTxt').innerHTML = `<span style="font-size:${cont}px">${nome}</span>`;
    cont+=2;
    if(cont==40){
        endExibicao();
    }
    
}

function initExibicao(){

    crono = setInterval(aumentarNome, 500);

}

function endExibicao(){

    clearInterval(crono);

}
