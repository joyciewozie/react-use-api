import './SearchBar.css';

import { useState } from 'react';

function SearchBar({onSubmit}) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // pass to parent component
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value)
  };


  return (
  <div>
    <form onSubmit={handleFormSubmit}>
     <input className="search-bar" value={term} onChange={handleChange} />
    </form>
  </div>
  );
}

export default SearchBar;
