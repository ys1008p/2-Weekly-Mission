import PropTypes from 'prop-types';

export const Overlay = ({ children }) => {
  return <div className='overlay'>{children}</div>;
};

Overlay.propTypes = {
  children: PropTypes.node,
};
