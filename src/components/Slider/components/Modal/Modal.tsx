import "./Modal.css"

interface ModalProps {
    active: boolean;          // Определяет, открыто ли модальное окно (true) или закрыто (false)
    setActive: (value: boolean) => void; // Функция для изменения состояния модального окна
    children?: React.ReactNode; // Содержимое модального окна

}

function Modal({active, setActive, children} : ModalProps) {
    return (
        <div className="modal">
            <div className="modal-content">

            </div>
        </div>
    )
}

export default Modal