let btCarrinho = document.getElementById("btn-top-cart")
let cart = document.getElementById("cart")
let btTema = document.getElementById("theme")


let frst = document.getElementById("btn-change-frst")
let scnd = document.getElementById("btn-change-scnd")
let srd = document.getElementById("btn-change-srd")
let ImageBg = document.getElementById("chng")

/*Eventos para mudança do tema */
btTema.addEventListener("click", function(){
    let ligacao = document.getElementById("link-de-css")
    ligacao.href = "./assets/css/dark-theme.css"
})


/* Funcionalidades */

/* Eventos no carrinho */
btCarrinho.addEventListener("click", function(){
    cart.style.display = "block"
})

cart.addEventListener("mouseleave", function(){
    cart.style.display = "none"
} )

/* Efeitos para alterar a imagem do produto em evidencia */

scnd.addEventListener("click", function()
    {
        ImageBg.src = "" + scnd.childNodes[1].src
    })
    frst.addEventListener("click", function()
    {
        ImageBg.src = "" + frst.childNodes[1].src
    })

    srd.addEventListener("click", function()
    {
        ImageBg.src = "" + srd.childNodes[1].src
    })