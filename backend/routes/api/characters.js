const express = require('express');
const router = express.Router();
const { restoreUser } = require('../../utils/auth');

const { Character, User } = require('../../db/models')

router.post('/', restoreUser, async (req, res, next) => {
    const { name, age, location, bio, imageUrl } = req.body
    try {
      const character = await Character.create({ name, age, location, bio, imageUrl })
      const newCharacter = await Character.findByPk(character.id, {include: [User]})
      res.json(newCharacter)
    } catch (e) {
      next(e)
    }
});

router.get('/', async (req, res, next) => {
  try {
    const character = await Character.findAll({
      include: [User]
    })
    console.log(character)
    res.json({character: character});
  } catch (e) {
    next(e);
  };
});

module.exports = router;
