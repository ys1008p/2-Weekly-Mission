const deleteError = (tag) => {
  tag.classList.remove('input--error');
  const parent = tag.parentNode;
  const lastNode = tag.parentNode.lastChild;
  if(lastNode.className === 'error-message'){
    parent.removeChild(lastNode);
  }
}

export default deleteError;
