import React, { useContext } from 'react';
import { FavoritesContext } from './FavoritesContext';
import { Link } from '@reach/router';
import { Giphy } from './Giphy';

export const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <>
      <Link to="/">Find more GIFs</Link>
      <h1>My Favorites</h1>
      <div className="favorites-container">
        {favorites === null ? (
          <div className="no-results">
            You don't have any favorites. Find some GIFs!
          </div>
        ) : (
          favorites.map(gif => (
            <Giphy id={gif.id} key={gif.id} media={gif.images} alt={gif.slug} />
          ))
        )}
      </div>
    </>
  );
};
