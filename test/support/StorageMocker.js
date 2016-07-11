'use strict';

const storageMocker = () => {
  let store = {};

  return {
    setItem : (key, value) => {
      store[key] = value;
      return value;
    },

    removeItem : (key) => {
      delete store[key];
    },

    getItem : (key) => {
      return store[key];
    }
  };
}

export default storageMocker;
