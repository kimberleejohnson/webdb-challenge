
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contexts').insert([
        {id: 1, context_desc: 'at home'},
        {id: 2, context_desc: 'at work'},
        {id: 3, context_desc: 'at computer'}, 
        {id: 4, context_desc: 'online'}
      ]);
    });
};
