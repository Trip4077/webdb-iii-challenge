const express = require('express');
const router = express.Router();

const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);

router.get('/', (req, res) => {
    db('students')
      .then(students => {
          res.json(students);
      })
      .catch(err => {
          console.log(err);
      })
})

module.exports = router;