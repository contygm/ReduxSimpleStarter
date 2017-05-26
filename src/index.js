import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';

// TODO: env variable
const API_KEY = ''

const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
