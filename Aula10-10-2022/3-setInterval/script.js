var idCrono1;

function incrementar(){
    cont = document.getElementById("cont").innerHTML++;
}

function play(){

    idCrono1 = setInterval(incrementar, 1000);
    document.getElementById('btnPlay').disabled = true;
    document.getElementById('btnPause').disabled = false;
    document.getElementById('btnParar').disabled = false;
    
}

function pausar(){

    clearInterval(idCrono1);
    document.getElementById('btnPlay').disabled = false;
    document.getElementById('btnPause').disabled = true;
    document.getElementById('btnParar').disabled = true;

}

function parar(){

    pausar();
    document.getElementById('cont').innerHTML = `0`;
}