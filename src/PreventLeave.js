// useEffect, useState (not using hooks)
import React from 'react';
import ReactDOM from 'react-dom';

const usePreventLeave = () => {
  const listener = (e) => {
    e.preventDefault();
    e.returnValue = '';
  }
  const enablePrevnet = () => window.addEventListener('beforeunload', listener);
  const disablePrevent = () => window.removeEventListener('beforeunload', listener);

  return { enablePrevnet, disablePrevent };
}

const PreventLeave = () => {
  const { enablePrevnet, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <h1>UsePreventLeave</h1>
      <button onClick={enablePrevnet}>Protect</button>
      <button onClick={disablePrevent}>UnProtect</button>
    </div>
  )
}

export default PreventLeave;