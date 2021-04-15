function upDate(boxColor){
    document.getElementById('main').style.backgroundImage = "url('')";
    document.getElementById('main').style.backgroundColor = boxColor.style.backgroundColor;
}

function upDateTwo(boxColor){

    document.getElementById('main').style.backgroundImage = boxColor.style.backgroundImage;
}

function upDateTre(boxColor){

    document.getElementById('main').style.backgroundImage = "url("+ boxColor.src +")";
}