import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ListSection from './components/ListSection';
import DetailsSection from './components/DetailsSection';
import Footer from './components/Footer';
import './App.css';
const App = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isbn: '9780743273565', price: '$10', publicationDate: '1925-04-10' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '9780061120084', price: '$12', publicationDate: '1960-07-11' },
    { id: 3, title: '1984', author: 'George Orwell', isbn: '9780451524935', price: '$8', publicationDate: '1949-06-08' }
  ]);
  const [selectedBook, setSelectedBook] = useState(null);
  const handleItemClick = (book) => {
    setSelectedBook(book);
  };
  const handleDelete = (id) => {
    setBooks(books.filter(book => book.id !== id));
    setSelectedBook(null); // Clear details form
  };
  const handleSave = (formData) => {
    if (selectedBook) {
      const updatedBooks = books.map(book => (book.id === formData.id ? formData : book));
      setBooks(updatedBooks);
    } else {
      const newBook = { ...formData, id: books.length + 1 };
      setBooks([...books, newBook]);
    }
    setSelectedBook(null); // Clear details form
  };
  const handleClear = () => {
    setSelectedBook(null);
  };
  return (
    <div>
      <Navbar />
      <ListSection books={books} onDelete={handleDelete} onItemClick={handleItemClick} />
      <DetailsSection selectedBook={selectedBook} onSave={handleSave} onClear={handleClear} />
      <Footer />
    </div>
  );
}
export default App;
