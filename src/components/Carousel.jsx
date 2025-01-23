import { Swiper, SwiperSlide } from "swiper/react"; //Swiper functionalities
import { Navigation, Autoplay } from "swiper/modules"; // Navigation module

import "swiper/css";
import "swiper/css/navigation";

function Carousel() {
  return (
    <div className="h-[600px] bg-white">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
        }}
        className="h-[50%]">
        <SwiperSlide>
          <img src={"../images/carousel_1.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_2.jpg"} />
        </SwiperSlide>
        <SwiperSlide className="bg-black">
          <video controls muted="muted">
            <source src={"../images/carousel_vid.mp4"} type="video/mp4" />
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_4.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_5.jpg"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;

//loop={true} -> Once we reach the end of all the images in our Carousel, it will loop back to the beginning
