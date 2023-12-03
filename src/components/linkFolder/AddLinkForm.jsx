import { useState } from 'react';
import { Button } from '../../components/common/Button';
import { ICON } from '../../store/common';

export const AddLinkForm = () => {
  const [input, setInput] = useState('');
  const { liked } = ICON;

  return (
    <form className='link-form'>
      <div className='link-input'>
        <img src={liked.url} alt={liked.alt} aria-hidden />
        <input
          type='text'
          name='link-url'
          value={input}
          placeholder='링크를 추가해 보세요'
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <Button text='추가하기' className='btn-add-link' />
    </form>
  );
};
