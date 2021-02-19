import React from "react";
import { Draggable } from 'react-beautiful-dnd';
import './IdeasWeb.css';

function IdeasWeb() {



    return (
        <>
            <div>
                <form>
                    <input placeholder="New Idea Here..."></input>
                    <button>New Idea</button>
                </form>
            </div>
            <div className="drag-and-drop">

                    <li>Idea1</li>

            </div>
        </>
    );
}

export default IdeasWeb;
