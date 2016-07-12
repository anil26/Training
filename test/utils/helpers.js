'use strict';

import * as helpers from './../../app/scripts/utils/helpers';
import { expect } from 'chai';
import { Promise } from 'es6-shim';

describe('helpers', () => {

  /**
   * Test Cases for createReducer Helper Method
   */
  describe('#createReducer()', () => {
    it('it should return the function which represents the reducer', () => {
      let reducer = helpers.createReducer({}, {});
      expect(typeof reducer).to.eq('function');
    });
  });

  /**
   * Test Cases for checkHttpStatus Helper Method
   */
  describe('#checkHttpStatus()', () => {

    /**
     * Testing success cases
     * @type {Array}
     */
    let successResponses = [
      { status : 200 },
      { status : 201 },
      { status : 204 }
    ];

    successResponses.forEach( (response) => {
      it('it returns the correct response when HTTP status is ' + response.status , () => {
        let resultantResponse = helpers.checkHttpStatus(response);
        expect(resultantResponse).to.eq(response);
      });
    });

    /**
     * Testing failure cases
     * @type {Array}
     */
    let failureResponses = [
      { status : 300, statusText : 'Redirect' },
      { status : 302, statusText : 'Permanent Redirect' },
      { status : 401, statusText : 'Unauthorized' },
      { status : 404, statusText : 'Not found' },
      { status : 500, statusText : 'Server error' },
      { status : undefined, statusText : undefined }
    ];

    failureResponses.forEach( (response) => {
      it('it raises an error when HTTP status is ' + response.status , () => {
        let statusChecker = () => {
          helpers.checkHttpStatus(response);
        };

        expect(statusChecker).to.throw(Error, response.statusText);
      });
    });
  });

  /**
   * Test cases for parseJSON helper method.
   */
  describe('#parseJSON()', () => {

    it('it returns a resolved promise when response is Promise', () => {
      let response = { json : () => { return Promise.resolve(1); } };
      expect(helpers.parseJSON(response).constructor).to.eq(response.json().constructor);
    });

    it('it returns a resolved promise with message "Something went wrong" when response is absent', () => {
      let result = helpers.parseJSON(undefined)
      expect(result.constructor).to.eq(Promise.resolve().constructor);
      result.then((error) => { expect(error.message).to.eq('Something went wrong'); });
    });
  });
});