import { createPortal } from 'react-dom'
import s from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root')

const Modal = ({children}) => {
    return createPortal(
        <div className={s.backdrop}>
            <div className={s.content}>{children}</div>
        </div>,
        modalRoot,
    )
}

export default Modal