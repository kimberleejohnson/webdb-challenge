
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'Study hard for sprints', project_desc: 'Involves lots of late nights!', is_complete: true },

        {id: 2, project_name: 'Get a job', project_desc: 'Involves a lot of emails!', is_complete: false},
        
        {id: 3, project_name: 'Pay rent', project_desc: 'Must do the other things first!', is_complete: false }
      ]);
    });
};
