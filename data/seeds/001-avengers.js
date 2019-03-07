
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('avengers').del()
    .then(function () {
      // Inserts seed entries
      return knex('avengers').insert([
        { name: 'Black Widow'},
        { name: 'Thor'},
        { name: 'Iron Man'},
        { name: 'Captain Marvel'}
      ]);
    });
};
