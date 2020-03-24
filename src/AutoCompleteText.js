import React from 'react';

export default class AutoCompleteText extends React.Component{
    constructor (props) {
        super(props);
        this.items = [
            'Masoume',
            'Parham',
            'Arshia',
            'Alisa',
        ];
        this.state={
            suggestions: [],
        };
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        if (value.length === 0){
            this.setState(() => ({
                suggestions: [],
            }))
        }
    }

    render () {
        return (
            <div>
                <input onChange={this.onTextChanged} type="text" />
                <ul>
                    {this.items.map((item) => <li> {item}</li>)}
                </ul>
            </div>
        )
    }
}