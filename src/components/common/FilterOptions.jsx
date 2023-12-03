import { MixButton } from './Button';

export const FilterOptions = () => {
  return (
    <div className='filter-options'>
      <MixButton
        size={18}
        color='gray-80'
        startIcon='ic-share'
        text='공유'
        textColor='gray-80'
        textSize={14}
      />
      <MixButton
        size={18}
        color='gray-80'
        startIcon='ic-pen'
        text='이름 변경'
        textColor='gray-80'
        textSize={14}
      />
      <MixButton
        size={18}
        color='gray-80'
        startIcon='ic-delete'
        text='삭제'
        textColor='gray-80'
        textSize={14}
      />
    </div>
  );
};
