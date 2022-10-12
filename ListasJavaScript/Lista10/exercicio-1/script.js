function moverTxt(){
    var entrada = document.getElementById('entradaTxt');
    var txtFinal = document.getElementById('txtFinal');
    txtFinal.value = entrada.value;
    entrada.value = " ";
}

function startFnMover(){

    setTimeout(moverTxt, 2000);

}