import React from 'react';
import { Giphy } from './Giphy';

export const Results = ({ search }) => {
  return (
    <div className='search-results-container'>
      {search.map(gif => (
        <Giphy id={gif.id} key={gif.id} media={gif.images} slug={gif.slug} />
      ))}
    </div>
  );
};
