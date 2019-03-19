const express = require('express');
const router = express.Router();

const cohortRoutes = require('./cohortRoutes');
const studentRoutes = require('./studentRoutes');

router.use('/cohorts', cohortRoutes);
router.use('./students', studentRoutes);

module.exports = router;