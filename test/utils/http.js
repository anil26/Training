'use strict';

import { $httpService, helpers } from './../../app/scripts/utils';
import nock from 'nock';
import { expect } from 'chai';

describe('httpService', () => {

  /**
   * Test cases for 'get' method in httpService
   */
  describe('#get', () => {
    describe('When HTTP request is success and server returns JSON response', () => {
      beforeEach(() => {
        let scope = nock('http://sample.test')
          .get('/something')
          .reply(200, { name : 'Hello' });
      });

      it ('it should return the resolved promise with json', (done) => {
        let callback = (response) => {
          expect(response.name).to.eq('Hello');
          done();
        };

        $httpService.get('http://sample.test/something', {}, {}, callback, callback);
      });
    });

    describe('When HTTP request is success and server returns String response', () => {
      beforeEach(() => {
        let scope = nock('http://sample.test')
          .get('/something')
          .reply(200, 'Hello');
      });

      it ('it should raise the error with the response', (done) => {
        let callback = (error) => {
          try {
            expect(error.constructor).to.eq(new SyntaxError().constructor);
          }
          finally {
            done();
          }
        };

        $httpService.get('http://sample.test/something', {}, {}, callback, callback);
      });
    });

    describe('When HTTP request is failure and server returns 404', () => {
      beforeEach(() => {
        let scope = nock('http://sample.test')
          .get('/something')
          .reply(404, 'Not Found');
      });

      it ('it should raise the error', (done) => {
        let callback = (error) => {
          let response = error.response;
          expect(response.status).to.eq(404);
          expect(response.statusText).to.eq('Not Found');
          done();
        };

        $httpService.get('http://sample.test/something', {}, {}, callback, callback);
      });
    });

    describe('When HTTP request is failure and server returns 500', () => {
      beforeEach(() => {
        let scope = nock('http://sample.test')
          .get('/something')
          .reply(500, 'Internal Server Error');
      });

      it ('it should raise the error', (done) => {
        let callback = (error) => {
          let response = error.response;
          expect(response.status).to.eq(500);
          expect(response.statusText).to.eq('Internal Server Error');
          done();
        };

        $httpService.get('http://sample.test/something', {}, {}, callback, callback);
      });
    });
  });

  /**
   * Test cases for 'post' method in httpService
   */
  describe('#post', () => {
    describe('When HTTP request is success and server returns JSON response', () => {
      beforeEach(() => {
        let scope = nock('http://sample.test')
          .post('/something')
          .reply(200, { name : 'Hello' });
      });

      it ('it should return the resolved promise with json', (done) => {
        let callback = (response) => {
          expect(response.name).to.eq('Hello');
          done();
        };

        $httpService.post('http://sample.test/something', {}, {}, callback, callback);
      });
    });

    describe('When HTTP request is success and server returns String response', () => {
      beforeEach(() => {
        let scope = nock('http://sample.test')
          .post('/something')
          .reply(200, 'Hello');
      });

      it ('it should raise the error with the response', (done) => {
        let callback = (error) => {
          try {
            expect(error.constructor).to.eq(new SyntaxError().constructor);
          }
          finally {
            done();
          }
        };

        $httpService.post('http://sample.test/something', {}, {}, callback, callback);
      });
    });

    describe('When HTTP request is failure and server returns 404', () => {
      beforeEach(() => {
        let scope = nock('http://sample.test')
          .post('/something')
          .reply(404, 'Not Found');
      });

      it ('it should raise the error', (done) => {
        let callback = (error) => {
          let response = error.response;
          expect(response.status).to.eq(404);
          expect(response.statusText).to.eq('Not Found');
          done();
        };

        $httpService.post('http://sample.test/something', {}, {}, callback, callback);
      });
    });

    describe('When HTTP request is failure and server returns 500', () => {
      beforeEach(() => {
        let scope = nock('http://sample.test')
          .post('/something')
          .reply(500, 'Internal Server Error');
      });

      it ('it should raise the error', (done) => {
        let callback = (error) => {
          let response = error.response;
          expect(response.status).to.eq(500);
          expect(response.statusText).to.eq('Internal Server Error');
          done();
        };

        $httpService.post('http://sample.test/something', {}, {}, callback, callback);
      });
    });
  });
});
