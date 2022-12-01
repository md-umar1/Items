import React from 'react';

const Menu = ({items}) => {
  return <div className="section-center">{items.map((menuItem)=>{
    const{id,title,img,desc,price,restaurant}=menuItem;
    return<article key={id} className='menuItem'>
      <img src={img} alt={title} className='photo'/>
      <div className='item-info'>
        <header>
          <h4>{title}</h4>
          <h4 className="price">{price}</h4>
          <h4 className="restaurant">{restaurant}</h4>
        </header>
        <p className='item-text'>{desc}</p>
      </div>
    </article>
  })}</div>
};

export default Menu;
