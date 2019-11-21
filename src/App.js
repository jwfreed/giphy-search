import { hot } from 'react-hot-loader/root';
import React, { useState, useMemo } from 'react';
import { SearchContext } from './SearchContext';
import { FavoritesContext } from './FavoritesContext';
import { Search } from './Search';
import { Favorites } from './Favorites';
import { Router } from '@reach/router';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

const App = () => {
  const [search, setSearch] = useState(null);

  const [favorites, setFavorites] = useState(null);

  const favoritesValue = useMemo(() => ({ favorites, setFavorites }), [
    favorites,
    setFavorites
  ]);

  const searchValue = useMemo(() => ({ search, setSearch }), [
    search,
    setSearch
  ]);

  return (
    <div>
      <header>Giphy Finder</header>
      <main>
        <ErrorBoundary>
          <SearchContext.Provider value={searchValue}>
            <FavoritesContext.Provider value={favoritesValue}>
              <Router>
                <Search path='/' />
                <Favorites path='/favorites' />
              </Router>
            </FavoritesContext.Provider>
          </SearchContext.Provider>
        </ErrorBoundary>
      </main>
    </div>
  );
};

export default hot(App);
