
let cartCallBtn = document.querySelectorAll("#cartCall")
let divCartBtnCLose = document.querySelectorAll(".cart button")
let divCart = document.querySelectorAll(".cart")

if((cartCallBtn && divCartBtnCLose && divCart).length != 0){
    cartCallBtn[0].onclick = () =>{
        divCart[0].style.display = "flex"
            divCartBtnCLose[0].onclick = () =>{
                divCart[0].style.display = "none"
            }
}
}

 const cDropdownDiv = document.querySelectorAll(".c-dropdown")
 const btnDropdownC = document.querySelectorAll("#btn-dropdown-c")
if((cDropdownDiv && btnDropdownC).length != 0)
{
    btnDropdownC[0].addEventListener("click", (e) => {
        cDropdownDiv[0].style.display = "inline"
        cDropdownDiv[0].onmouseleave = () =>{
            return cDropdownDiv[0].style.display = "none"
            
        }
    })
    
}

const CreateAccountBtn = document.querySelectorAll("#set-create-account")
if(CreateAccountBtn.length != 0)
{
    CreateAccountBtn[0].onclick = () => {
    }
}

const btnToShowTheContact = document.querySelectorAll("#clik-to-contact")
const inputCheckToDivInfo = document.querySelectorAll("#t-check-div-info")
if((btnToShowTheContact.length && inputCheckToDivInfo).length != 0){
    btnToShowTheContact[0].onclick = () => {
        inputCheckToDivInfo[0].checked = true
    }
}