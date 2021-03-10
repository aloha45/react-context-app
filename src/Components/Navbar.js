import React, { Component } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { ThemeContext } from '../Contexts/ThemeContext';

//consumer works in functional components and class components--can consume multiple contexts within one component this way

class Navbar extends Component {
    render() { 
        return ( 
            // instantiate context consumer and pass it the context parameter
            <AuthContext.Consumer>{(authContext) => (
            <ThemeContext.Consumer>{(themeContext) => {
                //set consts from destructured properties received from context
                const { isAuthenticated, toggleAuth } = authContext;
                const { isLightTheme, light, dark } = themeContext;
                //set consts to theme
                const theme = isLightTheme ? light : dark;
                return(
                    <nav style={{ background: theme.ui, color: theme.syntax }}>
                    <h1>Context App</h1>
                    <div onClick={toggleAuth}>
                        { isAuthenticated ? 'Logged in' : 'Logged out'}
                    </div>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                )
            }}</ThemeContext.Consumer>
            )}</AuthContext.Consumer>
         );
    }
}
 
export default Navbar;