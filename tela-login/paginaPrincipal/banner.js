
let fotos = ["banner1.jpg", "banner2.jpg", "banner3.jpg"];




function trocarFotos(foto){
    document.querySelector(".imagem").src = "img/" + fotos[foto];
}

let fotoAtual = 0;
trocarFotos(fotoAtual);

setInterval(function(){
    fotoAtual ++;
    if(fotoAtual > 2){
        fotoAtual = 0;
    }

    trocarFotos(fotoAtual);
},3000);