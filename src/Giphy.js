import React, { useContext } from 'react';
import { FavoritesContext } from './FavoritesContext';
import { SearchContext } from './SearchContext';

export const Giphy = ({ id, media, slug }) => {
  const { search } = useContext(SearchContext);
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const nodeToGifObj = gifNode => {
    let gifObj = search.filter(gif => gif.id === gifNode.id);
    return gifObj;
  };

  const addGifToFavorites = giphy => {
    const newFavorites =
      favorites.length == 0 ? giphy : [favorites, giphy].flat(Infinity);

    setFavorites(newFavorites);
  };

  const removeGifFromFavorites = giphy => {
    const newFavorites = favorites.filter(gif => gif.id !== giphy[0].id);

    setFavorites(newFavorites);
  };

  const addRemoveGifFromFavorites = e => {
    const gif = e.target;
    const giphy = nodeToGifObj(gif);

    favorites.length >= 0 &&
    favorites.find(gif => gif.id == giphy[0].id) == undefined
      ? addGifToFavorites(giphy)
      : favorites.length > 0 &&
        favorites.find(gif => gif.id == giphy[0].id) != undefined
      ? removeGifFromFavorites(giphy)
      : null;
  };

  const small = media.downsized_medium.url;
  const medium = media.original.url;
  const large = media.downsized_large.url;

  return (
    <div
      className='giphy'
      onClick={e => {
        addRemoveGifFromFavorites(e);
      }}>
      <div className='heart-btn' id={'heart-' + id} key={'heart=' + id}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          style={
            !!favorites.find(gif => gif.id === id)
              ? { fill: 'red' }
              : { fill: 'transparent' }
          }>
          <path d='M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z' />
        </svg>
      </div>
      <img
        id={id}
        key={id}
        src={media.downsized_small.url}
        srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w`}
        alt={slug}
      />
    </div>
  );
};
