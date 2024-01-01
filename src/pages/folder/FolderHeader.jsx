import Cta from '@/components/Cta';
import CommonModal from '@/components/modal/CommonModal';
import { useModal } from '@/contexts/ModalContext';
import { useState } from 'react';
import style from './FolderHeader.module.css';

function FolderHeader({ folders }) {
  const [inputLink, setInputLink] = useState('');
  const modal = useModal();
  const openModal = modal.openModal;

  const handleInputChange = (e) => {
    setInputLink(e.target.value);
  };

  return (
    <section className={`wrap ${style.header}`} aria-label='링크 추가 섹션'>
      <form>
        <div className={style.linkContainer}>
          <div className={style.icon}></div>
          <input
            className={style.input}
            type='text'
            placeholder='링크를 추가해 보세요'
            value={inputLink}
            onChange={handleInputChange}
          />
          <Cta
            className={style.cta}
            onClick={(e) => {
              e.preventDefault();
              openModal(
                <CommonModal
                  title={'폴더에 추가'}
                  subTitle={inputLink}
                  content={
                    <div className={style.modalAddToFolderContainer}>
                      {folders.map((folder) => (
                        <label
                          key={folder.id}
                          className={style.modalFolderLabel}>
                          <input
                            type='radio'
                            value={folder.url}
                            name={'link'}
                            className={style.modalFolderInput}
                            onChange={(e) => e.stopPropagation()}
                          />
                          <span className={style.modalFolderName}>
                            {folder.name}
                          </span>
                          <span className={style.modalFolderLinkCount}>
                            {folder.link.count}개 링크
                          </span>
                        </label>
                      ))}
                    </div>
                  }
                  buttonText={'추가하기'}
                />,
              );
            }}>
            추가하기
          </Cta>
        </div>
      </form>
    </section>
  );
}

export default FolderHeader;
