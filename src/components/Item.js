import React, { useState } from "react";

function Item({ name, category }) {
  const [ isAddedToCart, setAddedToCart ] = useState(false);
  const liClassName = isAddedToCart ? "in-cart" : "";
  const btnClassName = isAddedToCart ? "remove" : "add";

  function handleClickCartBtn () {
    setAddedToCart (isAddedToCart => !isAddedToCart);
  }

  return (
    <li className={ liClassName }>
      <span>{ name }</span>
      <span className="category">{ category }</span>
      <button className={ btnClassName } onClick = { handleClickCartBtn }>
        { isAddedToCart ? 'Remove From Cart' : 'Add to Cart' }
      </button>
    </li>
  );
}

export default Item;
