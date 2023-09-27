import CartIcon from "./icons/CartIcon";
import Link from "next/link";
import { useState } from "react";
import FlyingButton from "./FlyingButton";
import HeartOutlineIcon from "./icons/HeartOutlineIcon";
import HeartSolidIcon from "./icons/HeartSolidIcon";
import axios from "axios";

export default function ProductBox({
  _id,
  title,
  description,
  price,
  images,
  wished = false,
  onRemoveFromWishList = () => {},
}) {
  const [isWished, setIsWished] = useState(wished);
  const url = "/product/" + _id;

  async function addToWishList(e) {
    e.preventDefault();
    e.stopPropagation();
    const nextValue = !isWished;
    if (nextValue == false && onRemoveFromWishList) {
      onRemoveFromWishList(_id);
    }
    await axios
      .post("/api/wishlist", {
        product: _id,
      })
      .then(() => {});
    setIsWished(nextValue);
  }

  return (
    <>
      <div className="mb-4">
        <Link
          href={url}
          className="bg-white p-[20px] h-[120px] text-center flex items-center justify-center rounded-lg relative"
        >
          <div>
            <button
              onClick={addToWishList}
              className="absolute p-2 top-0 right-0"
            >
              {isWished ? (
                <HeartSolidIcon className="w-6 h-6 border-1 border-black text-red-600" />
              ) : (
                <HeartOutlineIcon className="w-6 h-6" />
              )}
            </button>
            <img
              src={images?.[0]}
              className="max-w-[100%] max-h-[90px]"
            />
          </div>
        </Link>
        <div className="mt-2">
          <div className="flex justify-between items-center">
            <Link href={url} className="font-bold text-[1rem] m-0">
              {title}
            </Link>
            <div className="block items-center justify-between my-2 min-[768px]:my-4 min-[768px]:flex">
              <div className="text-right text-[1rem] font-bold min-[768px]:text-left">
                R${price}
              </div>
            </div>
          </div>

          <FlyingButton className={'bg-gray-900 py-2 text-white rounded-lg flex justify-center items-center px-2 w-full'} _id={_id} src={images?.[0]}>
            <CartIcon className="w-6 h-6" />
          </FlyingButton>
        </div>
      </div>
    </>
  );
}
