import React, { Component } from 'react';
import LottoBall from './LottoBall';
import './LotteryComponent.css'

class LotteryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nums: Array.from({length:this.props.numBalls})
        }
        this.regenerate = this.regenerate.bind(this)
    }
    static defaultProps = {
        title: 'Lotto Numbers Generator',
        numBalls: 6,
        maxNum: 40
    }
    regenerate() {
        let arr = []
        for (let i=0; i<this.props.numBalls;i++){
            arr.push(Math.floor(Math.random()*this.props.maxNum)+1)
        }
        this.setState({nums:arr})
    }
    render() {
        let numbers= this.state.nums
        const balls = numbers.map(b=> <LottoBall num={b} />)
        return (
            <div className='LotteryComponent'>
                <h2>{this.props.title}</h2>
                <div className='LotteryComponent-balls'>
                    <div>{balls}</div>
                </div>
                <button onClick={this.regenerate}> Generate Numbers</button>
            </div>
        );
    }
}

export default LotteryComponent;