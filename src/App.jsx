import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';
import Categories from './components/Categories';
import Products from './components/Products';
import { valueContext } from './context/ContextValue'
import { useState } from 'react';
function App() {
  const [value, setValue] = useState('')
  return (
    <valueContext.Provider value={{ value, setValue }}>
      <div className='container'>
        <Search />
        <Categories  />
        <Products  />
      </div>
    </valueContext.Provider>
    
  );
}

export default App;
