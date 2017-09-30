import React from 'react';
import Product from 'components/Product/Product';
import Header from 'components/Header/Header';
import products from 'api/products';
import './Task.css';


class Task extends React.Component {

  static defaultProps = {
    products
  };

  render() {

    return (
      <div>
        <Header />
        <div className='grid'>
          {this.props.products.map(product => <Product key={product.id} product={product}/>)}
        </div>
      </div>
    );
  }
};

export default Task;
