import { RevealWrapper } from "next-reveal";
import ButtonLink from "./ButtonLink";
import FlyingButton from "./FlyingButton";
import CartIcon from "./icons/CartIcon";

export default function Featured({ product }) {
  return (
    <div className="bg-gray-900">
      <div className="max-w-[1200px] min-h-[590px] mb-8 mx-[auto] py-0 px-[20px] bg-gray-900">
        <div className="grid grid-cols-1 gap-5 pb-6 min-[768px]:pb-0 min-[768px]:gap-10 min-[768px]:grid-cols-2">
          <div className="flex items-center order-1 min-[768px]:order-first">
          <div>
            <RevealWrapper origin={"left"} delay={0}>
              <h1 className="mb-4 text-center min-[768px]:text-left text-white font-semibold text-[2.2rem] min-[768px]:text-[3rem]">{product.title}</h1>
              <p className="text-[#aaa] text-[.8rem] text-center min-[768px]:text-left">{product.description}</p>
              <div className="flex justify-center min-[768px]:justify-normal gap-3 mt-6">
                <ButtonLink className="text-white border rounded-md px-4 py-2 border-white" href={"/product/" + product._id}>
                  Ver mais
                </ButtonLink>
                <FlyingButton _id={product._id} src={product.images?.[0]}>
                  <CartIcon />
                  Adicionar ao Carrinho
                </FlyingButton>
              </div>
            </RevealWrapper>
          </div>
          </div>
          
          <div>
            <div className="w-full">
              <RevealWrapper delay={0}>
                <div className="flex items-center justify-center w-full">
                  <img className={"main max-h-[500px]"} src={product.images?.[0]} alt="" />
                </div>
              </RevealWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
