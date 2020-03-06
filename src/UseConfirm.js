// useEffect, useState (not using hooks)
import React from 'react';
import ReactDom from 'react-dom';

const useConfirm = (message = '', onConfirm, onCancle) => {
  if (!onConfirm && typeof onConfirm !== 'function') {
    return;
  }
  if (onCancle && typeof onCancle !== 'function') {
    return;
  }
  const confirmAction = () => {
    if(window.confirm(message)) {
      onConfirm();
    } else {
      onCancle();
    }
  }
  return confirmAction;
}

const UseConfirm = () => {
  const deleteWorld = () => console.log('deleting the world');
  const abort = () => console.log('Aborted');
  const confirmDelete = useConfirm('are you sure?', deleteWorld, abort);
  return(
    <div className="App">
      <h1>UseConfirm</h1>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  )
}

export default UseConfirm;