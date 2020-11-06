const express = require('express');
const Team = require('../models/team');

const router = express.Router();

router.get('/', (req, res, next) => {
  try {
    Team.find()
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        next(error);
      });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  const { name, rules, members } = req.body;
  try {
    const team = new Team({ name, rules, members });
    team
      .save()
      .then((result) => {
        res.json(team);
      })
      .catch((error) => {
        next(error);
      });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  try {
    Team.findById(id)
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        next(error);
      });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  try {
    Team.findByIdAndRemove({ _id: id })
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        next(error);
      });
  } catch (error) {
    next(error);
  }
});

router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, rules, members } = req.body;
  try {
    Team.findByIdAndUpdate({ _id: id }, { name, rules, members })
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        next(error);
      });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
