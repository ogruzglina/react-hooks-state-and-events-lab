import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() { 
  const [ isDarkMode, setDarkMode ] = useState (false);
  const appClass = isDarkMode ? "App dark" : "App light";

  function handleDarkMode () { 
    setDarkMode( isDarkMode => !isDarkMode );
  }

  return (
    <div className = { appClass }>
      <header>
        <h2>Shopster</h2>
        <button onClick = { handleDarkMode } >{ isDarkMode ? 'Dark Mode' : 'Light Mode' }</button>
      </header>
      <ShoppingList items={ itemData } />
    </div>
  );
}

export default App;
