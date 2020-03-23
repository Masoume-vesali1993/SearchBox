import React from 'react';

export default class HidealText extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isHidden: false,
        }
    }

    toggLeIsHidden () {
        this.setState((currenState) => ({
            isHidden: !currenState.isHidden,
        }));
    }

    render () {
        return (
            <div>
                <button onClick={() => this.toggLeIsHidden()}>Toggle</button>
                {!this.state.isHidden && this.props.text}
            </div>
        );
    }
}