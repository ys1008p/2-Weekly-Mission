import React, { useState } from 'react';
import SignButton from './SignButton';
import './AddLink.css';

export default function AddLink() {
  const [url, setUrl] = useState('');
  return (
    <form className='add-link-form'>
      <input
        className='add-link'
        type='url'
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
        }}
        placeholder='🔗 링크를 추가해 보세요.'
      />
      <SignButton text='추가하기' />
    </form>
  );
}
