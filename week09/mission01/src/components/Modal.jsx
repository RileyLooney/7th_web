import ModalButton from "./ModalButton";

const Modal = ({children}) => {
    return(
        <aside onClick={(e) => {}}>
            {children}
            <ModalButton/>
        </aside>
    )
}

export default Modal;