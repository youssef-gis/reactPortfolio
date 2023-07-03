import { useContext, createContext, useState, React } from "react"


const ModalContext = createContext();

export const ModalProvider = ({children})=>{
    const [showModal, setModal] = useState(false);
   // const [modalContent, setModalContent] = useState("");

    const openModal = (content)=>{
        //setModalContent(content);
        setModal(true);
    }

    const closeModal = ()=>{
       // setModalContent("");
        setModal(false);
    }

    return(
        <ModalContext.Provider value={{showModal, openModal, closeModal}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = ()=>{
    return useContext(ModalContext);
}
