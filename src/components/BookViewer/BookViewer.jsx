import React from 'react';

const BookViewer = props => {
  return (
    <div className='row row-space'>
      <div className='col-md-4'>
        {/* Previous Book Button */}
        <button onClick={props.previousBook}>Previous</button>
      </div>
      <div className='col-md-4'>
        {/* Book Cover */}
        <h1>{props.book.title}</h1>
        <h4>{props.book.author}</h4>
      </div>
      <div className='col-md-4'>
        {/* Next Book Button */}
        <button onClick={props.nextBook}>Next</button>
      </div>
    </div>
  );
};

export default BookViewer;
