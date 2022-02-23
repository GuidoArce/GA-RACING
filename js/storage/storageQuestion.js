let pregunta = document.getElementById ("question")

if (sessionStorage.getItem("Pregunta")){
    pregunta.value = sessionStorage.getItem("Pregunta")
}

$(pregunta).change (function(){
    sessionStorage.setItem("Pregunta", pregunta.value)
})
