import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {

  buildURL() {
    return 'http://localhost:3000/rentals/';
  }
}
