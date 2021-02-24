import React, { useState } from "react";
import { Draggable, DragDropContext, Droppable } from 'react-beautiful-dnd';
import './IdeasWeb.css';

function IdeasWeb() {

    const ideas = [
        {
            idea1: "",
            idea2: "",
            idea3: "",
            idea4: "",
            idea5: ""
        }
    ]


    return (
        <>
            <div>
                <form>
                    <input placeholder="New Idea Here..."></input>
                    <button>New Idea</button>
                </form>
            </div>
            <div className="drag-and-drop">
                <DragDropContext onDragEnd={(result) => console.log(result)}>
                <Droppable droppableId="outer">
                    {(provided) => <div ref={provided.innerRef} {...provided.droppableProps}>
                        <Draggable draggableId="element" index={5}>
                        {(provided) => <h1 ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>idea1</h1>}
                        </Draggable>
                    </div>}
                </Droppable>
                </DragDropContext>
            </div>
        </>
    );
}

export default IdeasWeb;
