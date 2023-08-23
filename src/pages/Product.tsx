import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Modal from "../components/Modal";
import type { RootState } from "../redux/store";

const Products = () => {
  const { isOpen } = useSelector((state: RootState) => state.modal);
  const { data } = useSelector((state: RootState) => state.data);
  console.log(data);
  return (
    <div>
      <ProductCard />
    
      {isOpen && <Modal title="Add Product" btnText="Add" />}
    </div>
  );
};

export default Products;
