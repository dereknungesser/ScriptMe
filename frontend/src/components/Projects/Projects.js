import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import './Projects.css';
import { addProject, getProject } from "../../store/project"
import * as projectActions from "../../store/project"


function Projects({children}) {
    const projects = useSelector((state) => state.project.project);
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
        console.log("FNNFSKDJNFKNFDKDJNFKSDNJKNJNFNS", createdProject)
        if (createdProject) history.push("/documents");
    };
console.log("NAME:", projects)
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
                {(projects.map((project) => (
                        <div>
                            {project}
                            myUserId={userId}
                        </div>
                    ))
                )}
            </div>
        </div>
    )
};

export default Projects;
