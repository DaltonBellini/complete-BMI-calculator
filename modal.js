export const Modal = { 
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal-wrapper .title'),
    btnClose: document.querySelector('.close'),

    open(){ 
        Modal.wrapper.classList.add('open')
    },
    close(){ 
        Modal.wrapper.classList.remove('open')
    }
}

    Modal.btnClose.addEventListener('click', handleClose)

    function handleClose(){ 
        Modal.close()
}

    window.addEventListener('keydown', handleKeydow)

    function handleKeydow(event){ 
        if(event.key === 'Escape'){ 
            Modal.close()
        }
    }

    