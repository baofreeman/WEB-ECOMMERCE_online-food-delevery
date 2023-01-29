function Modal({ children, show, getHide }) {
    return show ? (
        <div className="w-full left-0 top-0 h-screen fixed right-0 top-0">
            {children}
            <div className="w-2/3 h-screen bg-black opacity-50" onClick={getHide}></div>;
        </div>
    ) : null;
}

export default Modal;
