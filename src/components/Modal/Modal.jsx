import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'


const Modal=({children, isModalOpen, shouldBeCloseOnOutsideClick, handleOnClose}) => {

const modalRef = useRef(null);
const previousActiveElement = useRef(null);

useEffect(()=>{
    if(!modalRef.current){
        return;
    }
    const {current: modal} = modalRef;
if(isModalOpen){
    previousActiveElement.current = document.activeElement;
    modal.showModal()
}else if(previousActiveElement.current){
modal.close();
previousActiveElement.current.focus() 
}
},[isModalOpen])

useEffect(()=>{
    const {current: modal} = modalRef;
    const handleCancel = event =>{
        event.preventDefault();
        handleOnClose()
    }
    modal.addEventListener('cancel',handleCancel);
    return() =>{
        modal.removeEventListener('cancel',handleCancel);
    }
},[handleOnClose])



const handleOutsideClick = ({target}) =>{
const{current} =modalRef;

if(shouldBeCloseOnOutsideClick && target === current){
    handleOnClose()
}
}

    return ReactDOM.createPortal((
        <StyledModal ref={modalRef} onClick={handleOutsideClick}>
                      {children}
        </StyledModal>
    ), document.body)
}

const StyledModal = styled.dialog`
position: absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
padding:3em;
z-index:100;

&::backdrop{
    backdrop-filter: blur(2px);
}
`

export default Modal
