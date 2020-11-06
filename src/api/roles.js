const express = require('express');
const Role = require('../models/role');

const router = express.Router();

router.get('/', (req, res, next) => {
  try {
    Role.find()
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
  const { name, color } = req.body;
  try {
    const role = new Role({ name, color });
    role
      .save()
      .then((result) => {
        res.json(role);
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
    Role.findById(id)
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
    Role.findByIdAndRemove({ _id: id })
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
  const { name, color } = req.body;
  try {
    Role.findByIdAndUpdate({ _id: id }, { name, color })
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
