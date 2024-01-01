import CommonModal from '@/components/modal/CommonModal';
import styles from './Card.module.css';
import noImage from '/images/common/no-image-placeholder.png';

import { useModal } from '@/contexts/ModalContext';
import { calculateTimeDiff, formatDate } from '@/scripts/utils';
import { useEffect, useState } from 'react';

function Card({ imageSource, createdAt, description, url, folders }) {
  const [imgUrl, setImgUrl] = useState(imageSource);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const modal = useModal();
  const openModal = modal.openModal;

  const handleClickKebab = (e) => {
    e.preventDefault();
    setIsPopoverOpen(!isPopoverOpen);
  };

  useEffect(() => {
    const img = new Image();
    img.src = imgUrl;
    img.onload = () => setImgUrl(imgUrl); // 이미지 로드 성공 시
    img.onerror = () => setImgUrl(noImage); // 이미지 로드 실패 시
  }, [imageSource]);

  return (
    <a className={styles.card} href={url} target='_blank'>
      <button className={styles.star}></button>
      <div className={styles.imageContainer}>
        <img className={styles.img} src={imgUrl} alt='카드 이미지' />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.agoContainer}>
          <span className={styles.ago}>{calculateTimeDiff(createdAt)}</span>
          <button className={styles.kebab} onClick={handleClickKebab}></button>
          {isPopoverOpen && (
            <dialog open className={styles.popover}>
              <button
                className={styles.popoverButton}
                onClick={(e) => {
                  e.preventDefault();
                  openModal(
                    <CommonModal
                      title={'링크 삭제'}
                      subTitle={url}
                      buttonText={'삭제하기'}
                      buttonStyle={styles.modalDeleteButton}
                    />,
                  );
                }}>
                삭제하기
              </button>
              <button
                className={styles.popoverButton}
                onClick={(e) => {
                  e.preventDefault();
                  openModal(
                    <CommonModal
                      title={'폴더에 추가'}
                      subTitle={url}
                      content={
                        <div className={styles.modalAddToFolderContainer}>
                          {folders.map((folder) => (
                            <label
                              key={folder.id}
                              className={styles.modalFolderLabel}>
                              <input
                                type='radio'
                                value={folder.url}
                                name={'link'}
                                className={styles.modalFolderInput}
                                onChange={(e) => e.stopPropagation()}
                              />
                              <span className={styles.modalFolderName}>
                                {folder.name}
                              </span>
                              <span className={styles.modalFolderLinkCount}>
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
                폴더에 추가
              </button>
            </dialog>
          )}
        </div>
        <p className={styles.desc}>{description}</p>
        <span className={styles.createdAt}>{formatDate(createdAt)}</span>
      </div>
    </a>
  );
}

export default Card;
