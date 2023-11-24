import React from 'react';

function Sns({ url, icon, altText }) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <img src={icon} alt={altText} />
    </a>
  );
}

export default Sns;
