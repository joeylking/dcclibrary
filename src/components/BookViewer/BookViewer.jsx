import React from 'react';
import Book from '../Book/Book';

const BookViewer = props => {
  return (
    <div className='row row-space'>
      <div className='col-md-4'>
        {/* Previous Book Button */}
        <button onClick={props.previousBook}>Previous</button>
      </div>
      <div className='col-md-4'>
        {/* Book Cover */}
        <Book book={props.book} />
      </div>
      <div className='col-md-4'>
        {/* Next Book Button */}
        <button onClick={props.nextBook}>Next</button>
      </div>
    </div>
  );
};

export default BookViewer;
