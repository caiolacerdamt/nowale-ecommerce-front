import { Product } from "@/models/Product";
import Header from "../components/Header";
import { mongooseConnect } from "../lib/mongoose";
import ProductImages from "../components/ProductImages";
import CartIcon from "../components/icons/CartIcon";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../components/CartContext";
import FlyingButton from "../components/FlyingButton";
import ProductReviews from "../components/ProductReviews";
import axios from "axios";
import Footer from "../components/Footer";

export default function ProductPage({ product }) {

  const { addProduct } = useContext(CartContext);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    await axios.get('/api/categories').then(res => {
      const response = res.data;
    })
  }

  return (
    <>
      <Header />
      <div className="max-w-[1200px] my-0 mx-[auto] py-6 px-[20px]">
        <div className="grid grid-cols-1 gap-[40px] mt-[40px] min-[768px]:grid-cols-2">
          <div className="bg-white rounded-[10px] p-[30px] flex flex-col justify-between">
            <ProductImages images={product.images} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {product.title}
            </h1>

            <div className="flex items-center gap-4 mt-4">
              <p className="text-xl font-semibold text-gray-900">
                R${product.price}
              </p>

              <FlyingButton
                className={'bg-gray-900 py-2 text-white rounded-lg flex justify-center items-center px-2 w-full'} src={product.images?.[0]}
                
              >
                <div
                  onClick={() => {
                    addProduct(product._id);
                    
                  }}
                  className="cursor-pointer w-full flex items-center justify-center gap-4 p-2 bg-gray-900 text-white border border-gray-900 rounded-md min-[768px]:flex min-[768px]:items-center"
                >
                  <CartIcon />
                  Adicionar ao carrinho
                </div>
              </FlyingButton>
            </div>
          </div>
        </div>
        <div className="my-8">
          <ProductReviews product={product} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
