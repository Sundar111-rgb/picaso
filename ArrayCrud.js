import React, { useState,useEffect } from "react";

const ArrayCrud = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Sundar1" },
    { id: 2, name: "Sundar2" },
    { id: 3, name: "Sundar3" },
    { id: 4, name: "Sundar4" },
    { id: 5, name: "Sundar5" },
  ]);

  const addItem = () => {
    console.log(items);
    setItems([...items, { id: items.length+1, value: "Sundar" }]);
  };

  const updateItem = (i) => {
    console.log(i);
    items[1].name = "Hello";
    console.log(items[1].name);
  };


  return (
    <div>
      <button onClick={addItem}>Add</button>
      {items.map((items) => {
        return (
          <div>
            <h1>{items.name}</h1>
            <button onClick={() => updateItem(items.id)}>edit</button>
          </div>
        );
      })}
    </div>
  );
};
export default ArrayCrud;
