const express = require('express');
const Member = require('../models/member');

const router = express.Router();

router.get('/', (req, res, next) => {
  try {
    Member.find()
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
  const { name, role, teams } = req.body;
  try {
    const member = new Member({ name, role, teams });
    member
      .save()
      .then((result) => {
        res.json(member);
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
    Member.findById(id)
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
    Member.findByIdAndRemove({ _id: id })
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
  const { name, role, teams } = req.body;
  try {
    Member.findByIdAndUpdate({ _id: id }, { name, role, teams })
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
