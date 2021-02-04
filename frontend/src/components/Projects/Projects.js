import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import './Projects.css';
import { addProject } from "../../store/project"


function Projects() {
    const projects = useSelector((state) => state.project);
    const userId = useSelector((state) => state.session.user.id);

    const dispatch = useDispatch()

    const [project_name, setProject_Name] = useState("");
    const history = useHistory();

    const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
        userId,
        project_name
    };
    console.log("PAYLOAD", payload);
    const createdProject = dispatch(addProject(payload));
    console.log(createdProject)

    if (createdProject) history.push("/projects");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                onChange={(e) => {
                    setProject_Name(e.target.value);
                }}
                type="text"
                className="new_project_input" />
                <button className="new_project_button">New Project</button>
            </form>
            <div>
                {projects}
            </div>
        </div>
    )
};

export default Projects;
