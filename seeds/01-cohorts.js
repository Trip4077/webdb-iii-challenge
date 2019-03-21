
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        { name: 'WebPT3' },
        { name: 'WebPT4' },
        { name: 'WebPT5' }
      ]);
    });
};
