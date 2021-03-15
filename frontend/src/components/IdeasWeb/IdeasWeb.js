import React, { useState } from "react";
import { Draggable, DragDropContext, Droppable } from 'react-beautiful-dnd';
import './IdeasWeb.css';

function IdeasWeb() {

    const ideas = [
        {
            id: "idea1",
            idea: "Idea One"
        },
        {
            id: "idea2",
            idea: "Idea Two"
        },
        {
            id: "idea3",
            idea: "Idea Three"
        },
        {
            id: "idea4",
            idea: "Idea Four"
        },
        {
            id: "idea5",
            idea: "Idea Five"
        },

    ]

    const [ideasWeb, updateIdeasWeb] = useState(ideas)

    function handleOnDragEnd(result) {
        const items = Array.from(ideas);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem)

        updateIdeasWeb(items)
    }


    return (
        <>
            <div>
                <h1 className="ideas-title">Ideas Web</h1>
                <form>
                    <input className="new-idea-input" placeholder="New Idea Here..."></input>
                    <button className="new-idea"> + </button>
                </form>
            </div>
            <div className="drag-and-drop">
                <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="outer">
                {(provided) =>
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {ideasWeb.map(({id, idea}, index) => {
                            return (
                                <Draggable key={id} draggableId={id} index={index}>
                                    {(provided) => (
                                        <h3 ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            <div className="ideas">
                                                <h2 className="idea_drag">{idea}</h2>
                                            </div>
                                        </h3>
                                    )}
                                </Draggable>
                            )
                        })}
                        {/* <Draggable draggableId="element" index={5}>
                        {(provided) => <h1 ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>{ideas}</h1>}
                        </Draggable> */}
                    </div>}
                </Droppable>
                </DragDropContext>
            </div>
        </>
    );
}

export default IdeasWeb;
