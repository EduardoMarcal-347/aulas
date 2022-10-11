var vetImgs = ["celular1.jpg", "celular2.jpg", "celular3.jpg"];
var pos = 1;
var slideShow;

function mudarImg(){

    document.getElementById('slideShow').src = `img/${vetImgs[pos++]}`;
    if(pos==3){
        pos=0;
    }
}

function play(){

    slideShow = setInterval(mudarImg, 1000);

}
function pause(){

    clearInterval(slideShow);

}