import { useState } from "react";

import Logo from "./components/Logo";
import Form from "./components/Form";
import Checklist from "./components/Checklist";
import Stats from "./components/Stats";

// const listItem = [
//   { id: 1, title: "Makan", isChecked: false },
//   { id: 2, title: "Minum", isChecked: true },
//   { id: 3, title: "Tidur", isChecked: false },
// ];

function App() {
  const [listItem, setListItem] = useState([]);

  // menangani ketika user menambahkan item
  function handleAddItem(item) {
    setListItem((listItem) => [...listItem, item]);
  }

  // menangani ketika user menghapus item
  function handleDeleteItem(id) {
    setListItem((listItem) => listItem.filter((item) => item.id !== id));
  }

  // menangani ketika user menekan checkbox/ mencentang box
  function handleCheckItem(id) {
    setListItem((listItem) =>
      listItem.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  }

  function deleteAll() {
    const confir = window.confirm("Apakah anda yakin ingin menghapus semua item?");

    // kondisi ketika user menekan tombol hapus semua
    if (confir) {
      setListItem([]);
    };
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <Checklist
        listItem={listItem}
        onDeleteItems={handleDeleteItem}
        onCheck={handleCheckItem}
        onDeleteAll={deleteAll}
      />
      <Stats listItem={listItem} />
    </div>
  );
}

export default App;
