import React from 'react';
import './AddItemForm.css';

function AddItemForm({ addItem }) {

  const createItem = (event) => {
    event.preventDefault();
    const form = event.target;
    const { itemName, itemPrice, itemImage, itemAvailability, itemDescription } = form;
    const item = {
      'name': itemName.value,
      'price': parseFloat(itemPrice.value) || 0,
      'image': itemImage.value,
      'available': itemAvailability.value,
      'description': itemDescription.value,
    };
    if (item.name && item.image && item.description) {
      addItem(item);
      form.reset();
    }
  }

  return(
    <>
      <h3>Add new item</h3>
      <form className="item-form item-form--add" onSubmit={createItem}>
        <div className="item-form__group">
          <label htmlFor="itemName">Name</label>
          <input id="itemName" type="text" name="name" />
        </div>
        <div className="item-form__group">
          <label htmlFor="itemPrice">Price</label>
          <input id="itemPrice" type="text" name="price" pattern="\d*" placeholder="In cents, only accepts numbers!"/>
        </div>
        <div className="item-form__group">
          <label htmlFor="itemImage">Image</label>
          <input id="itemImage" type="text" name="image" />
        </div>
        <div className="item-form__group">
          <label htmlFor="itemAvailability">Availability</label>
          <select id="itemAvailability" name="available">
            <option value="available">Available</option>
            <option value="unavailable">Sold out</option>
          </select>
        </div>
        <div className="item-form__group">
          <label htmlFor="itemDescription">Description</label>
          <textarea id="itemDescription" name="description"></textarea>
        </div>
        <button id="addItem" type="submit">Add item</button>
      </form>
    </>
  );
}

export default AddItemForm;