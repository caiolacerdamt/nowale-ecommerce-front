import { Product } from "@/models/Product";
import Header from "./components/Header";
import { mongooseConnect } from "./lib/mongoose";
import { authOptions } from "./api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { WishedProduct } from "@/models/WishedProduct";
import ProductsGrid from "./components/ProductsGrid";
import Footer from "./components/Footer";

export default function ProductsPage({ products, wishedProducts }) {
  return (
    <>
      <Header />
      <div className="max-w-[1200px] min-h-[600px] my-0 mx-[auto] py-0 px-[20px] mt-[20px]">
        <h1 className="text-2xl font-semibold text-gray-900 my-8">Todos os produtos</h1>
        <ProductsGrid products={products} wishedProducts={wishedProducts} />
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(ctx) {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: { _id: -1 } });
  const session = await getServerSession(ctx.req, ctx.res, authOptions)
  const wishedProducts = session?.user ? await WishedProduct.find({
    userEmail: session?.user.email,
    product: products.map(p => p._id.toString())
  }) : []
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      wishedProducts: wishedProducts.map(i => i.product.toString()),
    },
  };
}
