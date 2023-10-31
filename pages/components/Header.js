import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import BarsIcon from "./icons/Bars";
import SearchIcon from "./icons/SearchIcon";
import { FaCartArrowDown, FaCartPlus } from "react-icons/fa";

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobilenavActive, setMobileNavActive] = useState(false);
  return (
    <div className="w-full bg-gray-900 sticky top-0 z-10">
      <div className="min-w-[100%]  my-0 mx-[auto] py-0 px-[20px]">
        <div className="w-full flex justify-between py-[20px] px-4">
          <Link className="relative z-[3] text-white text-[1.5rem] font-bold" href={"/"}>
            NowAle
          </Link>
          <div className="flex gap-4">
            <nav
              mobilenavActive={mobilenavActive}
              className={`fixed my-auto top-0 bottom-0 left-0 right-0 px-[20px] pt-[70px] bg-gray-900 gap-5 text-white
                ${mobilenavActive ? "block" : "hidden"}
            min-[768px]:flex min-[768px]:gap-5 min-[768px]:static min-[768px]:p-0`}
            >
              <Link className="navLink" href={"/"}>
                Início
              </Link>
              <Link className="navLink" href={"/products"}>
                Produtos
              </Link>
              <Link className="navLink" href={"/categories"}>
                Categorias
              </Link>
              <Link className="navLink" href={"/account"}>
                Conta
              </Link>
              <Link className="flex gap-2 items-center py-[10px] px-0 min-[768px]:p-0 transition-all duration-500 ease-in-out font-medium text-[1.2rem] hover:min-[768px]:text-white hover:min-[768px]:scale-105" href={"/cart"}>
                <FaCartPlus /> ({cartProducts.length})
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              <Link className="inline-block min-w-[20px] font-medium" href={"/search"}>
                <SearchIcon className={"h-[22px] w-[22px] m-0 text-white"} />
              </Link>
              <button
                onClick={() => setMobileNavActive((p) => !p)}
                className="relative z-[3] text-white min-[768px]:hidden"
              >
                <BarsIcon className="h-[26px] w-[26px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
