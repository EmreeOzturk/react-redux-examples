import { useDispatch } from "react-redux";
import { modalToggle } from "../redux/modalSlice";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import Input from "./common/Input";
import OutsideClickHandler from "react-outside-click-handler";
import type { ModalProps } from "../../prop-types";
import type { Product } from "../../types";
import { createData } from "../redux/dataSlice";

const Modal: React.FC<ModalProps> = ({
    title = "Modal Title",
    btnText = "Add",
}) => {
    const dispatch = useDispatch();
    const [productData, setProductData] = useState<Product>({
        name: "",
        price: "",
        image: null as unknown as File,
    });

    const onChangeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "image") {
            setProductData({
                ...productData,
                [e.target.name]: URL.createObjectURL(e.target.files![0]),
                id: Math.floor(Math.random() * 100000),
            });
            return;
        }
        setProductData({
            ...productData,
            [e.target.name]: e.target.value,
            id: Math.floor(Math.random() * 100000),
        });
    };

    const buttonClickHandler = () => {
        dispatch(createData(productData));
        dispatch(modalToggle());
    };
    return (
        <div className="absolute flex items-center top-0 justify-center h-screen w-screen bg-black opacity-70">
            <div className="relative w-1/3 bg-white min-h-[200px] px-8 py-4  rounded-md">
                <OutsideClickHandler onOutsideClick={() => dispatch(modalToggle())}>
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
                        <img className="w-1/5" src={productData.image} alt="" />
                    )}
                    <div className="flex justify-end mt-4">
                        <button
                            onClick={buttonClickHandler}
                            className="w-full bg-[#ACEB98] hover:bg-[#87FF65] text-slate-900 px-4 py-2 rounded-md"
                        >
                            {btnText}
                        </button>
                    </div>
                </OutsideClickHandler>
            </div>
        </div>
    );
};

export default Modal;
