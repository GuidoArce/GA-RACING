// Enviar
function sendQuestion (event) {
    console.log ('Pregunta enviada')
    event.preventDefault()
}

const nodoBtnS = document.getElementById ('send')
$(nodoBtnS).click(sendQuestion)

// Borrar
function deleteQuestion (event) {
    console.log ('Informacion borrada')
}

const nodoBtnD = document.getElementById ('delete')
$(nodoBtnD).click(deleteQuestion)