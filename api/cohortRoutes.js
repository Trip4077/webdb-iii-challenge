const express = require('express');
const router = express.Router();

const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);

router.get('/', (req, res) => {
    console.log('test')
    db('cohorts')
      .then(cohorts => {
          res.json(cohorts);
      })
      .catch(err => {
          console.log(err);
      })
})



module.exports = router;