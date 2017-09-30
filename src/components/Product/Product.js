import React from 'react';
import imagesImport from 'utils/imagesImport';
import './Product.css';


const Product = ({product}) => {

  const dealType = getDealType(product.discount);

  function getDealType() {
    if (product.discount >= 70 ) {
      return 'product--topdeal'
    } else if (product.discount < 70 && product.discount >= 50 ) {
      return 'product--deal'
    } else {
      return 'product';
    }
  }

  return (
    <div className={dealType}>
      <div className='product__description'>
        <div className='product__discount'>
          <span>{product.discount}%</span>
          <span>off</span>
        </div>
      {
        !product.topdeal &&
          <div className='product__name'>
          {product.text}
        </div>
      }
      </div>
      <img
        className={product.topdeal ? 'product--topdeal__image' : 'product__image'}
        src={imagesImport.juice}
        alt='buy me! ;)'
      />
      <div className={`${dealType}__sale-info`}>
        <span className={`${dealType}__price--final`}>${product.price}</span>
        <span className='product__price'>${product.price}</span>
        <span className='product__retailer'>{product.retail}</span>
      </div>
        {
          product.topdeal &&
            <div className='product__name'>
              {product.text}
            </div>
        }
      <ul className='product__specials'>
        {/* TODO: If there are more then 1 <li> add <span> after each of them, exсept last
          give this element className: '0 10margin'(anything else should work already)*/}
        {product.specials.map((item, i) =>
          <li className='product__specials__item' key={`${item}-${i}`}>
            {item}
          </li>
        )}
      </ul>
    </div>
  );
}

export default Product;
