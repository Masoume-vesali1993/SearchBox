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
            text: '',
        };
    }


    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
         if (value.length>0){
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.items.sort().filter(v => regex.test(v));
         }
            this.setState(() => ({ suggestions,text: value}));
    }

    suggestionsSelected (value){
        this.setState(() => ({
            text: value,
            suggestions : [],
        }))
    }

    renderSuggestions () {
        const { suggestions } = this.state;
        if (suggestions.length === 0 ){
            return null;
        }
        return (
            <ul>
                {suggestions.map((item) => <li onClick={() => this.suggestionsSelected(item)}> {item}</li>)}
            </ul>
        );
    }

    render () {
        const { text } = this.state;
        return (
            <div>
                <input value={text} onChange={this.onTextChanged} type="text" />
                {this.renderSuggestions()}
            </div>
        )
    }
}
