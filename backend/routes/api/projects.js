const express = require('express');
const router = express.Router();
const { restoreUser } = require('../../utils/auth');

const { Project, User } = require('../../db/models')

router.post('/', restoreUser, async (req, res, next) => {
    const { userId, project_name } = req.body
    try {
      const project = await Project.create({userId, project_name })
      const newProject = await Project.findByPk(project.id, {include: [User]})
      res.json(newProject)
    } catch (e) {
      next(e)
    }
});

router.get('/', async (req, res, next) => {
  try {
    const project = await Project.findAll({
      include: [User]
    })
    console.log(project)
    res.json({project: project});
  } catch (e) {
    next(e);
  };
});

module.exports = router;
