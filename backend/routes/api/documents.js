const express = require('express');
const router = express.Router();
const { restoreUser } = require('../../utils/auth');

const { Document, Project } = require('../../db/models')

router.post('/', restoreUser, async (req, res, next) => {
    const { userId, document_name, document_body, projectId } = req.body
    try {
      const document = await Document.create({userId, document_name, document_body, projectId})
      const newDocument = await Document.findByPk(project.id, {include: [Project]})
      res.json(newDocument)
    } catch (e) {
      next(e)
    }
});

router.get('/', async (req, res, next) => {
  try {
    const document = await Document.findAll({
      include: [Project]
    })
    console.log(document)
    res.json({document: document});
  } catch (e) {
    next(e);
  };
});

module.exports = router;
