import { Product } from "../../types";

const ProductCard: React.FC<Product> = ({
  name = "Product Name",
  price = "Product Price",
  image = "",
  id,
}) => {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h1>Product Name</h1>
        <h1>Product Price</h1>
      </div>
    </div>
  );
};

export default ProductCard;
