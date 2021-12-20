function validarSenhaForca(){
    var senha = document.getElementById('senhaForca').value;
    var forca = 0;
    document.getElementById("impSenha"); 

    if((senha.length >= 4) && (senha.length <= 7)){
        forca += 10;
    }else if(senha.length > 7){
        forca += 25;
    }

    if((senha.length >= 5 ) && (senha.match(/[a-z]+/))){
        forca += 10;
    }

    if((senha.length >= 6 ) && (senha.match(/[A-Z]+/))){
        forca += 20;
    }

    if((senha.length >= 7) && (senha.match(/[@#$%&;]+/))){
        forca += 25;

    }

    exibirForca(forca);
    
}


function exibirForca(forca){
    document.getElementById("impForcaSenha");
    document.getElementById("barra");

    if((forca >= 30) && (forca < 50)) {
        document.getElementById("erroSenhaForca").innerHTML = "<div class='barra-media'><span style='color: #FFD700'>Sua senha está média</span></div>";
    }else if((forca >= 50) && (forca < 70)) {
    document.getElementById("erroSenhaForca").innerHTML = "<div class='barra-forte'><span style='color: #008000'>Sua senha está forte</span></div>";
    }else if((forca >= 70) && (forca < 90)) {
    document.getElementById("erroSenhaForca").innerHTML = "<div class='barra-muito-forte'><span style='color: #90EE90'>Sua senha está muito forte</span></div>";
    }else if((forca >= 20) && (forca < 25)) {
    document.getElementById("erroSenhaForca").innerHTML = "<div class='barra'><span style='color: #ff0000 '>Sua senha está muito fraca</span></div>";
    }
}






