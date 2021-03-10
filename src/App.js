import React from 'react'
import Booklist from './Components/Booklist'
import Navbar from './Components/Navbar'
import ThemeToggle from './Components/ThemeToggle';
import AuthContextProvider from './Contexts/AuthContext';
import ThemeContextProvider from './Contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <Booklist />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
