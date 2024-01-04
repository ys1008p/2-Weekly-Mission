import styles from '@/components/SearchBar/SearchBar.module.css';
import { ChangeEvent, MouseEvent } from 'react';

interface Props {
  className: string;
  placeholder: string;
  keywordValue: string;
  onChangeKeyword: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickRemove: (e: MouseEvent<HTMLButtonElement>) => void;
}

function SearchBar({
  className,
  placeholder,
  keywordValue,
  onChangeKeyword,
  onClickRemove,
}: Props) {
  const classNames = `${styles.searchBar} ${className}`;
  return (
    <div className={classNames}>
      <div className={styles.icon}></div>
      <input
        className={styles.input}
        type='text'
        placeholder={placeholder}
        value={keywordValue}
        onChange={onChangeKeyword}
      />
      <button className={styles.closeButton} onClick={onClickRemove}></button>
    </div>
  );
}

export default SearchBar;
