import React from "react";
import { useState } from "react/cjs/react.production.min";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Produce');
  const newItem = {
    id: uuid(),
    name,
    category
  };

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    setCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onItemFormSubmit(newItem);
  }

  return (
    <form className="NewItem">
      <label>
        Name:
        <input type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
