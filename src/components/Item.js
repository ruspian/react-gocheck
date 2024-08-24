function ItemList({ item, onDeleteItems, onCheck }) {
  return (
    <li>
      {/* user menekan checkbox/ mencentang box */}
      <input
        type="checkbox"
        value={item.isChecked}
        onChange={() => onCheck(item.id)}
      />
      <span style={{ textDecoration: item.isChecked ? "line-through" : "" }}>
        {item.title}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❎</button>
    </li>
  );
}

export default ItemList;
