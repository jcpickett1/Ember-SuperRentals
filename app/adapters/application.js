import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api2';
//   name2 = 'sample'

  buildURL(...args) {
    //   console.log(args)
      return('http://localhost:3000/rentals/')
    // return `${super.buildURL(...args)}.json`;
  }
}
