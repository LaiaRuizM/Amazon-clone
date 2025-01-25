//1.- Overall layout of the HomePage (HP)
//2.- Define the container on the Amzn's HomePage with arbitrary value support (min/max-w-)
//3.- Create Carousel component and add it to the HP + add Swiper's library to implement the Carousel (npm i swiper) + import some of the Swiper functionalities + add some styling and config (navigation) + add feature (autoplay)
//4.- Hop back over to the HP - to start making the content that fit on the HP (arranged in cards and they're in a grid-like fashion)
//5.- Once we got our responsive grid in place (in HP), we need to create some content to fill it - create a new component: HomePageCard to create a reusable card (to pass it a different title/img/link - props) and it will be able to present them on the grid
//6.- Create CarouselCategory component - add more content to the HP, which will involve adding carousels for some categories + add functionality/display categories
//7.- Create CarouselProduct component - add more content to the HP, which will involve adding carousels for some products + add functionality
//8.- Add banner to HP
//9.- Create NavBar component (we want it to be present for any route that we go down) -> App.js, above our Route + layout and structure + install icons (heroicons/react package)
//10.- Create Search component (search box) + functionality
//11.- Add components to NavBar (later we'll revisit them)
//12.- Add some navigation to our site creating three more components: Checkout, ProductPage and SearchResults
//13.- add dynamic routing for ProductPage

import { Carousel, HomePageCard, CarouselCategory, CarouselProduct } from "./";

const HomePage = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto">
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          <HomePageCard
            title={"We have a surprise for you"}
            img={"../images/home_grid_1.jpg"}
            link={"See terms and conditions"}
          />
          <HomePageCard
            title={"Watch The Rings of Power"}
            img={"../images/home_grid_2.jpg"}
            link={"Start streaming now"}
          />
          <HomePageCard
            title={"Unlimited Streaming"}
            img={"../images/home_grid_3.jpg"}
            link={"Find out more"}
          />
          <HomePageCard
            title={"More titles to explore"}
            img={"../images/home_grid_4.jpg"}
            link={"Browse Kindle Unlimited"}
          />
          <HomePageCard
            title={"Shop Pet Supplies"}
            img={"../images/home_grid_5.jpg"}
            link={"See more"}
          />
          <HomePageCard
            title={"Spring Sale"}
            img={"../images/home_grid_6.jpg"}
            link={"See the deals"}
          />
          <HomePageCard
            title={"Echo Buds"}
            img={"../images/home_grid_7.jpg"}
            link={"See more"}
          />
          <HomePageCard
            title={"Family Plan: 3 months free"}
            img={"../images/home_grid_8.jpg"}
            link={"Learn more"}
          />
          <div className="m-3 pt-8">
            <img
              className="xl:hidden"
              src={"../images/banner_image_2.jpg"}
              alt="Banner 2"
            />
          </div>
        </div>
        <CarouselProduct />
        <CarouselCategory />
        <div className="h-[200px]">
          <img
            className="h-[100%] m-auto"
            src={"../images/banner_image.jpg"}
            alt="Banner 1"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
