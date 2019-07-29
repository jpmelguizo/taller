import React from 'react';

function EditItemForm({ itemKey, item, updateItem }) {

  const handleChange = (event) => {
    const updatedItem = {
      ...item,
      [event.target.name]: event.target.value
    }
    console.log(event.target.name, event.target.value);
    console.log(updatedItem);
    updateItem(updatedItem, itemKey);
  }

  return(
    <>
      <form className="item-form item-form--edit">
        <div className="item-form__group">
          <label htmlFor={`editName-${itemKey}`}>Name</label>
          <input
            id={`editName-${itemKey}`}
            type="text"
            name="name"
            value={item.name}
            onChange={handleChange}
          />
        </div>
        <div className="item-form__group">
          <label htmlFor={`editPrice-${itemKey}`}>Price</label>
          <input
            id={`editPrice-${itemKey}`}
            type="text"
            name="price"
            pattern="\d*"
            placeholder="In cents, only accepts numbers!"
            value={item.price}
            onChange={handleChange}
          />
        </div>
        <div className="item-form__group">
          <label htmlFor={`editImage-${itemKey}`}>Image</label>
          <input
            id={`editImage-${itemKey}`}
            type="text"
            name="image"
            value={item.image}
            onChange={handleChange}
          />
        </div>
        <div className="item-form__group">
          <label htmlFor={`editAvailability-${itemKey}`}>Availability</label>
          <select
            id={`editAvailability-${itemKey}`}
            name="available"
            value={item.available}
            onChange={handleChange}
          >
            <option value="available">Available</option>
            <option value="unavailable">Sold out</option>
          </select>
        </div>
        <div className="item-form__group">
          <label htmlFor={`editDescription-${itemKey}`}>Description</label>
          <textarea
            id={`editDescription-${itemKey}`}
            name="description"
            value={item.description}
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </>
  );
}

export default EditItemForm;