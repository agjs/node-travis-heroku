const app = require('../server');
const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;

chai.use(chaiHttp);

describe('/ root path', function() {
  it('should return 200 and no error', function(done) {
    chai.request(app).get('/').end(function(error, response) {
      expect(error).to.be.null;
      expect(response).to.have.status(200);
      done();
    });
  });
});
