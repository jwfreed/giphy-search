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

  const addGifToFavorites = e => {
    const gif = e.target;
    const giphy = nodeToGifObj(gif);
    const newFavorites = favorites == null ? giphy : [favorites, giphy].flat();

    setFavorites(newFavorites);
  };

  const small = media.downsized_medium.url;
  const medium = media.original.url;
  const large = media.downsized_large.url;

  return (
    <div className='giphy' onClick={e => addGifToFavorites(e)}>
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
