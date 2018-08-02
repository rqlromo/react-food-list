import React, { Component } from 'react';

class CategoryButton extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const {
            category,
            onButtonClick,
        } = this.props;
        onButtonClick(e, category);
    }

    render() {
        const {
            category,
        } = this.props;
        return (
            <button
                type="button"
                onClick={this.handleClick}
            >
                {category}
            </button>
        );
    }
}

export default CategoryButton;