import { useState } from "react";
import ItemList from "./Item";

function CheckList({ listItem, onDeleteItems, onCheck, onDeleteAll }) {
  const [sortBy, setSortBy] = useState("input");

  // fungsi untuk mengurutkan item
  function sortList() {
    switch (sortBy) {
      case "title":
        return listItem.slice().sort((a, b) => a.title.localeCompare(b.title));
      case "status":
        return listItem
          .slice()
          .sort((a, b) => Number(a.isChecked) - Number(b.isChecked));
      case "input":
      default:
        return listItem;
    }
  }

  // mengurutkan item
  const sortedList = sortList();

  return (
    <div className="list">
      <ul>
        {/* tadinya listItem karna di urutkan maka di ubah ke sortedList */}
        {sortedList.map((item) => (
          <ItemList
            key={item.id}
            item={item}
            onDeleteItems={onDeleteItems}
            onCheck={onCheck}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Urutkan berdasarkan input</option>
          <option value="title">Urutkan berdasarkan nama</option>
          <option value="status">Urutkan berdasarkan status</option>
        </select>
        <button onClick={onDeleteAll}>Hapus Semua</button>
      </div>
    </div>
  );
}

export default CheckList;
