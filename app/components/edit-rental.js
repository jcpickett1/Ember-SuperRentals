import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import axios from 'axios';

export default class EditRentalComponent extends Component {
  @service store;
  @service router;
  @tracked rentalID = this.args.rental.rental_id;
  @tracked title = this.args.rental.title;
  @tracked owner = this.args.rental.owner;
  @tracked city = this.args.rental.city;
  @tracked location = this.args.rental.location;
  @tracked category = this.args.rental.category;
  @tracked bedrooms = this.args.rental.bedrooms;
  @tracked image = this.args.rental.image;
  @tracked description = this.args.rental.description;

  submitRental = async () => {
    console.log(this.args.rental);
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
      await axios.patch(
        `http://localhost:3000/rentals/${this.args.rental.id}`,
        {
          rental_id: this.rentalID,
          title: this.title,
          owner: this.owner,
          city: this.city,
          location: this.location,
          category: this.category,
          bedrooms: this.bedrooms,
          image: this.image,
          description: this.description,
        }
      );

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
