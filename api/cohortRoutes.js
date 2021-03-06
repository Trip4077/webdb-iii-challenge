const express = require('express');
const router = express.Router();

const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);

//POST COHORT
router.post('/', (req, res) => {
    const cohort = req.body
    console.log(cohort)
    db.insert(cohort)
      .into('cohorts')
      .then(id => {
          res.status(201).json(id[0])
      })
      .catch(err => {
          console.log(err);
      })
})

//GET ALL COHORTS
router.get('/', (req, res) => {
    db('cohorts')
      .then(cohorts => {
          res.json(cohorts);
      })
      .catch(err => {
          console.log(err);
      })
})

//GET COHORT by ID
router.get('/:id', (req, res) => {
   db('cohorts')
     .where({ id: req.params.id })
     .then(cohort => {
            res.json(cohort[0]);
     })
     .catch(err => {
         console.log(err);
     }) 
})

//EDIT COHORT
router.put('/:id', (req, res) => {
    const update = req.body;
    const { id } = req.params;

    db('cohorts')
      .where({ id })
      .update(update)
      .then(success => {
          res.status(200).json(success);
      })
      .catch(err => {
          console.log(err);
      })
})

//DELETE COHORT
router.delete('/:id', (req, res) => {
    const cohort = req.body;
    const { id } = req.params;

    db('cohorts')
      .where({ id })
      .del()
      .then(success => {
          res.status(200).json(cohort)
      })
      .catch(err => {
          console.log(err);
      })
})

module.exports = router;