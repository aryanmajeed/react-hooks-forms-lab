import React, { useState } from "react";
import { v4 as uuid } from "uuid";


function ItemForm({ onItemFormSubmit }) {

  const [newItem, setNewItem] = useState({ name: "", category: "Produce" })

  function handleChange(e) {
    let name = e.target.name;
    setNewItem(prev => ({ ...prev, [name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    onItemFormSubmit({ id: uuid(), ...newItem })
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button >Add to List</button>
    </form>
  );
}

export default ItemForm;
