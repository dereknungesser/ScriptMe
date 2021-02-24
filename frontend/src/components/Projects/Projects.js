import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import './Projects.css';
import { addProject, getProject } from "../../store/project"
import * as projectActions from "../../store/project"
import { restoreUser } from "../../store/session"


function Projects() {
    const projects = useSelector((state) => state.project.project.project);
    const userId = useSelector((state) => state.session.user.id);

    const dispatch = useDispatch()

    const [project_name, setProject_Name] = useState("");
    const history = useHistory();
    const [loaded, setLoaded] = useState(true);

    useEffect(() => {
        dispatch(getProject());
    }, [dispatch])

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            userId,
            project_name
        };
        console.log("PAYLOAD", payload);
        const createdProject = dispatch(addProject(payload));
        if (createdProject) history.push("/documents");
        window.location.reload();
    };

console.log("NAME:", projects)

    return loaded && (
        <div>
            <form onSubmit={handleSubmit} className="new_project">
                <input
                onChange={(e) => {
                    setProject_Name(e.target.value);
                }}
                type="text"
                className="new_project_input" />
                <button className="new_project_button">New Project</button>
            </form>
            <div className="project-container">
                {projects && (projects.map(({project_name}) => (
                        <div className="each-project">
                            {project_name}
                        </div>
                    ))
                )}
            </div>
        </div>
    )
};

export default Projects;
