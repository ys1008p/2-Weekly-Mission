import DeleteFoderModal from './DeleteFolderModal';

export default function DeleteLinkModal({ url, handleModal }) {
  return (
    <DeleteFoderModal url={url} handleModal={handleModal} isDeleteLink={true} />
  );
}
