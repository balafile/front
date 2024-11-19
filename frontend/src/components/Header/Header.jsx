import React from 'react';
import { Carousel } from 'antd';
import './Header.css';

const Header = () => {
  return (
    // parthi -- npm install antd for carousel
    <Carousel autoplay dots={false} >
      <div className="slide-container">
        <div className="slide-image">
          <img src="/ban2.svg" alt="Slide 1" />
        </div>
        <div className="slide-content" >
          <h3>Delicious Desserts</h3>
          <p>Indulge in sweet treats to satisfy your cravings.</p>
          {/* <button>Order Now</button> */}
        </div>
      </div>
      <div className="slide-container">
        <div className="slide-image">
          <img src="/ban1.svg" alt="Slide 2" />
        </div>
        <div className="slide-content" id='c1'>
          <h3 >Freshly Baked Pizzas</h3>
          <p >Hot and cheesy pizzas, just the way you like it.</p>
          {/* <button>Order Now</button> */}
        </div>
      </div>
      <div className="slide-container">
        <div className="slide-image">
          <img src="/ban3.svg" alt="Slide 3" />
        </div>
        <div className="slide-content" id='c3'>
          <h3>Hearty Meals</h3>
          <p >Enjoy a fulfilling meal to keep you energized.</p>
          {/* <button>Order Now</button> */}
        </div>
      </div>
    </Carousel>
  );
}

export default Header;