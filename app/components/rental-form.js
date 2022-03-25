import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import axios from 'axios';

export default class RentalFormComponent extends Component {
  @service router;
  @tracked rentalID = '';
  @tracked title = '';
  @tracked owner = '';
  @tracked city = '';
  @tracked location = '';
  @tracked category = '';
  @tracked bedrooms = '';
  @tracked image = '';
  @tracked description = '';

  submitRental = async () => {
    if (
      this.rentalID == '' ||
      this.title == '' ||
      this.owner == '' ||
      this.city == '' ||
      this.location == '' ||
      this.category == '' ||
      this.bedrooms == '' ||
      this.image == '' ||
      this.description == ''
    ) {
      alert('Please fill all inputs');
    } else {
      console.log('submitting');
      await axios.post('http://localhost:3000/rentals', {
        rental_id: this.rentalID,
        title: this.title,
        owner: this.owner,
        city: this.city,
        location: this.location,
        category: this.category,
        bedrooms: this.bedrooms,
        image: this.image,
        description: this.description,
      });

      this.rentalID = '';
      this.title = '';
      this.owner = '';
      this.city = '';
      this.location = '';
      this.category = '';
      this.bedrooms = '';
      this.image = '';
      this.description = '';
    }
  };
}
