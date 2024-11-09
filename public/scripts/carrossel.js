
var radio = document.querySelector('.manual-btn');
var cont = 1

document.getElementById('btn-1').checked = true
setInterval(() => {
    proximaimg()

}, 4000)

function proximaimg(){
    cont++
    if(cont>4){
        cont=1
    }
    document.getElementById('btn-' + cont).checked = true
}