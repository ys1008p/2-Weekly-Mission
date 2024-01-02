import PropTypes from 'prop-types';
import { Overlay } from './Overlay';
import { MyButton } from './Button';

export const Modal = ({
  headerTitle,
  btnText,
  btnType,
  type = 'default',
  headerLabel = null,
  contentPadding = 24,
  children = null,
  onClose,
}) => {
  const contentClassName = `modal-content modal-content-${
    children ? contentPadding : 'empty'
  }`;

  return (
    <Overlay>
      <div className={`modal modal-${type}`}>
        <button
          className='modal-btn-close'
          aria-label='모달창 닫기 버튼'
          onClick={onClose}
        >
          <i className='ic-close'></i>
        </button>

        <header className='modal-header'>
          <h1>{headerTitle}</h1>
          <p className={headerLabel || 'label-hidden'}>{headerLabel}</p>
        </header>

        <main className={contentClassName}>{children}</main>

        <footer className='modal-footer'>
          <MyButton btnType={btnType} variant={type} text={btnText} />
        </footer>
      </div>
    </Overlay>
  );
};

Modal.propTypes = {
  type: PropTypes.string,
  headerTitle: PropTypes.string,
  headerLabel: PropTypes.string,
  contentPadding: PropTypes.number,
  btnText: PropTypes.string,
  btnType: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func,
};
