var contador = 0;

function trocarImagem(){
    var div = document.getElementById("foto");

    if (contador == 0) {
        div.setAttribute("style", "background:url(./Imagens/certo.png)");
        contador++;
    }
    else if (contador == 1) {
        div.setAttribute("style", "background:url(./Imagens/errado.png)");
        contador--;
    }
}