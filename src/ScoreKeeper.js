import React, { Component } from 'react'

class ScoreKeeper extends Component {
    constructor(props) {
        super(props);
        this.state = { score:0 }
        this.singleKill = this.singleKill.bind(this)
        this.trippleKill = this.trippleKill.bind(this)
    }

    singleKill() {
        /* not good to update state like this */
        this.setState({score: this.state.score +1})
    }
    trippleKill() {
        this.setState(this.incrementScore)
    }

    incrementScore(oldState){
        return({score: oldState.score+3})

    }
    
    render() { 
        return ( 
            <div>
                <h1> Score is: {this.state.score} </h1>
                <button onClick={this.singleKill}>Single Kill</button>
                <button onClick={this.trippleKill}>Tripple Kill</button>
            </div>
         );
    }
}
 
export default ScoreKeeper;