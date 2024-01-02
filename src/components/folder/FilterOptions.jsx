import { useState } from 'react';
import PropTypes from 'prop-types';

import { MixButton, MyButton } from '../common/Button';
import { Dialog } from '../common/Dialog';
import { Input } from '../common/Input';
import { ShareLink } from './ShareLink';

export const FilterOptions = ({ currentFolder, currentFolderId }) => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);

  const handleShareModalOpen = () => {
    setIsShareModalOpen(true);
  };
  const handleEditModalOpen = () => {
    setIsEditModalOpen(true);
  };
  const handleRemoveModalOpen = () => {
    setIsRemoveModalOpen(true);
  };

  const handleModalClose = () => {
    setIsShareModalOpen(false);
    setIsEditModalOpen(false);
    setIsRemoveModalOpen(false);
  };

  return (
    <>
      <div className='filter-options'>
        <MixButton
          size={18}
          color='gray-80'
          startIcon='ic-share'
          text='공유'
          textColor='gray-80'
          textSize={14}
          onClick={handleShareModalOpen}
        />
        <MixButton
          size={18}
          color='gray-80'
          startIcon='ic-pen'
          text='이름 변경'
          textColor='gray-80'
          textSize={14}
          onClick={handleEditModalOpen}
        />
        <MixButton
          size={18}
          color='gray-80'
          startIcon='ic-delete'
          text='삭제'
          textColor='gray-80'
          textSize={14}
          onClick={handleRemoveModalOpen}
        />
      </div>

      {isShareModalOpen && (
        <Dialog
          modalTitle='폴더 공유'
          subTitle={currentFolder}
          onClose={handleModalClose}
        >
          <div className='modal-content'>
            <ShareLink currentFolderId={currentFolderId} />
          </div>
        </Dialog>
      )}

      {isEditModalOpen && (
        <Dialog modalTitle='폴더 이름 변경' onClose={handleModalClose}>
          <div className='modal-content'>
            <Input placeholder='내용 입력' />
            <MyButton variant='default' size='lg'>
              변경하기
            </MyButton>
          </div>
        </Dialog>
      )}

      {isRemoveModalOpen && (
        <Dialog
          modalTitle='폴더 삭제'
          subTitle={currentFolder}
          onClose={handleModalClose}
        >
          <div className='modal-content'>
            <MyButton variant='remove' size='lg'>
              삭제하기
            </MyButton>
          </div>
        </Dialog>
      )}
    </>
  );
};

FilterOptions.propTypes = {
  currentFolder: PropTypes.string,
  currentFolderId: PropTypes.number,
};
