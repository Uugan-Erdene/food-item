import { Headerhat } from "../icons/header-hat";
export const EndBox = () => {
  return (
    <div className="w-full h-[755px] bg-[black] py-15">
      <div className="w-full bg-red-500 whitespace-nowrap overflow-hidden flex items-center h-15 ">
        <div className=" text-2xl text-white w-full animation-scroll  gap-2">
          {Array(40)
            .fill("Fresh Fast Delivered")
            .map((text, i) => (
              <span key={i}>{text}</span>
            ))}
        </div>
      </div>

      <div className="flex gap-100 justify-center py-20">
        <div className="flex flex-col items-center">
          <Headerhat />
          <h1 className="text-white text-2xl">
            Nom<span className="text-[red]">Nom</span>
          </h1>
          <p className="text-white text-xs">Swift delivery</p>
        </div>
        <div className="flex gap-40">
          <div className="flex flex-col gap-3">
            <p className="text-[#71717A]">NOMNOM </p>
            <p className="text-white">Home </p>
            <p className="text-white">Contact us </p>
            <p className="text-white">Delivery zone </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[#71717A]">MENU </p>
            <p className="text-white">Appetizers </p>
            <p className="text-white">Salads </p>
            <p className="text-white">Pizzas</p>
            <p className="text-white">Main dishes</p>
            <p className="text-white">Desserts</p>
          </div>
          <div className="flex flex-col gap-3">
            <p>MENU </p>
            <p className="text-white">Side dish </p>
            <p className="text-white">Brunch</p>
            <p className="text-white">Desserts</p>
            <p className="text-white">Beverages</p>
            <p className="text-white">Fish & Sea foods</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[#71717A]">FOLLOW US</p>
            <div className="flex gap-4">
              <img src="FaceBook.png" />
              <img src="Instagram.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-12 pl-54 py-20">
        <p className="text-[#71717A]">Copy right 2024©Nomnom LLC</p>
        <p className="text-[#71717A]">Privacy policy</p>
        <p className="text-[#71717A]">Terms and conditoin</p>
        <p className="text-[#71717A]">Cookie policy</p>
      </div>
    </div>
  );
};
