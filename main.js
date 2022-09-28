import{Modal} from './modal.js'
import { AlertError } from './alert-error.js'
import { IMC,isNumber,resetInputs} from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


form.onsubmit = function(event){ 
    event.preventDefault()

    const weight = inputWeight.value 
    const height = inputHeight.value

    const validNumber = isNumber(weight) || isNumber(height)

    if(validNumber){ 
        AlertError.open()
        resetInputs()
        return
    }
    AlertError.close()


    const result = IMC(weight,height)

    displayResultMessage(result)

}

function displayResultMessage(result){ 
    Modal.open()
    Modal.message.innerHTML = `Seu IMC é de ${result}`
    resetInputs()
}


inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()