import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { saveCharacters, getCharacters } from "../../store/characters"
// import './CharacterGenerator.css';



function CharacterGenerator() {
    const userId = useSelector((state) => state.session.user.id);
    const characters = useSelector((state) => state.characters.character.character)

    const dispatch = useDispatch()

    const history = useHistory();
    const [loaded, setLoaded] = useState(true);

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [location, setLocation] = useState("");
    const [bio, setBio] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();

      const payload = {
        name,
        age,
        location,
        bio,
        photoUrl,
      };
      console.log("PAYLOAD", payload);
      const createdRecipe = dispatch(saveCharacters(payload));

      if (createdRecipe) history.push("/characters");
    };

    useEffect(() => {
        dispatch(getCharacters());
    }, [dispatch])

console.log(characters)

    return (
        loaded && (
            <div className="character_generator_fields">
                <form onSubmit={handleSubmit}>
                    <h3>Name</h3>
                    <input
                        placeholder="Name"
                        onChange={(e) => {
                            setName(e.target.value)}} />
                    <h3>Age</h3>
                    <input
                        placeholder="Age"
                        onChange={(e) => {
                            setAge(e.target.value)}} />
                    <h3>Location</h3>
                    <input
                        placeholder="Location"
                        onChange={(e) => {
                            setLocation(e.target.value)}} />
                    <h3>Bio</h3>
                    <textarea
                        placeholder="Bio"
                        onChange={(e) => {
                            setBio(e.target.value)}} />
                    <button>Generate Character</button>
                    <button type="submit">Save</button>
                </form>
                <div>
                    {(characters.map(({name, age, location, bio, photoUrl}) => (
                            <div>
                                {name}{age}{location}{bio}{photoUrl}
                                myUserId={userId}
                            </div>
                        ))
                    )}
                </div>
            </div>
        )
    )
};

export default CharacterGenerator;
