import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Review (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam illum dolores iusto vero ipsa dolorem.</p>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, fuga nisi quas quos aut suscipit facilis animi atque necessitatibus tempore praesentium provident unde consequatur, voluptatum quasi laborum reiciendis. Aspernatur, quibusdam.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
