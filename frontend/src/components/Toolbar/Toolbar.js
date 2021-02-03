import React from 'react'
import './Toolbar.css'


function Toolbar() {

  function format(com, val) {
    document.execCommand(com, false, val);
  }

  function setHeader() {
    const target = document.getSelection();

    format (
        "insertHTML", `<h2>${target}</h2>`
    );
  }

  function handleSave() {
    const content = document.getElementById("editor").innerHTML;
    const title = document.getElementById("title").textContent;
    const post = {
        title,
        content
    };
    console.log(post);
    //add POST request here...
  }

  return (
    <div className='toolbar'>
      <button className="bold" onClick={e => format('bold')}>B</button>
      <button className="italic" onClick={() => format('italic')}>I</button>
      <button className="underline" onClick={() => format('underline')}>U</button>
      <button className="list" onClick={() => format('insertUnorderedList')}>List</button>
      <button className="header" onClick={() => setHeader()}>Header</button>
      <button className="save" onClick={() => handleSave()}>Save</button>
    </div>
  )
}

export default Toolbar;
