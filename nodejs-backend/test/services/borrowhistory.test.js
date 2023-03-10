const assert = require('assert');
const app = require('../../src/app');

describe('\'borrowhistory\' service', () => {
  it('registered the service', () => {
    const service = app.service('borrowhistory');

    assert.ok(service, 'Registered the service (borrowhistory)');
  });
});
