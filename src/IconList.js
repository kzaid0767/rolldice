import React, { Component } from 'react';

class Icon extends Component {
    constructor(props) {
        super(props);
        this.state = { icons: [] }
        this.addIcon = this.addIcon.bind(this)
    }
    static defaultProps = {
        options: ["angry", "anchor", "archive", "at", "archway","couch", "cloud", "baby", "city", "bone", "car"]
    }

    addIcon() {
        let idx = Math.floor(Math.random() * this.props.options.length)
        let newIcon = this.props.options[idx]
        let NewIconsArr = [...this.state.icons, newIcon]
        this.setState({icons:NewIconsArr})
    }
    render() {
        const icons = this.state.icons.map(i => <i className={`fas fa-${i}`}></i>)
        return (
            <div>
                <h1>Icon: {icons}</h1>
                <button onClick={this.addIcon}>Get New Icon</button>
            </div>
        );
    }   
}
export default Icon;
