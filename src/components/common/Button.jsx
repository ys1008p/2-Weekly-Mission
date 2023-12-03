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
      className={['btn-primary', className || ''].join(' ')}
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
  icon,
  img,
  alt,
  size,
  label,
  color = '',
  name = '',
  onClick = null,
  type = 'button',
  disabled = false,
}) => {
  const className = [
    'ic-btn',
    `${name}`,
    `ic-btn--size-${size}`,
    `ic-btn--color-${color}`,
  ].join(' ');
  return (
    <button
      aria-label={label}
      className={className}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {icon && <i className={icon}></i>}
      {img && <img src={img} alt={alt} />}
    </button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  name: PropTypes.string,
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
  textSize,
  textColor,
  size,
  color,
  name = '',
  onClick = null,
  type = 'button',
  startIcon = null,
  endIcon = null,
  disabled = false,
}) => {
  const className = [
    'mx-btn',
    `${name}`,
    `mx-btn--size-${size}`,
    `mx-btn--color-${color}`,
  ].join(' ');
  return (
    <button className={className} onClick={onClick} type={type} disabled={disabled}>
      {startIcon && <i className={startIcon}></i>}
      {text && (
        <span
          className={`mx-btn-text mx-btn-text--size-${textSize} mx-btn-text--color-${textColor}`}
        >
          {text}
        </span>
      )}
      {endIcon && <i className={endIcon}></i>}
    </button>
  );
};

MixButton.propTypes = {
  text: PropTypes.string,
  textSize: PropTypes.number,
  textColor: PropTypes.string,
  name: PropTypes.string,
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
