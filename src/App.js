import './App.css'

import { useState } from 'react';
import SearchBar from './components/SearchBar';
import searchImages from './api';
import ImageList from './components/ImageList';

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term)
    setImages(result);
  };

  return (
    <div className="page-container">
      <div><SearchBar onSubmit={handleSubmit} /></div>
      <div><ImageList imageProp={images} /></div>
    </div>
  );
}

export default App;
