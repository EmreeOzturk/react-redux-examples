import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Modal from "../components/Modal";
import type { RootState } from "../redux/store";

const Products = () => {
  const { isOpen } = useSelector((state: RootState) => state.modal);


  console.log(isOpen);
  return (
    <div>
      <ProductCard />
      {isOpen && (
        <Modal
          title="Add Product"
          btnFunc={() => console.log("modal")}
          btnText="Add"
        />
      )}
    </div>
  );
};

export default Products;
