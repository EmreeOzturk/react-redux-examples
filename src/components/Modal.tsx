import { useDispatch } from "react-redux";
import { modalToggle } from "../redux/modalSlice";
import { MdClose } from "react-icons/md";
import type { ModalProps } from "../../prop-types";
import Input from "./common/Input";
import { useState, useRef } from "react";
import OutsideClickHandler from "react-outside-click-handler";
type ProductData = {
  name: string;
  price: string;
  image: File;
};
const Modal: React.FC<ModalProps> = ({
  title = "Modal Title",
  btnFunc,
  btnText = "Add",
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const [productData, setProductData] = useState<ProductData>({
    name: "",
    price: "",
    image: null as unknown as File,
  });
  const onChangeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "image") {
      setProductData({
        ...productData,
        [e.target.name]: e.target.files![0] as File,
      });
      return;
    }
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };
  console.log(productData);

  return (
    <div
      ref={modalRef}
      className="absolute flex items-center top-0 justify-center h-screen w-screen bg-black opacity-70"
    >
      <div className="relative w-1/3 bg-white min-h-[200px] px-8 py-4  rounded-md">
        <div className="flex items-center justify-between text-black border-b pb-2 border-black">
          <h1 className="text-black text-xl">{title}</h1>
          <MdClose
            onClick={() => dispatch(modalToggle())}
            className=" text-xl cursor-pointer "
          />
        </div>
        <Input
          label="Product Name"
          placeholder="Product Name"
          type="text"
          onChange={onChangeFunc}
          value={productData.name}
          required
          name="name"
        />
        <Input
          label="Price"
          placeholder="Price"
          type="text"
          onChange={onChangeFunc}
          value={productData.price}
          required
          name="price"
        />
        <Input
          label="Product Image"
          placeholder="Select Image"
          type="file"
          onChange={onChangeFunc}
          name="image"
        />
        {productData?.image && (
          <img
            className="w-1/5"
            src={URL.createObjectURL(productData.image)}
            alt=""
          />
        )}
        <div className="flex justify-end mt-4">
          <button
            onClick={btnFunc}
            className="bg-[#5A5A66] text-white px-4 py-2 rounded-md"
          >
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
