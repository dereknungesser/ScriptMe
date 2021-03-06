import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import faker from 'faker'
import { saveCharacters, getCharacters } from "../../store/characters"
import './CharacterGenerator.css';



function CharacterGenerator() {
    const userId = useSelector((state) => state.session.user.id);
    const characters = useSelector((state) => state.characters.characters.character)

    const dispatch = useDispatch()

    const history = useHistory();
    const [loaded, setLoaded] = useState(true);

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [location, setLocation] = useState("");
    const [bio, setBio] = useState("");
    const [imageUrl, setImageUrl] = useState("");


    const handleSubmit = async (e) => {
      e.preventDefault();

      const payload = {
        userId,
        name,
        age,
        location,
        bio,
        imageUrl,
      };
      console.log("PAYLOAD", payload);
      const createdCharacter = dispatch(saveCharacters(payload));

      if (createdCharacter) history.push("/characters");
    };

    const handleGenerate = (e, name) => {
        e.preventDefault();

        name = setName(faker.name.firstName())
        console.log(name)


    }

    useEffect(() => {
        dispatch(getCharacters());
    }, [dispatch])

    return (
        loaded && (
            <div className="character_generator_fields">
                <h1 className="create_title">Create a Character</h1>
                <form onSubmit={handleSubmit}>
                    <h3 className="tag">Name</h3>
                    <input
                        className="tag_input"
                        placeholder="Name"
                        onChange={(e) => {
                            setName(e.target.value)}} />
                    <h3 className="tag">Age</h3>
                    <input
                        className="tag_input"
                        placeholder="Age"
                        onChange={(e) => {
                            setAge(e.target.value)}} />
                    <h3 className="tag">Location</h3>
                    <input
                        className="tag_input"
                        placeholder="Location"
                        onChange={(e) => {
                            setLocation(e.target.value)}} />
                    <h3 className="tag">Image URL</h3>
                    <input
                        className="tag_input"
                        placeholder="*must be image from web"
                        onChange={(e) => {
                            setImageUrl(e.target.value)}} />
                    <h3 className="tag">Bio</h3>
                    <textarea
                        className="tag_input_bio"
                        placeholder="Bio"
                        onChange={(e) => {
                            setBio(e.target.value)}} />
                    <button className="save_button" type="submit">Save Character</button>
                </form>
                <form onSubmit={handleGenerate}>
                    <button className="save_button_gen" type="submit">Generate Character</button>
                </form>
                <div>
                    <h1 className="title">Saved Characters</h1>
                    {characters && (characters.map(({name, age, location, bio, imageUrl}) => (
                        <>
                            <table className="character-table">
                                <tr className="row-container">
                                    <td className="img_container">
                                        <div className="img_container">
                                            <img className="character-image"src={imageUrl} alt=''/>
                                        </div>
                                    </td>
                                    <td className="name">
                                        {name}
                                    </td>
                                    <td className="age">
                                        {age}
                                    </td>
                                    <td className="location">
                                        {location}
                                    </td>
                                    <td className="bio">
                                        {bio}
                                    </td>
                                </tr>
                            </table>
                        </>
                        ))
                    )}
                </div>
            </div>
        )
    )
};

export default CharacterGenerator;
