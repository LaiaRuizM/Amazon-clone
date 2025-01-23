//1.- Overall layout of the HomePage (HP)
//2.- Define the container on the Amzn's HomePage with arbitrary value support (min/max-w-)
//3.- Create Carousel component and add it to the HP + add Swiper's library to implement the Carousel (npm i swiper) + import some of the Swiper functionalities + add some styling and config (navigation) + add feature (autoplay)
//4.- Hop back over to the HP - to start making the content that fit on the HP (arranged in cards and they're in a grid-like fashion)

import { Carousel } from "./";

const HomePage = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] bg-purple-500 m-auto">
        Testing
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
