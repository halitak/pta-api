const express = require('express');

const roles = require('./roles');
const members = require('./members');
const teams = require('./teams');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({
    message: 'API - Hello',
  });
});

router.use('/roles', roles);
router.use('/members', members);
router.use('/teams', teams);

module.exports = router;
