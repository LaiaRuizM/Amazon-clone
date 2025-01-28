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
//13.- Implement dynamic routing for ProductPage (PP) + with API integration: add functionality to PP creating an API call which the file CallApi.js (+ npm i axios) + creating the file constants.js  -- created an API utility (CallApi.js) using Axios (dependency: npm i axios) to fetch product data dynamically and centralized the BASE_URL configuration in constants.js.
//14.- Back to PP, before we call the API, we're going to need an object in this component (that's going to store all of the product information that gets returned from the API -> useState hook) + display data on PP
//15.- Since we need to display a large amount of product details (on the PP), we are going to create a new component called ProductDetails. This component will be responsible for displaying the more detailed information of the product in an organized manner -> create component ProductDetails
//16.- Back to PP: integrate ProductDetails component into it
//17.- Create a new component ProductBadge to display dynamic badges. Integrated it into ProductDetails
//18.- Create a new component ProductRatings for displaying star ratings. Integrated it into ProductDetails
//19.- Update ProductDetails
//20.- Go back to ProductPage(PP): enhance PP layout with pricing and quantity selection + define a way to display/formatting the price (constants.js) + integrate US currency formatting and update PP layout
//21.- Hit the Amazon logo and be taken back to the HomePage & hit the cart icon and go back to the Checkout on NavBar
//22.- Implement dynamic search suggestions on user input on Search component + add controlled input for search bar + filtering the suggestions we have based on the user's input

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
