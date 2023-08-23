import { useState } from "react";
import { Product } from "../../types";
import { BsThreeDots, BsTrash, BsPencil } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteData, updateData } from "../redux/dataSlice";
const ProductCard: React.FC<Product> = ({
  name = "Product Name",
  price = "Product Price",
  image = "",
  id,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  return (
    <div className="border border-black flex flex-col w-[200px] h-[300px] relative rounded-md">
      <div className="w-full h-full rounded-md ">
        <img src={image} alt="" />
      </div>
      <div className=" h-32 bg-gray-600 text-white w-full p-2">
        <h1 className="font-semibold text-xl">{name}</h1>
        <h1 className="font-thin text-md">{price}</h1>
      </div>
      <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <BsThreeDots className="absolute right-2 top-1 text-2xl cursor-pointer hover:scale-110 hover:text-white transition-all" />
      </div>
      {isMenuOpen && (
        <div className="absolute right-2 top-10 bg-white shadow-md rounded-md p-2">
          <ul className="flex flex-col gap-2 ">
            <li
              onClick={() => dispatch(updateData(
                {
                  id,
                  name,
                  price,
                  image
                }
              ))}
              className="flex items-center cursor-pointer w-full hover:bg-slate-400 p-2 rounded-md"
            >
              <BsPencil className="inline-block mr-2" /> Edit
            </li>
            <li
              onClick={() => dispatch(deleteData(id))}
              className="flex items-center cursor-pointer w-full hover:bg-slate-400 p-2 rounded-md"
            >
              <BsTrash className="inline-block mr-2" /> Delete
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
