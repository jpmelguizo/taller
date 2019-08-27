import React, { useState } from 'react';
import { samples } from './samples';
import Inventory from './components/Inventory/Inventory';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';

const initialState = {
  inventory: {},
  cart: {},
};

function App() {
  const [state, setState] = useState(initialState);

  const addItem = (item) => {
    const inventory = { ...state.inventory };
    inventory[`${Date.now()}`] = item;

    setState({
      ...state,
      inventory
    });
  }

  const updateItem = (item, key) => {
    const inventory = { ...state.inventory };
    inventory[key] = item;

    setState({
      ...state,
      inventory
    });
  }

  const loadSamples = () => {
    const inventory = {
      ...state.inventory,
      ...samples,
    };

    setState({
      ...state,
      inventory
    });
  }

  return (
    <div className="app">
      <Header shopName={"Ralph's Coffee & Tea shop"}/>
      <main>
        <Shop items={state.inventory}/>
        <Cart />
        <Inventory
          items={state.inventory}
          addItem={addItem}
          updateItem={updateItem}
          loadSamples={loadSamples}
        />
      </main>
    </div>
  );
}

export default App;
