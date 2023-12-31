import DeleteFoderModal from './DeleteFolderModal';

export default function DeleteLinkModal({ url = '링크주소' }) {
  return <DeleteFoderModal isDeleteLink={true}>{url}</DeleteFoderModal>;
}
