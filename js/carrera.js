const lista = document.getElementById("autos");

function agregarAuto() {
    const autoInput = document.getElementById("auto");
    const numeroInput = document.getElementById("numero");

    const auto = autoInput.value;
    const numero = numeroInput.value;

    const autos = document.createElement("li");
    autos.classList.add("cars");
    autos.innerHTML = `<h2>${auto}</h2> <span>${numero}</span>`;
    lista.appendChild(autos);

    autoInput.value = "";
    numeroInput.value = "";

}
