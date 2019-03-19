
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { name: 'Bernard Johnson', cohort_id: 1 },
        { name: 'Bernard Johnson Jr', cohort_id: 2 },
        { name: 'Bernard Johnson III', cohort_id: 3 }
      ]);
    });
};
