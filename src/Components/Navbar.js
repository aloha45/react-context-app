import React, { Component } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';

//consumer works in functional components and class components--can consume multiple contexts within one component this way

class Navbar extends Component {
    render() { 
        return ( 
            // instantiate context consumer and pass it the context parameter
            <ThemeContext.Consumer>{(context) => {
                //set consts from destructured properties received from context
                const { isLightTheme, light, dark } = context;
                //set consts to theme
                const theme = isLightTheme ? light : dark;
                return(
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                    <h1>Context App</h1>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                )
            }}
            </ThemeContext.Consumer>
         );
    }
}
 
export default Navbar;