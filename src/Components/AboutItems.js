import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AboutItems() {
  const history = useHistory();
   


const flossData = [
  {
    brand: "Coco-floss",
    description: "Unlike flat, slippery floss, Cocofloss features a textured, loofah-like weave of 500+ filaments. As you floss, these soft strands expand to whoosh away sticky plaque and cavity-causing bacteria. Cocofloss is made of filaments infused with microcrystalline wax, coconut oil, essential oils, and food-grade aromas.",
  },
  {
    brand: "Smart Floss",
    description: "Smart Floss is an expanding waxed dental floss that was designed to get into those hard-to-reach spaces. It stretches and expands to clean your teeth better by a clinically proven 55%! Suitable for everyone: This is a dental floss for kids and adults. Smart Floss is made of multifilament polyester fibers using a proprietary, patented process that allows the floss to expand. The fibers are lightly coated with a vegetable/beeswax blend (contains beeswax plus one or more of candelilla, carnauba, castor oil, and rice bran wax).",
  },
  {
    brand: "Silk-floss",
    description: "Spun by hand, the silk we use is pure, natural silk thread that is a 100% biodegradable material and comes from silk worms. Silk is used to make clothes, floss, and many other products throughout the world.",
  },
  {
    brand: "Bamboo Floss",
    description: "What Is Bamboo Fiber Floss? Bamboo dental floss is an eco-friendly alternative to traditional dental floss. Bamboo floss is typically made from sustainable materials that don't spend years in landfills. Activated charcoal is a common ingredient found in bamboo floss.",
  },
  {
    brand: "EcoRoots Floss",
    description: "This vegan floss comes packaged in a refillable glass container with a recyclable metal dispensing lid. The floss is made from bamboo fiber with activated charcoal.",
  },
  {
    brand: "Georganic floss",
    description: "This natural Dental Floss is made from compostable Corn-base PLA, coated with Vegetable Wax and organic Spearmint Oil. This oil is a strong antiseptic, so this natural floss will help eliminate germs and promote healing in your gums.",
  },
  {
    brand: "LukyTeeth floss",
    description: "This VEGAN Bamboo Charcoal Floss is the strongest floss! It is made with activated charcoal powder, polymer, PBAT, and essential oils. It’s fluoride-free. PBAT is a fully biodegradable polymer that breaks down completely when buried in real soil environments and without creating or emitting methane or any harmful toxins. The three materials this floss is made of have a great fusion, making it extremely strong, smooth, and consistent.",
  },
  {
    brand: "Etee Floss",
    description: "This floss is BIG on keeping our chompers and the houses that they live in (i.e., their gums) healthy, so having a plastic-free floss option was a no-brainer for us. Each spool contains 30 meters of our 100% pure mulberry silk, candelilla wax, and natural peppermint oil floss. Mulberry silk, also known as Ahimsa Silk (or Peace Silk), is made from the cocoon of the mulberry silkworm. The harvesting process is cruelty-free as the silkworm is able to turn into a moth and fly away before the cocoon is finally harvested! So, let's get flossing (and we ain't talking about that fancy dance all the kids are doing these days)! Completely biodegradable & plastic-free floss to keep your entire family's teeth healthy!",
  },
];
 

  const [items, setItems] = useState([]);

  const handleAddItem = (floss) => {
    const newItem = {
      id: Date.now(),
      brand: floss.brand,
      description: floss.description,
      numberOfItems: 0,
      submitted: false,
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleDeleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  const handleNumberOfItemsChange = (itemId, numberOfItems) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, numberOfItems };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const handleSubmit = (itemId) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, submitted: true };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const handleCheckout = () => {
    // Navigate to the checkout page
    history.push('/checkout');
  };

  //  CSS styles 
  const brandNameStyle = {
    color: 'darkred',
  };

  return (
    <div>
      {/* Flosses Table */}
      <div className="container">
        <h4>Flosses</h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Brand Name</th>
              <th>Description</th>
              <th>Number of Items</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {flossData.map((floss, index) => {
              const item = items.find((item) => item.brand === floss.brand);
              return (
                <tr key={index}>
                  <td style={brandNameStyle}>{floss.brand}</td>
                  <td>{floss.description}</td>
                  <td>
                    <input
                      type="number"
                      value={item ? item.numberOfItems : ''}
                      onChange={(e) => {
                        const numberOfItems = parseInt(e.target.value);
                        handleNumberOfItemsChange(item.id, numberOfItems);
                      }}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddItem(floss)}
                    >
                      Add
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Selected Items */}
      <div className="container">
        <h4>Selected Items</h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Brand Name</th>
              <th>Description</th>
              <th>Number of Items</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr
                key={item.id}
                className={item.submitted ? 'table-primary' : ''}
              >
                <td>{item.brand}</td>
                <td>{item.description}</td>
                <td>{item.numberOfItems}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    Delete
                  </button>
                  {item.numberOfItems > 0 && (
                    <button
                      className="btn btn-primary"
                      onClick={() => handleSubmit(item.id)}
                    >
                      Submit 
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Submit and Checkout Buttons */}
      <div className="container">
        <div className="button-container">
          <button
            className="btn btn-primary"
            onClick={() => {
              const hasUnsubmittedItems = items.some(
                (item) => item.numberOfItems > 0 && !item.submitted
              );
              if (hasUnsubmittedItems) {
                const firstUnsubmittedItemId = items.find(
                  (item) => item.numberOfItems > 0 && !item.submitted
                ).id;
                handleSubmit(firstUnsubmittedItemId);
              }
            }}
          >
            Submit
          </button>  <br></br>
        </div>
        <div className="button-container"> <br></br>
          <button 
            className="btn btn-primary"style={{ backgroundColor: 'lightblue' }} 
            onClick={handleCheckout} 
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutItems;