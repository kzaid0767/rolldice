import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        return ( 
            <button
                onClick={function(){
                    alert('You Clicked')
                }}
            >
                Click Me!
            </button>
         );
    }
}
 
export default Button;