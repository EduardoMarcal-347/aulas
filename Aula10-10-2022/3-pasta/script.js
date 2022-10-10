var crono1;

function incrementar(){
    cont = document.getElementById("cont").innerHTML++;
}

function play(){

    crono1 = setInterval(incrementar, 1000);
    
}

function parar(){

    clearInterval(crono1);

}