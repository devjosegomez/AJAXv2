let xhr = new XMLHttpRequest(), method= "GET", url ="resultado.html";

window.onload = function(){
    this.document.querySelector("#btnBring").addEventListener("click", MostrarMensaje);
}

function MostrarMensaje(){
    xhr.open(method, url, true);
    xhr.onload = funcionCallBack;
    xhr.send(null);
    console.log("Estamos en la funcion MostrarMensaje");
}

function funcionCallBack(){
    console.log("Estamos en la funcion callBack");
    document.querySelector("#resultado").innerHTML = xhr.responseText;
}