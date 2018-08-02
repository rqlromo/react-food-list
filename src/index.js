import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

const items = [
    {
      name:"Cereales con chocolate",
      description: "Cereales rellenos de chocolate",
      quantity: 2,
      category: "Cereales",
      price: 5
    },
    {
      name:"Hamburguesa con queso",
      description: "Hamburguesa rica y saludable",
      quantity: 1,
      category: "Fast-food",
      price: 15
    },
    {
      name:"Agua mineral",
      description: "Agua de un charco del Himalaya",
      quantity: 2,
      category: "Bebida",
      price: 5
    }
  ];

ReactDOM.render(<App food={items} />, document.getElementById('root'));
