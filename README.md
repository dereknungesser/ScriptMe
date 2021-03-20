
[Created By Derek Nungesser][nungesser.net]
[Connect with me on LinkedIn!][https://www.linkedin.com/in/nungesser94/]



<!-- PROJECT LOGO -->
<br />

  <h3 align="center">ScriptMe</h3>

  <p align="center">
    ScriptMe is a web-based text editor for creating short film scripts.
    <br />
    <a href="https://github.com/dereknungesser/ScriptMe/wiki"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://script-me.herokuapp.com/">View Demo</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

ScriptMe is a web-based text editor built with custom CSS and React components. The main feature is the editor itself implemented with a custom toolbar for formatting the document. Additionally, there is a drag and drop ideas list and a character generator where users are able to create and save character ideas to use in their story. The goal was to create a simple and easy to use editor that is geared towards amateur filmmakers.

Practical uses for this application would be creating a script for a school project, short film, or YouTube video.


### Built With

* [JavaScript]()
* [React-Beautiful-DND]()
* [React / Redux]()
* [HTML]()
* [CSS]()

<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://github.com/dereknungesser/ScriptMe/wiki)_

<!-- CONTACT -->
## Contact

Derek Nungesser - [nungesser.net](https://nungesser.net) - dnungesser94@gmail.com


## Code Snippets

Below are a few code snippets that demonstrates strong skills and knowledge of what has been learned up to this point.


### React-Beautiful-DND for the drag and drop ideas list.
```
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
```


### Backend post route for saving a character to the database.
```
router.post('/', restoreUser, async (req, res, next) => {
    const { userId, name, age, location, bio, imageUrl } = req.body
    try {
      const character = await Character.create({ userId, name, age, location, bio, imageUrl })
      const newCharacter = await Character.findByPk(character.id, {include: [User]})
      res.json(newCharacter)
    } catch (e) {
      next(e)
    }
});
```


### CSS for text editor toolbar buttons.
```
.toolbar button {
    background-color: #F6F6FC;
    border: 1px solid black;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    font-size: 16px;
    margin-right: 3px;
    cursor: pointer;
    display: inline;
}
```
