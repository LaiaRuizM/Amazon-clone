import { useSearchParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductDetails } from "./";
import { callAPI } from "../utils/CallApi";
import { US_CURRENCY } from "../utils/constants";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState(null); //Retrieve id products

  const getSearchResults = () => {
    const searchTerm = searchParams.get("searchTerm");
    const category = searchParams.get("category");

    callAPI(`data/search.json`).then(searchResults => {
      const categoryResults = searchResults[category];
      if (searchTerm) {
        const results = categoryResults.filter(product =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(results);
      } else {
        setProducts(categoryResults);
      }
    });
  };

  useEffect(() => {
    getSearchResults();
  }, [searchParams]); //This array tracks a list of dependency that this component may have and if the state of any of these dependencies change, it will in fact call the useEffect. So, if we leave it blank, we don't have any dependencies to keep track of. Every time that searchParams change (so anytime a search is made basically).
  // This useEffect tracks changes in the searchParams state.
  // Every time the searchParams change (i.e., when a search is made),
  // the getSearchResults function is triggered to update the search results.

  return (
    <div className="min-w-[1200px] max-w-[1300px] m-auto pt-4">
      {products &&
        products.map((product, key) => {
          return (
            <Link key={key} to={`/product/${product.id}`}>
              <div className="h-[250px] grid grid-cols-12 rounded mt-1 mb-1 ">
                <div className="col-span-2 p-4 bg-gray-200">
                  <img
                    className="m-auto"
                    src={product.image_small}
                    alt="Search result product"
                  />
                </div>
                <div className="col-span-10 bg-gray-50 border border-gray-100 hover:bg-gray-100 ">
                  <div className="font-medium text-black p-2">
                    <ProductDetails product={product} ratings={true} />
                    <div className="text-xl xl:text-2xl pt-1">
                      {US_CURRENCY.format(product.price)}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default SearchResults;
