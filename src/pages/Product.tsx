import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Modal from "../components/Modal";
import type { RootState } from "../redux/store";
import { Product } from "../../types";

const Products = () => {
  const { isOpen } = useSelector((state: RootState) => state.modal);
  const { data } = useSelector((state: RootState) => state.data) as {
    data: Product[];
  };
  console.log(data);
  return (
    <div className="bg-slate-400 h-screen">
     <div className="flex flex-wrap gap-4">
     {data.map((product: Product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          id={product.id}
        />
      ))}
     </div>

      {isOpen && <Modal title="Add Product" btnText="Add" />}
    </div>
  );
};

export default Products;
