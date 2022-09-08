    import {Modal} from './modal.js'
    import { AlertError } from './alert-error.js'
    import { calculateIMC, notANumber} from './utils.js'

    const form = document.querySelector('form')
    const inputWeight = document.querySelector('#weight')
    const inputHeight = document.querySelector('#height')

    form.onsubmit= function(event){
            event.preventDefault()

            const weight = inputWeight.value
            const heigh = inputHeight.value
            const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(heigh)

            if(weightOrHeightIsNotANumber) { 
                AlertError.open()
                return;
            }
            
            AlertError.close()

            const result = calculateIMC(weight,heigh)
            displayResultMessage(result)
            
    }

    inputWeight.oninput =() => { 
        AlertError.close()
    }
    inputHeight.oninput = () => { 
        AlertError.close()
    }


    function displayResultMessage (result){ 
        const text = `Seu IMC é de ${result}`

        Modal.message.innerHTML = text
        Modal.open()

}
