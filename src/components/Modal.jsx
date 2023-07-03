import React, { Fragment } from 'react'
import  ReactDOM  from 'react-dom'
import Card from "./Cards"
import "./modal.css"
import { useModalContext } from '../context/Modal_context'

const Modal = ({className, children}) => {
    const {showModal , closeModal} = useModalContext() 
  return (
    <Fragment>
        {
            showModal && (
                ReactDOM.createPortal(
                    <>
                        <section id='backdrop' onClick={closeModal}>
                        </section>
                        <Card className={className} >{children}</Card>
                    </> , document.querySelector("#overlay"))
            ) 
        }
    </Fragment>
  )
}

export default Modal