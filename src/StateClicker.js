import React, { Component } from 'react';


class StateClicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        }
        this.handleClick = this.handleClick.bind(this)
    }
        
    handleClick(e) {
        let randNam = Math.floor(Math.random() * 10) + 1
        this.setState({num:randNam})
    }

render() {
    let luckyNum = this.state.num
    return (
        <div>
            <h1>Number is {this.state.num}</h1>
            <button hidden={this.state.num===7?true:false} onClick={this.handleClick}>Random Number</button>
            <h1 hidden={this.state.num===7?false:true} >YOU WIN</h1>
        </div>
    );
}
}

/* another way to hide and show
{this.state.num===7? <h1>You Win</h2>: <button> Random Number </button>}
*/

export default StateClicker;