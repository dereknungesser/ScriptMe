import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import './Projects.css';
import { addProject } from "../../store/project"
import * as projectActions from "../../store/project"


function Projects({project}) {
    const projects = useSelector((action) => action.payload);
    const userId = useSelector((state) => state.session.user.id);

    const dispatch = useDispatch()

    const [project_name, setProject_Name] = useState("");
    const history = useHistory();
    const [loaded, setLoaded] = useState(true);

    useEffect(() => {
        (async () => {
          setLoaded(false);
          let res = await fetch(`/api/projects`);
          res = await res.json();
          console.log(res)
          setLoaded(true);
        })();
      }, []);

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
console.log(projects)
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
                <h1>{projects}</h1>
            </div>
        </div>
    )
};

export default Projects;
