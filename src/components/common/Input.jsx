import PropTypes from 'prop-types';

export const Input = ({ type = 'text', ...props }) => {
  return <input type={type} {...props} className='modal-input' />;
};

Input.propTypes = {
  type: PropTypes.string,
};
