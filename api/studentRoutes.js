const express = require('express');
const router = express.Router();

const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);

//POST STUDENT
router.post('/', (req, res) => {
    const student = req.body;

    db.insert(student)
      .into('students')
      .then(student => {
          res.status(201).json(student[0])
      })
      .catch(err => {
          console.log(err);
      })
})

//GET ALL STUDENTS
router.get('/', (req, res) => {
    db('students')
      .then(students => {
          res.json(students);
      })
      .catch(err => {
          console.log(err);
      })
})

//GET STUDENT by ID
router.get('/:id', (req, res) => {
    const { id }  = req.params;
    
    db('students')
      .where({ id })
      .then(student => {
          res.json(student[0]);
      })
      .catch(err => {
          console.log(err);
      })
})

//EDIT STUDENT
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const update = req.body;

    db('students')
      .where({ id })
      .update(update)
      .then(success => {
          res.status(201).json(update);
      })
      .catch(err => {
          console.log(err);
      })
})

//DELETE STUDENT
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    db('students')
      .where({ id })
      .del()
      .then(success => {
          res.json(success);
      })
      .catch(err => {
          console.log(err);
      })
})

module.exports = router;