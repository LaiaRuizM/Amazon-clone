import { Swiper, SwiperSlide } from "swiper/react"; //Swiper functionalities
import "swiper/css";

function Carousel() {
  return (
    <div className="h-[600px] bg-white">
      <Swiper loop={true} spaceBetween={0} className="h-[50%]">
        <SwiperSlide>
          <img src={"../images/carousel_1.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_2.jpg"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;

//loop={true} -> Once we get to the end of all the imgs in our Carousel we're just going to go back
