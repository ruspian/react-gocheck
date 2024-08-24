function Stats({ listItem }) {
  // kondisi jika list item kosong
  if (listItem.length === 0) {
    return (
      <footer className="stats">
        <span>📄 Catatan masih kosong</span>
      </footer>
    );
  }

  const total = listItem.length;
  const checked = listItem.filter((item) => item.isChecked).length;
  const percentage = Math.floor((checked / total) * 100);

  return (
    <footer className="stats">
      <span>
        {percentage === 100
          ? "✅ Semua catatan sudah dichecklist"
          : `📄 Kamu punya ${total} catatan, Baru ${checked} yang dichecklist (${percentage}%) ✅`}
      </span>
    </footer>
  );
}

export default Stats;
