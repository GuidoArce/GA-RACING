class Button {
    constructor (label){
        this.label = label
        this.nodo = document.createElement('button')
        this.nodo.innerHTML = label
    }

    agregarEvt(callback){
        this.nodo.addEventListener('click', callback);
        
    }
}