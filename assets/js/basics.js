
let cartCallBtn = document.querySelector("#cartCall")
    cartCallBtn.onclick = function(){
        let divCart = document.querySelector(".cart")
            divCart.style.display = "flex"
            let divCartBtnCLose = document.querySelector(".cart button")
                divCartBtnCLose.onclick = function(){
                    divCart.style.display = "none"
                }
    }