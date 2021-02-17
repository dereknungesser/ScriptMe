import React from 'react'
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
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

  const userId = useSelector((state) => state.session.user.id)

  async function handleSave() {
    const document_body = document.getElementById("editor").innerHTML;
    const document_name = document.getElementById("title").textContent;
    const payload = {
        userId,
        document_name,
        document_body,
        // documentId
    };
    const response = await fetch(`/api/documents`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'XSRF-Token': Cookies.get('XSRF-TOKEN')
      },
      body: JSON.stringify(payload),
    });

    if(response.ok){
      const message = await response.json()
      return message
    }
  }

  return (
    <div className='toolbar'>
      <button className="bold" onClick={e => format('bold')}>B</button>
      <button className="italic" onClick={() => format('italic')}>I</button>
      <button className="underline" onClick={() => format('underline')}>U</button>
      <button className="header" onClick={() => setHeader()}>Header</button>
      <button className="save" onClick={() => handleSave()}>Save</button>
    </div>
  )
}

export default Toolbar;
