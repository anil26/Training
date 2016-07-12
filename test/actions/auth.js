'use strict';

import nock from 'nock';
import { expect } from 'chai';
import sinon from 'sinon';
import storeCreator from './../../app/scripts/store/storeCreator';
import * as authActions from './../../app/scripts/actions/auth';
import * as authConstants from './../../app/scripts/constants/auth';

/**
 * Test cases for actions of auth module.
 */
describe ('Testcases for auth module actions', () => {

  beforeEach(() => {
    // Disabling all the real server connections in test environment.
    nock.disableNetConnect();
  });

  /**
   * Test cases for 'USER LOGIN SUCCESS' action.
   */
  describe('#loginUserSuccess', () => {
    describe('When token is present', () => {
      it('it should return a action with the token in the payload', () => {
        let token = 'Something123';
        let action = authActions.loginUserSuccess(token);

        expect(action.type).to.eq(authConstants.LOGIN_USER_SUCCESS);
        expect(action.payload).not.to.eq(undefined);
        expect(action.payload.token).to.eq(token);
      });
    });

    describe('When token is not present', () => {
      it('it should return a action with token as \'null\'', () => {
        let action = authActions.loginUserSuccess();

        expect(action.type).to.eq(authConstants.LOGIN_USER_SUCCESS);
        expect(action.payload.token).to.eq(undefined);
      });
    });
  });

  /**
   * Test cases for 'USER LOGIN FAILURE' action.
   */
  describe('#loginUserFailure', () => {
    describe('When the error message is present', () => {
      it('it should return a action with error message in the payload', () => {
        let error = { statusText : 'Invalid password' };
        let action = authActions.loginUserFailure(error);

        expect(action.type).to.eq(authConstants.LOGIN_USER_FAILURE);
        expect(action.payload).not.to.eq(undefined);
        expect(action.payload.statusText).to.eq(error.statusText);
      });
    });

    describe('When the error message is not present', () => {
      it('it should return a action with default error message in the payload', () => {
        let action = authActions.loginUserFailure();

        expect(action.type).to.eq(authConstants.LOGIN_USER_FAILURE);
        expect(action.payload.statusText).to.eq(authConstants.DEFAULT_ERROR_MESSAGE);
      });
    });
  });

  /**
   * Test cases for 'USER LOGIN REQUEST' action.
   */
  describe('#loginUserRequest', () => {
    it('it should return a action for user login request', () => {
      let action = authActions.loginUserRequest();
      expect(action.type).to.eq(authConstants.LOGIN_USER_REQUEST);
    });
  });

  /**
   * Test cases for 'USER LOGOUT' action.
   */
  describe('#logout', () => {
    it('it should return a action for user logout', () => {
      let action = authActions.logout();
      expect(action.type).to.eq(authConstants.LOGOUT_USER);
    });
  });

  /**
   * Test cases for 'USER LOGIN'
   */
  describe('#login', () => {
    let store = storeCreator();

    beforeEach(() => {
      nock('http://localhost:8080')
        .post('/auth/signin')
        .reply(200, { token : 'Something123' });
    });

    describe('When success response is received from server', () => {
      describe('When response type is json', () => {
        it('it should dispatch loginUserSuccess action and redirect the user to \'/\'', () => {
          var loginUserRequest = sinon.spy(authActions, 'loginUserRequest');
          var loginUserSuccess = sinon.spy(authActions, 'loginUserSuccess');

          store.dispatch(authActions.loginUser());
          loginUserRequest.restore();
          loginUserSuccess.restore();

          setTimeout(function(){
            sinon.assert.calledOnce(loginUserRequest);
            sinon.assert.calledOnce(loginUserSuccess);
          }, 500);
        });
      });
    });
  });
});
