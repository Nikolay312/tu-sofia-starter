import React, { useState, useEffect } from 'react';
const DetailsSection = ({ selectedBook, onSave, onClear }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
    price: '',
    publicationDate: ''
  });
  useEffect(() => {
    if (selectedBook) {
      setFormData(selectedBook);
    } else {
      setFormData({
        title: '',
        author: '',
        isbn: '',
        price: '',
        publicationDate: ''
      });
    }
  }, [selectedBook]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };
  const handleClear = () => {
    setFormData({
      title: '',
      author: '',
      isbn: '',
      price: '',
      publicationDate: ''
    });
    onClear();
  };
  return (
    <section className="content-details">
      <h2>Details Section</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input id='field1' type="text" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Author:</label>
          <input id='field2' type="text" name="author" value={formData.author} onChange={handleChange} required />
        </div>
        <div>
          <label>ISBN:</label>
          <input id='field3' type="text" name="isbn" value={formData.isbn} onChange={handleChange} required />
        </div>
        <div>
          <label>Price:</label>
          <input id='field4' type="text" name="price" value={formData.price} onChange={handleChange} required />
        </div>
        <div>
          <label>Publication Date:</label>
          <input id='field5' type="date" name="publicationDate" value={formData.publicationDate} onChange={handleChange} required />
        </div>
        <div>
          <button id='saveButton' type="submit">Save</button>
          <button type="button" onClick={handleClear} id='clearButton'>Clear</button>
        </div>
      </form>
    </section>
  );
}
export default DetailsSection;
