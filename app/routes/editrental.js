import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import axios from 'axios';

export default class EditRental extends Route {
  @service store;

  async model(params) {
    let dat = await axios.get(
      'http://localhost:3000/rentals/' + params.rental_id
    );
    return dat['data'];
  }
}
