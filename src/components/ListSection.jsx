import React from 'react';
const ListSection = ({ books, onDelete, onItemClick }) => {
  return (
    <section>
      <h2>List Section</h2>
      <ul className="content-list">
        {books.map(book => (
          <li key={book.id} onClick={() => onItemClick(book)}>
            <div className='id'>Id: {book.id}</div>
            <div className='field1'>Title: {book.title}</div>
            <div className='field2'>Author: {book.author}</div>
            <div className='field3'>ISBN: {book.isbn}</div>
            <div className='field4'>Price: {book.price}</div>
            <div className='field5'>Publication Date: {book.publicationDate}</div>
            <button className='deleteButton' onClick={() => onDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default ListSection;
