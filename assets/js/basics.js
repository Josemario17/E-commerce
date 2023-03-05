
//script para o search move
let a = document.querySelector(".theme-md .small-top-element")
a.onclick = function(){
        a.style.marginTop = "-31px"
        let b = document.querySelectorAll(".theme-md .small-top-element")[1]
        b.onclick = function(){
            a.style.marginTop = "0px"
        }
}
