import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
import './TextEditor.css';
export default function Editor() {

function paste(e) {
    e.preventDefault();
    const open = new RegExp("<", "gi");
    const close = new RegExp(">", "gi");
    const text = (e.originalEvent || e).clipboardData
        .getData("text/plain")
        .replace(open, "&lt")
        .replace(close, "&gt");
    document.execCommand("insertHTML", false, text)
}

  return (
    <React.Fragment>
      <Toolbar />
      <div
        id='title'
        contentEditable='true'
        data-placeholder='Working Title...'
        className='title'
      ></div>

      <div
        className='editor'
        id='editor'
        contentEditable='true'
        data-placeholder='Your story begins here...'
        onPaste={(e) => paste(e)}
      ></div>
    </React.Fragment>
  );
}
