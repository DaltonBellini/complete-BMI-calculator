export function notANumber(value){ 
    return isNaN(value) || value == ''
}

export function calculateIMC (weight,heigh){ 
    return(weight / (( heigh/100) **2)).toFixed(2)
}