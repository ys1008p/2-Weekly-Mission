import { useState } from 'react';
import useToggle from '../../../hooks/useToggle';
import './FolderButton.css';

export default function FolderButton({ folderInfo }) {
  return <button className={`'FolderButton'`}>{`${folderInfo.name} ${folderInfo.id}`}</button>;
}
