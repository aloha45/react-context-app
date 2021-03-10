import React from 'react'
import Booklist from './Components/Booklist'
import Navbar from './Components/Navbar'
import ThemeContextProvider from './Contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Booklist />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
