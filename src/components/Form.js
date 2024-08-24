import { useState } from "react";

function Form({ onAddItem }) {
  const [title, setTitle] = useState("");

  // menangani form submit
  function handleSubmit(e) {
    // mencegah default form submit untuk melakukan refresh
    e.preventDefault();

    // memastikan tidak mengirim data kosong
    if (!title) return;

    // membuat data baru
    const newItem = {
      id: Date.now(),
      title,
      isChecked: false,
    };

    onAddItem(newItem);
    setTitle("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Tambahkan Form Baru</h3>
      {/* mengamil data dari imputan user */}
      <input
        type="text"
        name="title"
        id=""
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Tambah</button>
    </form>
  );
}

export default Form;
