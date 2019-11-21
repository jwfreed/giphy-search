import React, { useContext } from 'react';
import { FavoritesContext } from './FavoritesContext';
import { Link } from '@reach/router';
import { Giphy } from './Giphy';

export const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <Link to='/'>Find More Gifs</Link>
      <h1>Favorites</h1>
      <div className='favorites-container'>
        {favorites === null ? (
          <h2>No favorites</h2>
        ) : (
          favorites.map(gif => (
            <Giphy id={gif.id} key={gif.id} media={gif.images} alt={gif.slug} />
          ))
        )}
      </div>
    </div>
  );
};
