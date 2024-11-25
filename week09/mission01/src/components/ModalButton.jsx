const ModalButton = () => {
    return(
        <>
            <button 
                type="button"
                className="btn confirm-btn"
                onClick={() => {
                    dispatchEvent(clearCart());
                }}>
                YES
            </button>
            <button 
                type="button"
                className="btn confirm-btn"
                onClick={() => {
                    dispatchEvent(clearCart());
                }}>
                NO
            </button>
        </>
    )
}

export default ModalButton;