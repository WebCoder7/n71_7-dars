import { useDispatch } from "react-redux";
import { editItem } from "../store/store";
import { useState } from "react";

const EditItem = ({ editingItem, setEditingItem }) => {
  const [name, setName] = useState(editingItem?.name || "");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editItem({ id: editingItem.id, updatedItem: { id: editingItem.id, name } }));
    setEditingItem(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Save</button>
      <button type="button" onClick={() => setEditingItem(null)}>Cancel</button>
    </form>
  );
};

export default EditItem;