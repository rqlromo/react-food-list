import React, { Component } from 'react';
import FoodList from './FoodList';

class App extends Component {

    render() {
        const { food } = this.props;
        return (
            <FoodList list={food} />
        )
    }
}

export default App;
