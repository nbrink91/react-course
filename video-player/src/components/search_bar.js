import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { item: '' }
    }

    render() {
        return (
            <div>
                <input
                    value={ this.state.term }
                    onChange={ event => this.setState({ term: event.target.value }) } />
            </div>
        )
    }
}
