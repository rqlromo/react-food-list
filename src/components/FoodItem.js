import React, { Component } from 'react';

class FoodItem extends Component {
    render() {
        const {
            name,
            price,
            category,
        } = this.props;
        return (
            <div>
                <h2>{name}</h2>
                <p>{price}</p>
                <p>{category}</p>
            </div>
        );
    }
}

export default FoodItem;
