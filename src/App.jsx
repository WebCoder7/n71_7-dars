import { useState } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import AddItem from "./components/AddItem";
import EditItem from "./components/EditItem";
import ItemList from "./components/ItemList";
import "./App.css"

const App = () => {
  const [editingItem, setEditingItem] = useState(null);

  return (
    <Provider store={store}>
      <div className="container">

        <div className="App">
          <h1>React query redux middleware</h1>
          {editingItem ? (
            <EditItem editingItem={editingItem} setEditingItem={setEditingItem} />
          ) : (
            <AddItem />
          )}
          <ItemList setEditingItem={setEditingItem} />
        </div>
      </div>
    </Provider>
  );
};

export default App;