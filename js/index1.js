// console.log('hi this is js');

function openNav() {
    if (screen.width < 500) {
        document.getElementById("slider").style.width = "200px";
    }
    else { document.getElementById("slider").style.width = "500px"; }
}

function closeNav() {
    document.getElementById("slider").style.width = "0";
}

function clicked(param){
    console.log(`Hello! you clicked on ${param}`);
}