let nombre = document.getElementById ("name")

if (sessionStorage.getItem("Nombre")){
    nombre.value = sessionStorage.getItem("Nombre")
}

$(nombre).change (function(){
    sessionStorage.setItem("Nombre", nombre.value)
})
