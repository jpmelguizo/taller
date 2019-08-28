import React from 'react';
import AddItemForm from '../AddItemForm/AddItemForm';
import EditItemForm from '../EditItemForm/EditItemForm';

function Inventory({addItem, updateItem, loadSamples, items}) {
  return(
    <div className="inventory">
      <h2>Inventory</h2>
      <h3>Edit items</h3>
      {
        Object.keys(items).map(key => {
          return (
            <EditItemForm
              key={key}
              itemKey={key}
              item={items[key]}
              updateItem={updateItem}
            />
          );
        })
      }
      <AddItemForm addItem={addItem} />
      <button type="submit" onClick={loadSamples}>
        Load samples
      </button>
    </div>
  );
}

export default Inventory;