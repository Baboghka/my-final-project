import React, { useEffect, useState } from 'react';
import './ListOfItems.css';
import { AddToCardButton, CheckoutButton } from './Button';
import { useHistory } from 'react-router-dom';
import CheckoutPage from './CheckoutPage';


function ListOfItems() {
  const history = useHistory();
  const [items, setItems] = useState([]);
  const [brandName, setBrandName] = useState('');
  const [typeOfFloss, setTypeOfFloss] = useState('');
  const [flavor, setFlavor] = useState('');
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [addToCardClickedItemId, setAddToCardClickedItemId] = useState(null);
  const [checkoutClickedItemId, setCheckoutClickedItemId] = useState(null);

  useEffect(() => {
   
  }, []);

  //  form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    //  a new item object
    const newItem = {
      id: Date.now(),
      brandName,
      typeOfFloss,
      flavor,
    };

    // If an item is selected, update the existing item
    if (selectedItemId !== null) {
      const updatedItems = items.map((item) => {
        if (item.id === selectedItemId) {
          return { ...item, ...newItem };
        }
        return item;
      });
      setItems(updatedItems);
      setSelectedItemId(null);
    } else {
      // Add the new item to the list
      setItems([...items, newItem]);
    }

    // Clear the input fields
    setBrandName('');
    setTypeOfFloss('');
    setFlavor('');
  };

  //  delete button click
  const handleDelete = (itemId) => {
    // Filter out the item with the specified ID
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  //  edit button click
  const handleEdit = (itemId) => {
    // Find the item with the specified ID
    const selectedItem = items.find((item) => item.id === itemId);
    if (selectedItem) {
      // Set the values of the input fields
      setBrandName(selectedItem.brandName);
      setTypeOfFloss(selectedItem.typeOfFloss);
      setFlavor(selectedItem.flavor);
      setSelectedItemId(itemId);
      setAddToCardClickedItemId(null); 
      setCheckoutClickedItemId(null); 
    }
  };

  //  add to card button click
  const handleAddToCard = (itemId) => {
    // Add the item to the card 
    console.log(`Added item with ID ${itemId} to the card.`);
    setAddToCardClickedItemId(itemId);
    setCheckoutClickedItemId(null); 
  };

  //  checkout button click
  const handleCheckout = (itemId) => {
    // navigate to the checkout page
    console.log(`Checkout clicked for item with ID ${itemId}. Initiating checkout process...`);
    setCheckoutClickedItemId(itemId);
    setAddToCardClickedItemId(null); 
    
    // Navigate to the checkout page
    history.push('/checkout');
  };

  // Handle clear button click
  const handleClear = () => {
    setBrandName('');
    setTypeOfFloss('');
    setFlavor('');
    setSelectedItemId(null);
    setAddToCardClickedItemId(null);
    setCheckoutClickedItemId(null);
  };

  return (
    <div>
      <h2 className="text-center"style={{color:'darkred'}}>Items List</h2>

      {/* Render the table */}
      <div className="table-container">
        <table>
          {/* Table headers */}
          <thead>
            <tr>
              <th className="vertical-line">Brand Name</th>
              <th className="vertical-line">Type of Floss</th>
              <th className="vertical-line">Flavored/Unflavored</th>
              <th className="vertical-line">Delete</th>
              <th className="vertical-line">Edit</th>
              {selectedItemId !== null && (
                <>
                  <th className="vertical-line">Add to Card</th>
                  <th className="vertical-line">Checkout</th>
                </>
              )}
            </tr>
          </thead>

          {/* Table body */}
          <tbody>
            {items.map((item) => (
              <tr
                key={item.id}
                className={`item-row ${
                  selectedItemId === item.id
                    ? 'selected-row'
                    : addToCardClickedItemId === item.id
                    ? 'lightyellow'
                    : checkoutClickedItemId === item.id
                    ? 'skyblue'
                    : ''
                }`}
              >
                <td className="vertical-line">{item.brandName}</td>
                <td className="vertical-line">{item.typeOfFloss}</td>
                <td className="vertical-line">{item.flavor}</td>
                <td className="vertical-line">
                  <button onClick={() => handleDelete(item.id)} className="delete-button">
                    Delete
                  </button>
                </td>
                <td className="vertical-line">
                  <button onClick={() => handleEdit(item.id)} className="edit-button">
                    Edit
                  </button>
                </td>
                {selectedItemId !== null && (
                  <>
                    <td className="vertical-line">
                      <AddToCardButton
                        onClick={() => handleAddToCard(item.id)}
                        isActive={addToCardClickedItemId === item.id}
                      />
                    </td>            
                      <td>
                <CheckoutButton
                  onClick={() => handleCheckout(item.id)}
                  isActive={checkoutClickedItemId === item.id}
                />
              </td>
            </>
          )}
        </tr>
      ))}
    </tbody>
  </table>
</div>

{/* Render the input form */}
<form onSubmit={handleSubmit}>
  <div className="input-container">
    <label htmlFor="brandName">Brand Name:</label>
    <select
      id="brandName"
      value={brandName}
      onChange={(event) => setBrandName(event.target.value)}
    >
      <option value="">-- Select Brand --</option>
      <option value="Coco Floss">Coco Floss</option>
      <option value="Smart Floss">Smart Floss</option>
      <option value="Silk Floss">Silk Floss</option>
      <option value="Bamboo Floss">Bamboo Floss</option>
      <option value="EcoRoots Floss">EcoRoots Floss</option>
      <option value="GEOrganic Floss">GEOrganic Floss</option>
      <option value="LuckyTeeth Floss">LuckyTeeth Floss</option>
      <option value="EteeFloss">EteeFloss</option>
    </select>
  </div>
  <div className="input-container">
    <label htmlFor="typeOfFloss">Type of Floss:</label>
    <select
      id="typeOfFloss"
      value={typeOfFloss}
      onChange={(event) => setTypeOfFloss(event.target.value)}
    >
      <option value="">-- Select Type --</option>
      <option value="Unwaxed">Unwaxed</option>
      <option value="Waxed">Waxed</option>
    </select>
  </div>
  <div className="input-container">
    <label htmlFor="flavor">Flavored/Unflavored:</label>
    <select
      id="flavor"
      value={flavor}
      onChange={(event) => setFlavor(event.target.value)}
    >
      <option value="">-- Select Flavor --</option>
      <option value="Flavored">Flavored</option>
      <option value="Unflavored">Unflavored</option>
    </select>
  </div>
  <div>
    <button
      type="submit"
      className={`add-item-button ${selectedItemId ? 'beige' : ''}`}
    >
      {selectedItemId !== null ? 'Update Item' : 'Add Item'}
    </button>
    {selectedItemId !== null && (
      <button
        type="button"
        onClick={() => setSelectedItemId(null)}
        className="edit-button"
      >
        Edit
      </button>
    )}
    <AddToCardButton
      onClick={() => handleAddToCard(selectedItemId)}
      isActive={addToCardClickedItemId}
    />
    <CheckoutButton
      onClick={() => handleCheckout(selectedItemId)}
      isActive={checkoutClickedItemId === selectedItemId}
    />
    <button type="button" onClick={handleClear} className="clear-button">
      Clear
    </button>
  </div>
</form>   
</div>
);
}
export default ListOfItems;