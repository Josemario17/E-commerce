
/* Escopo de Váriaveis */
let btClose = document.getElementById("close-app")
let closeArea = document.getElementById("d-options")
let out = document.getElementById("btn-out")

/*Botões aleatórios */
btClose,addEventListener("click",
  function(){
    closeArea.style.display = "grid"
})

closeArea.addEventListener("mouseleave", 
    function(){
    closeArea.style.display = "none"
})

out.addEventListener("click", 
    function(){        
    })



