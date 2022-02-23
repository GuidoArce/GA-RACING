let email = document.getElementById ("email")

if (sessionStorage.getItem("E-MAIL")){
    email.value = sessionStorage.getItem("E-MAIL")
}

$(email).change (function(){
    sessionStorage.setItem("E-MAIL", email.value)
})