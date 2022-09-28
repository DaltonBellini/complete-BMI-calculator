const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

export function IMC(weight,height){ 
    return(weight/((height/100) **2)).toFixed(2)
}

export function isNumber(value){ 
    return isNaN(value) || value ==''
}

export function resetInputs (){ 
    inputHeight.value =''
    inputWeight.value =''
}

