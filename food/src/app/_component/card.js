"use client";

import { RedEx } from "../icons/redEx";
import { SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export const Card = ({ cart, setCart }) => {
  console.log(cart, "hahaha");

  // const [order, setOrder] = useState();
  const handleAddOrder = async () => {
    try {
      // 1. items buh hooloor guine
      // 2. neg hool bolgonii une too shirheg 2 iin urjveriig olno
      // 3. urjveruudee niilber olno
      const totalPrice = cart.reduce((sum, cur) => {
        return sum + cur.count * cur.price;
      }, 0);
      console.log(totalPrice, "nums");

      // items[0].quantity * items[0].price

      const res = await fetch("http://localhost:8000/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          user: "69002b5aa29c29d53b112abe",
          foodOrderItems: cart,
          totalPrice: totalPrice,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white w-[391px] h-115 rounded-2xl px-2  overflow-y-scroll">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-[#71717A] font-bold text-lg">My cart</h1>
          </div>
          {cart.map((item, index) => {
            return (
              <div className="flex gap-2" key={index}>
                <div className="w-31 h-30">
                  <img
                    src={item.image}
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
                <div className="h-30 w-76 flex flex-col justify-between">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="text-[#EF4444] text-lg font-bold">
                        {item.foodName}
                      </h2>
                      <p className="text-xs">{item.ingredients}</p>
                    </div>
                    <div>
                      <button className="border border-[red] rounded-full w-9 h-9 flex items-center justify-center cursor-pointer">
                        <RedEx />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <button
                        className=" cursor-pointer"
                        onClick={() => {
                          setCart(
                            cart.map((cur) =>
                              cur.foodName === item.foodName
                                ? { ...cur, count: cur.count - 1 }
                                : cur
                            )
                          );
                        }}
                      >
                        -
                      </button>
                      <p>{item.count}</p>
                      <button
                        className="cursor-pointer"
                        onClick={() => {
                          // localstorage.setItem
                          setCart(
                            cart.map((cur) =>
                              cur.foodName === item.foodName
                                ? { ...cur, count: cur.count + 1 }
                                : cur
                            )
                          );
                        }}
                      >
                        +
                      </button>
                    </div>
                    <div>
                      <p className="text-sm font-bold">
                        ₮{item.price * item.count}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="border border/border-foreground-50"></div>
          {/* <div className="flex gap-2">
            <div className="w-31 h-30">
              <img
                src="/pigmeat.png"
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
            <div className="h-30 w-76 flex flex-col justify-between">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-[#EF4444] text-lg font-bold">
                    Sunshine Stackers
                  </h2>
                  <p className="text-xs">
                    Fluffy pancakes stacked with fruits, cream, syrup, and
                    powdered sugar.
                  </p>
                </div>
                <div>
                  <button className="border border-[red] rounded-full w-9 h-9 flex items-center justify-center cursor-pointer">
                    <RedEx />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <button className="cursor-pointer">-</button>
                  <p>1</p>
                  <button className="cursor-pointer">+</button>
                </div>
                <div>
                  <p className="text-sm font-bold">$12.99</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="h-29 w-[391px] flex flex-col gap-2 mt-4">
          <div>
            <h1 className="text-lg font-bold text-[#71717A]">
              Delivery location
            </h1>
          </div>
          <input
            className="h-20 w-[391px] border rounded-sm text-[#71717A] text-sm pl-3 pt-2"
            placeholder=" Please share your complete address"
          />
        </div>
      </div>
      <div className="bg-white w-[371px] h-69 rounded-2xl px-2 flex flex-col gap-5">
        <div>
          <h1 className="text-[#71717A] text-lg">Payment info</h1>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <p className="text-[#71717A] text-sm">Items </p>
            <p className="font-bold text-sm">$25.98 </p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#71717A] text-sm">Shipping </p>
            <p className="font-bold text-sm">0.99$ </p>
          </div>
        </div>
        <div className="border/border-foreground-50 border"></div>
        <div className="flex justify-between">
          <p className="text-[#71717A] text-sm">Total </p>
          <p className="font-bold text-sm">$26.97 </p>
        </div>
        <SheetFooter>
          <Button type="submit" onClick={handleAddOrder} variant={"redButton"}>
            Checkout
          </Button>
        </SheetFooter>
      </div>
    </div>
  );
};
