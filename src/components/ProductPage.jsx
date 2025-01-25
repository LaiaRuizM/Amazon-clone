import { useParams } from "react-router-dom"; //retrieve id

const ProductPage = () => {
  const { id } = useParams();
  return <div>ProductPage {id} </div>;
};

export default ProductPage;
