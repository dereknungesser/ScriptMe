import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { saveCharacter } from "../../store/characters"
import './CharacterGenerator.css';



function CharacterGenerator({characters}) {
    const userId = useSelector((state) => state.session.user.id);

    const dispatch = useDispatch()

    const history = useHistory();
    const [loaded, setLoaded] = useState(true);
    const [allCharacters, setAllCharacters] = useState("")

    useEffect(() => {
        (async () => {
          setLoaded(false);
          let res = await fetch(`/api/characters`);
          res = await res.json();
          console.log(res)
          setAllCharacters(res)
          setLoaded(true);
        })();
    }, []);



    return (
        loaded && (
            <div className="character_generator_fields">
                <h3>Name</h3>
                <input
                    placeholder="Name" />
                <h3>Age</h3>
                <input
                    placeholder="Age" />
                <h3>Location</h3>
                <input
                    placeholder="Location" />
                <h3>Bio</h3>
                <textarea
                    placeholder="Bio" />
                <button>Generate Character</button>
                <button>Save</button>
                <b>{allCharacters.map((characters) => (
                    <b
                    key={characters.id}
                    character={characters}
                    name={characters.name}
                    // users={users}
                    myUserId={userId}
                    >Character</b>
                ))}</b>
            </div>
        )
    )
};

export default CharacterGenerator;
