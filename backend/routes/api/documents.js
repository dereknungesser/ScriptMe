const express = require('express');
const router = express.Router();
const { restoreUser } = require('../../utils/auth');

const { Document, User } = require('../../db/models')

router.post('/', restoreUser, async (req, res, next) => {
    const { userId, document_name, document_body } = req.body
    try {
      const document = await Document.create({userId, document_name, document_body, documentId})
      const newDocument = await Document.findByPk(document.id, {include: [User]})
      res.json(newDocument)
    } catch (e) {
      next(e)
    }
});

router.get('/', async (req, res, next) => {
  try {
    const document = await Document.findAll({
      include: [User]
    })
    console.log(document)
    res.json({document: document});
  } catch (e) {
    next(e);
  };
});

module.exports = router;
