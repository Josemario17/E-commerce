
let btCarrinho = document.getElementById("btn-top-cart")
let cart = document.getElementById("cart")
let btTema = document.getElementById("theme")
let btToUp = document.getElementById("btn-to-up")

btToUp.addEventListener("click", function(){
    window.scrollTo(top)
})

btTema.addEventListener("click", function(){
    let ligacao = document.getElementById("link-de-css")
    ligacao.href = "./assets/css/dark-theme.css"
})


/* Eventos no carrinho */
btCarrinho.addEventListener("click", function(){
    cart.style.display = "block"
})

cart.addEventListener("mouseleave", function(){
    cart.style.display = "none"
} )
