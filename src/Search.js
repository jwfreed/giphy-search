import React, { useState, useContext } from 'react';
import { SearchContext } from './SearchContext';
import { Results } from './Results';
import { Link } from '@reach/router';

export const Search = () => {
  const { search, setSearch } = useContext(SearchContext);
  const [searchTerm, setSearchTerm] = useState('');

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${searchTerm}`;

  async function requestGifs() {
    setSearch(() => []);
    const result = await fetch(url);
    result
      .json()
      .then(search => setSearch(search.data))
      .catch(console.error);
  }

  return (
    <>
      <Link to='favorites'>Go to Favorites</Link>
      <div>
        <form
          className='giphy-search-form'
          onSubmit={e => {
            e.preventDefault();
            requestGifs();
          }}>
          <label className='search-input-label' htmlFor='search-input'>
            Search for Gifs:
            <input
              id='search-input'
              className='input'
              type='text'
              placeholder='baby elephants'
              value={searchTerm}
              name='searchTerm'
              onChange={e => setSearchTerm(e.target.value)}
              onBlur={e => setSearchTerm(e.target.value)}
            />
          </label>
          <label htmlFor='submit-btn'>
            <button id='submit-btn' type='submit' value='Get Giphys'>
              Search
            </button>
          </label>
        </form>
      </div>
      {search ? (
        <div>
          <p>Click to add to favorites</p>
          <Results search={search} />
        </div>
      ) : (
        <div className='no-results'>No results. Search for some GIFs!</div>
      )}
    </>
  );
};
