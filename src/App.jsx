import React from 'react';
import ItemList from './components/ItemList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="container mx-auto p-4 w-[70%]">
      <h1 className="text-2xl font-bold text-center mb-4">Item List</h1>
      <SearchBar />
      <ItemList />
    </div>
  );
}

export default App;
