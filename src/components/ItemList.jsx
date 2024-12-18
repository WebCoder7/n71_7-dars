import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "../store/store";

const ItemList = ({ setEditingItem }) => {
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => setEditingItem(item)}>Edit</button>
            <button onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;