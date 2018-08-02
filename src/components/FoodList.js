import React, { Component } from "react";
import FoodItem from "./FoodItem";
import CategoryButton from "./CategoryButton";

class FoodList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredByCategory: null,
    };

    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.filterByCategory = this.filterByCategory.bind(this);
  }

  handleCategoryClick(e, category) {
    console.log('ey nas');
    this.setState({ filteredByCategory: category });
  }

  filterByCategory(item) {
    return item.category === this.state.filteredByCategory;
  }


  getFilteredList() {
    const { list } = this.props;
    const { filteredByCategory } = this.state;

    return !filteredByCategory
      ? list
      : list.filter(this.filterByCategory);
  }

  render() {
    const { list } = this.props;
    return (

      <div>
        <ul>
          {this.getFilteredList().map((item, index) => (
            <li key={index}>
              <FoodItem
                name={item.name}
                category={item.category}
                price={item.price}
              />
            </li>
          ))}
        </ul>
        <CategoryButton
          category="Bebida"
          onButtonClick={this.handleCategoryClick}
        />
        <CategoryButton
          category="Cereales"
          onButtonClick={this.handleCategoryClick}
        />
      </div>
    );
  }
}

export default FoodList;
