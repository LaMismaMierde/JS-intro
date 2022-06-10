for (let i=0; i < 10000; i++) {
    let element = document.createElement('input')
    element.setAttribute('placeholder', 'I am shit')
    document.body.appendChild(element)
}

// Долго, потому что происходит 10 000 итераций в каждой 3 операции, итого 30 000 операций