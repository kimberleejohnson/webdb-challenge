
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions_contexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions_contexts').insert([
        {id: 1, action_id: 1, context_id: 3, context_desc:  'at computer'},

        {id: 2, action_id: 1, context_id: 4, context_desc:  'online'},
      ]);
    });
};
