import React, {useContext} from 'react'
import './top.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Mousewheel, Keyboard } from "swiper";
import { ShopContext } from '../../context/ShopCart';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {RiMoneyCnyCircleLine} from 'react-icons/ri'
import {AiOutlineSmile, AiOutlineShoppingCart } from 'react-icons/ai'
import {TbShirt} from 'react-icons/tb'
import {FaShippingFast} from 'react-icons/fa'
import { Link } from "react-router-dom";



const Top = () => {
    const { item, addToCart, cartItem } =useContext(ShopContext);

  return (
    <div className="top-container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={false}
          mousewheel={false}
          keyboard={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 200000000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            601: { slidesPerView: 1 },
            1025: { slidesPerView: 1 },
          }}
          loop={true}
          modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
           <SwiperSlide>
                <div className="img">
                    <h1>Level up your style with our collections</h1>
                    <button>Shop now</button>
                </div>
            </SwiperSlide>
            <SwiperSlide><div className="img2"></div></SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
        <div className="services">
            <h1>We provide best customer experiences</h1>
            <div className="service-container">
                <div className="service">
                    <RiMoneyCnyCircleLine className='react-icon'/>
                    <h4>Original Products</h4>
                    <p>We provide money back guarantee if the product are not original</p>
                </div>
                <div className="service">
                    <AiOutlineSmile className='react-icon'/>
                    <h4>Satisfaction Guarantee</h4>
                    <p>Exchnage the product you've purchased if it doesn't fit on you</p>
                </div>
                <div className="service">
                    <TbShirt className='react-icon'/>
                    <h4>New Arrival Everyday</h4>
                    <p>We update our collections almost everyday</p>
                </div>
                <div className="service">
                    <FaShippingFast className='react-icon'/>
                    <h4>Fast & Free Shipping</h4>
                    <p>We offer fast and free shipping for our loyal customers</p>
                </div>
            </div>
           
        </div>
        <div className="curated-container">
          <h1>Currated picks</h1>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={false}
            mousewheel={false}
            keyboard={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
            }}
            // breakpoints={{
            //   601: { slidesPerView: 3 },
            //   1025: { slidesPerView:  3},
            // }}
            loop={true}
            modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
          
            <SwiperSlide>
              <div className="first-image pic1">
                <div className="hover">
                  <button>Best Seller</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="first-image pic2">
                <div className="hover">
                  <button>Best Seller</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="first-image pic3">
                <div className="hover">
                  <button>Best Seller</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="first-image pic4">
                <div className="hover">
                  <button>Best Seller</button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="featured-products">
          <h1>Featured products</h1>
          <Swiper
            slidesPerView={5}
            spaceBetween={0}
            navigation={false}
            mousewheel={false}
            keyboard={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 10000000000,
              disableOnInteraction: false,
            }}
            // breakpoints={{
            //   601: { slidesPerView: 3 },
            //   1025: { slidesPerView:  3},
            // }}
            loop={true}
            modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
          {item.map((items) => {
            return(
              <SwiperSlide>
                <div className="featured-item">
                  <img src={items.img} alt="" />
                  <div className="item-detail">
                    <div className="detail">
                      <p>{items.title}</p>
                      <p>${items.price}</p>
                    </div>
                    <div className="cart-icon">
                      <button onClick={() => addToCart(items.id)}><AiOutlineShoppingCart/></button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
            
          </Swiper>
        </div>
         {/* promote-container */}
         <div className="promote-container">
          <div className="promote">
            <div className="promote-left">

          </div>
          <div className="promote-right">
            <h4>LIMITED OFFER</h4>
            <h1>35% off only this Friday and get special gift</h1>
            <button>Grab it now →</button>
          </div>
          </div>
          
         </div>
         <div className="subscribe-container">
          <div className="subscribe">
            <h1>Subscribe to our newsletter to hget updates to our latest collections</h1>
            <h4>Get 20% off on your first order just by subscribing to our newsletter</h4>
              <div className="input-form">
                <input type="text" />
                <button>Subscribe</button>
              </div>
          </div>
          
         </div>
         <Link to='/cart' className='link'> Cart</Link>
         <div className="">
         {cartItem.map((cartitem) =>{

          console.log(cartitem.quantity);
          if(cartitem.quantity !==0){
            return(
              item.map((item) =>{
                if(cartitem.id === item.id){
                  return(
                    <p>{item.price}</p>
                  )
                }
                
              })
            )
            // item.map((item) =>{
            //   return(
            //     <p>{item.price}</p>
            //   )
              
            // })
          }
         })}
         </div>
    </div>
    
  )
}

export default Top