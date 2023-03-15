
let cartCallBtn = document.querySelector("#cartCall")
    cartCallBtn.onclick = function(){
        let divCart = document.querySelector(".cart")
            divCart.style.display = "flex"
            let divCartBtnCLose = document.querySelector(".cart button")
                divCartBtnCLose.onclick = function(){
                    divCart.style.display = "none"
                }
    }

 const cDropdownDiv = document.querySelector(".c-dropdown")
 const btnDropdownC = document.querySelector("#btn-dropdown-c")
btnDropdownC.addEventListener("click", (e) => {
    cDropdownDiv.style.display = "inline"
    cDropdownDiv.onmouseleave = () =>{
        return cDropdownDiv.style.display = "none"
        
    }
})