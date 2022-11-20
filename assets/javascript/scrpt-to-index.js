//Os Scripts da Página

// area para Variaveis de Escopo:
let btToggle = document.getElementById("btn-toggle")
let btroca = document.getElementById("radio1")
let btroca2 = document.getElementById("radio2")
let btroca3 = document.getElementById("radio3")

let btCarrinho = document.getElementById("btn-top-cart")
let cart = document.getElementById("cart")
let btTema = document.getElementById("theme")
/* All working */


/*________________________________*/

/* Função para a nav fixa */
let c = 0
function roll()
    {
            
        let navItens = document.getElementById("topo")
        let position = this.scrollY
        if(c==0)
        {        
            navItens.style.position = "fixed"
            c = 2
        }

        else if ( position == "0")
        {
            navItens.style.position = "relative"
            c = 0
        }
    }

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
/*_________________________________*/

/* Efeitos */

/* Trocas de Slides */



function slideChange1()
{
    btroca.checked = true
    btroca2.style.marginTop = "100%"
    let timeOutings = setTimeout(slideChange2, 4000)
}

function slideChange2()
{
    btroca2.checked = true
    let timeOutings = setTimeout(slideChange3, 4000)
}

function slideChange3()
{
    btroca3.checked = true
    let timeOutings = setTimeout(slideChange1, 4000)
}

slideChange1()








