import { useDispatch } from "react-redux";
import { addItem } from "../store/store";
import { useState } from "react";

const AddItem = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem({ id: Date.now(), name }));
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItem;