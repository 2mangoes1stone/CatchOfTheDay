import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }
  goToStore(event) {
    event.preventDefault();
    console.log('You changed the URL');
    // first grab the text from the box
    const storeID = this.storeInput.value;
    console.log(`Going to ${storeID}`);
    // second we're going to transition form / to /store/:storeId
    this.context.router.transitionTo(`/store/${storeID}`);
  }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        <h2>Plase Enter A store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
        <button type="submit">Visit Store -> </button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;