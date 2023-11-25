import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// [default]기본 버튼
export const Button = ({
  text,
  className,
  onClick,
  type = 'button',
  disabled = false,
}) => {
  return (
    <button
      className={['btn-primary', `${className}`].join(' ')}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

// [아이콘 단일 버튼]
export const IconButton = ({
  size,
  color,
  label,
  children,
  onClick,
  type = 'button',
  disabled = false,
}) => {
  const className = [
    'ic-button-primary',
    `ic-button--size-${size}`,
    `ic-button--color-${color}`,
  ].join(' ');
  return (
    <button
      aria-label={label}
      className={className}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

IconButton.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

// [혼합형]아이콘+텍스트
export const MixButton = ({
  text,
  size,
  color,
  onClick,
  type = 'button',
  startIcon = null,
  endIcon = null,
  disabled = false,
}) => {
  const className = [
    'mix-button-primary',
    `mix-button--size-${size}`,
    `mix-button--color-${color}`,
  ].join(' ');
  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {startIcon}
      {text && <span className='mix-button-text'>{text}</span>}
      {endIcon}
    </button>
  );
};

MixButton.propTypes = {
  text: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  disabled: PropTypes.bool,
};

// [Router]내부 페이지 전환 버튼
export const ButtonLink = ({ path, text, className, type = 'button' }) => {
  return (
    <Link to={path}>
      <button className={['btn-primary', `${className}`].join(' ')} type={type}>
        {text}
      </button>
    </Link>
  );
};

ButtonLink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string,
};
