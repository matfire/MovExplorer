import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import MovieProvider from './Contexts/MoviesContext';
import Routes from './Routes';

function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;
