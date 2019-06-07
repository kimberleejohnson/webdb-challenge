
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, action_desc: 'Go to office hours', action_notes: "Sam's office hours are the best", action_done: true, project_id: 1},

        {id: 2, action_desc: 'Talk to Lambda career coach', action_notes: "Coaches are here to help you", action_done: true, project_id: 2},

        {id: 3, action_desc: "Budget enough for rent", action_notes: "You'll probably have to spend less money on ice cream", action_done: false, project_id: 3}
      ]);
    });
};
