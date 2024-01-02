import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Overlay } from './Overlay';

import { onClickOutside } from '../../utils/onClickOutside';

export const Dialog = ({ onClose, modalTitle, subTitle, children }) => {
  const modalRef = useRef();

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      onClickOutside(e, modalRef, onClose);
    };
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, [onClose]);

  return (
    <Overlay>
      <div ref={modalRef} className='modal'>
        <button
          className='modal-btn-close'
          aria-label='모달창 닫기 버튼'
          onClick={onClose}
        >
          <i className='ic-close'></i>
        </button>
        <header className='modal-header'>
          <h1 className='modal-header-title'>{modalTitle}</h1>
          <p className='modal-header-sub-title'>{subTitle}</p>
        </header>
        {children}
      </div>
    </Overlay>
  );
};

Dialog.propTypes = {
  onClose: PropTypes.func,
  modalTitle: PropTypes.string,
  subTitle: PropTypes.string,
  children: PropTypes.node,
};
