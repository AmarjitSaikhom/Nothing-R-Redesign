import { useParams } from 'react-router-dom';
import products from "../data/productsData";
import { useEffect, useState } from 'react';
import ProductCards from '../components/ProductCards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './productPage.css';

const ProductPage = () => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const result = category
      ? products.filter(product => product.category === category)
      : products;

    setFilteredProducts(result);
  }, [category]);

  return (
    <>
      <section className='product_slider'>
        <Swiper
          cssMode={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
          modules={[Autoplay, Pagination, Mousewheel, Keyboard]}
        >
          <SwiperSlide>
            <img src="/image/product-image/slider-image/slider-img-1.png" alt="" />
            <div className="product-slider-text">
              <h3>Phone(3) and Headphone(1) are here</h3>
              <button>Learn More</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/image/product-image/slider-image/slider-img-2.png" alt="" />
            <div className="product-slider-text">
              <h3>Meet the new CMF lineup</h3>
              <button>Discover CMF</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/image/product-image/slider-image/slider-img-3.png" alt="" />
            <div className="product-slider-text">
              <h3>Phone(3) Pro teardown</h3>
              <button>Discover (3a) Pro</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/image/product-image/slider-image/slider-img-4.png" alt="" />
            <div className="product-slider-text">
              <h3>Phone(3a) and (3a) Pro are here!</h3>
              <button>Discover (3a) Series</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/image/product-image/slider-image/slider-img-5.png" alt="" />
            <div className="product-slider-text">
              <h3>Inside Air (Open) teardown</h3>
              <button>Read More</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

          

      <section className='product_container'>
        {filteredProducts.map(product => (
          <ProductCards
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </section>
    </>
  );
};

export default ProductPage;
