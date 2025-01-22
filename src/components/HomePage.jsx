//1.- Overall layout of the HomePage (HP)
//2.- Define the container on the Amzn's HomePage with arbitrary value support (min/max-w-)
//3.- Create Carousel component and add it to the HP + add Swiper's library to implement the Carousel (npm i swiper) + import some of the Swiper functionalities + add some styling and config (navigation)

import { Carousel } from "./";

const HomePage = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] bg-purple-500 m-auto">
        Testing
        <Carousel />
      </div>
    </div>
  );
};

export default HomePage;
