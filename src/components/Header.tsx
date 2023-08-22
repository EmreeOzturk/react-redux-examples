import { MdPostAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { modalToggle } from "../redux/modalSlice";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className=" flex w-full items-center mx-auto h-16 pl-16 px-32 py-10 relative bg-[#5A5A66]">
      <div className="flex w-full items-center justify-between  ">
        <div className="text-3xl text-red-50">
          <h1 className="shadow-2xl">Redux Toolkit App</h1>
        </div>
        <div className="flex gap-4 ">
          <div className="border shadow-md px-4 py-2 rounded-md">
            <select className="bg-transparent w-[100px] text-white border-none outline-none">
              <option className="bg-[#5A5A66]" value="asc">
                Artan
              </option>
              <option className="bg-[#5A5A66]" value="desc">
                Azalan
              </option>
            </select>
          </div>
          <div className="border shadow-md px-4 py-2 rounded-md">
            <input
              className="focus:outline-none bg-transparent text-white  placeholder:text-white"
              type="text"
              placeholder="Arama Yapın"
            />
          </div>
          <div
            onClick={() => dispatch(modalToggle())}
            className="flex items-center cursor-pointer justify-center absolute right-14 bottom-5.5 border border-white rounded-md px-4 py-2 "
          >
            <MdPostAdd className="text-white text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
