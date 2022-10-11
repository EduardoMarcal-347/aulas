var vetImgs = ["celular1.jpg", "celular2.jpg", "celular3.jpg"];
var pos = 1;

function mudarImg(){

    document.getElementById('slideShow').src = `img/${vetImgs[pos++]}`;
    if(pos==3){
        pos=0;
    }
}

function play(){

    setInterval(mudarImg, 3000);

}