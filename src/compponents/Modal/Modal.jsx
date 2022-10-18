import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import ModalStyles from './Modal.module.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

const modalsContainer = document.querySelector('#modals');

function Modal({ closeAllModals, children }) {
  
  useEffect(() => {
    const onEscKeydown = (e) => {
      e.key === 'Escape' && closeAllModals();
    };

    document.addEventListener('keydown', onEscKeydown);

    return () => {
      document.removeEventListener('keydown', onEscKeydown);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <section className={ModalStyles.popup}>
        <div className={ModalStyles.container}>
          <button
            className={ModalStyles.close}
            onClick={closeAllModals}>
            <CloseIcon type="primary"/>
          </button>
          {children}
        </div>
      </section>
      <ModalOverlay onClick={closeAllModals}/>
    </>,
    modalsContainer
  );
};

Modal.propTypes = {
  closeAllModals: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};

export default Modal;