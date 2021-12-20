function range(){
    let resultado = document.getElementById("resultado");
    let valor = document.getElementById("valor").value;
    resultado.innerHTML = valor
   }
   
   range()
   
   document.addEventListener("change", range);
    