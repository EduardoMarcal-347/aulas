vetNomes = [];
index = 0;
function loadVetores(){

    for(i=0; i<5; i++){
        vetNomes[i] = {nome: prompt(`Insira o nome ${i+1}/5`)};
    }

    vetInterval();
}

function printVetores(){

    nome = JSON.stringify(vetNomes[index].nome);
    nome = nome.replaceAll('"',' ');
    document.getElementById('ok').innerHTML += `<p>${nome}</p>`;
    index++;
    if(index==5){
        stopVetlog();
    }
}

function vetInterval(){

    vetCrono = setInterval(printVetores, 1000);

}

function stopVetlog(){

    clearInterval(vetCrono);

}