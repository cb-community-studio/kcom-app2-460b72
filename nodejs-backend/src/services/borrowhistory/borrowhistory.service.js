const { Borrowhistory } = require('./borrowhistory.class');
const createModel = require('../../models/borrowhistory.model');
const hooks = require('./borrowhistory.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/borrowhistory', new Borrowhistory(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('borrowhistory');

  service.hooks(hooks);
};