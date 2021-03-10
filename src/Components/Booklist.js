import React, { Component } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';

// this method only works on class components and only one context per component
// on the plus side--much more declarative syntax and easier to understand where the context comes from

class Booklist extends Component {
    //turn on static context
    static contextType = ThemeContext;
    render() { 
        // pull out destructured properties from context
        const { isLightTheme, light, dark } = this.context;
        // set those properties to a variable with a ternary
        const theme = isLightTheme ? light : dark;
        return ( 
            <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
                <ul>
                    <li style={{ background: theme.ui }}>
                        The Way of Kings
                    </li>
                    <li style={{ background: theme.ui }}>
                        The Name of the Wind
                    </li>
                    <li style={{ background: theme.ui }}>
                        The Final Empire
                    </li>
                </ul>
            </div>
         );
    }
}
 
export default Booklist;