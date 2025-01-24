import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const CarouselProduct = () => {
  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3">Best Sellers</div>
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}>
        {Array.from({ length: 9 }, (_, i) => (
          <SwiperSlide key={i}>
            <img
              src={`../images/product_${i}_small.jpg`}
              alt="Carousel product"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselProduct;

//Array.from: Run this 9 times and give us 9 SwiperSlides and in order to keep track of this array of SwiperSlides: React needs to know a key (i).
