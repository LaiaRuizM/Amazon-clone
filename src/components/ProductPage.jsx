import { useParams } from "react-router-dom"; //retrieve id
import { useState, useEffect } from "react";
import { ProductDetails } from "./";
import { callAPI } from "../utils/CallApi";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = () => {
    callAPI(`data/products.json`).then(productResults => {
      setProduct(productResults[id]);
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (!product?.title) return <h1>Loading Product ...</h1>;

  return (
    product && (
      <div className="h-screen bg-amazonclone-background">
        <div className="min-w-[1000px] max-w-[1500px] m-auto bg-orange-400 p-4">
          <div className="grid grid-cols-10 gap-2">
            {/* Left */}
            <div className="col-span-3 p-8 rounded bg-white m-auto">
              <img src={`${product.image}`} alt="Main product" />
            </div>
            {/* Middle */}
            <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
              <div className="mb-3">
                <ProductDetails product={product} ratings={false} />
              </div>
              <div></div>
            </div>
            {/* Right */}
            <div className="col-span-2 p-4 rounded bg-green-400"></div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductPage;
