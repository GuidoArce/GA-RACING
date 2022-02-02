apellido = document.getElementById ("lastname")

if (sessionStorage.getItem("Apellido")){
    apellido.value = sessionStorage.getItem("Apellido")
}

$(apellido).change (function(){
    sessionStorage.setItem("Apellido", apellido.value)
})

console.log(JSON.stringify(apellido.value))
