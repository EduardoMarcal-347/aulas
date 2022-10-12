function moverTxt(){
    var entrada = document.getElementById('entradaTxt');
    var txtFinal = document.getElementById('txtFinal');
    txtFinal.value = entrada.value;
    entrada.value = " ";
}

function startFnMover(){
    var time = document.getElementById('optTime').value;
    setTimeout(moverTxt, 1000*time);

}