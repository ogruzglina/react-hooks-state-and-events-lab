import React, { useState } from "react";
import Item from "./Item";

// Use the useState hook to create a state variable called selectedCategory for keeping 
//track of the selected value from this <select> element. When the value of the <select> 
//element is changed, update state.

// You should also use the selectedCategory variable to determine which items to display 
//in the shopping list. You'll need some way of filtering the array of items based on the 
//selectedCategory.


function ShoppingList({ items }) {
  const options = [
    { 
      value: 'All', 
      textContent: "Filter by category", 
    },
    {
      value: "Produce",
      textContent: 'Produce'
    },
    { 
      value: "Dairy",
      textContent: 'Dairy',
    },
    {
      value: "Dessert", 
      textContent: 'Dessert',
    }
  ];

  const optionsContent = options.map( ({ value, textContent }) =>
    <option key = { value } value = { value }>{ textContent }</option>
  );

  const [ selectedCategory, setSelectedCategory ] = useState("All");

  const arrOfSelectedItems = (selectedCategory === 'All') ? 
    [...items] :
    items.filter(item => item.category === selectedCategory);

  const addItem = arrOfSelectedItems.map((item) => (
    <Item key = { item.id } { ...item } />
  ));


  function handleSelectionChange (e) {
    const selectedValue = e.target.value;
    console.log(selectedValue);

    setSelectedCategory(selectedCategory => selectedValue);
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelectionChange}>
          {optionsContent}
        </select>
      </div>
      <ul className="Items">
        {addItem}
      </ul>
    </div>
  );
}

export default ShoppingList;
