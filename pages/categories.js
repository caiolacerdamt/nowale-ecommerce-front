import { Category } from "@/models/Category";
import Header from "./components/Header";
import { Product } from "@/models/Product";
import ProductBox from "./components/ProductBox";
import Link from "next/link";
import { RevealWrapper } from "next-reveal";
import { mongooseConnect } from "./lib/mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import { WishedProduct } from "@/models/WishedProduct";
import Footer from "./components/Footer";

export default function CategoriesPage({ mainCategories, categoriesProducts, wishedProducts}) {
  return (
    <>
      <Header />
      <div className="max-w-[1200px] min-h-[600px] my-0 mx-[auto] py-0 px-[20px]">
        {mainCategories.map(cat => (
          <div key={cat._id} className="my-6">
            <div className="flex items-center gap-[15px] my-6">
              <h2 className="text-2xl font-semibold text-gray-900 mt-[10px] mb-[10px]">
                {cat.name}
              </h2>
              <Link
                className="text-gray-900 underline inline-block"
                href={"/category/"+cat._id}
              >
                Ver tudo
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-[20px] min-[768px]:grid min-[768px]:grid-cols-4">
              {categoriesProducts[cat._id].map((p, index) => (
                <RevealWrapper delay={index * 50} key={p._id}>
                  <ProductBox {...p} wished={wishedProducts.includes(p._id)} />
                </RevealWrapper>
              ))}
              <RevealWrapper delay={categoriesProducts[cat._id].length*50}>
                <Link
                  className="bg-gray-900 h-[120px] rounded-[15px] flex items-center justify-center text-white"
                  href={"/category/" + cat._id}
                >
                  Ver tudo &rarr;
                </Link>
              </RevealWrapper>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(ctx) {
  await mongooseConnect();
  const categories = await Category.find();
  const mainCategories = categories.filter(c => !c.parent);
  const categoriesProducts = {};
  const allFetchedProductsId = []
  for (const mainCat of mainCategories) {
    const mainCatId = mainCat._id.toString();
    const childCatIds = categories
      .filter(c => c?.parent?.toString() === mainCatId)
      .map(c => c._id.toString());
    const categoriesIds = [mainCatId, ...childCatIds];
    const products = await Product.find({ category: categoriesIds }, null, {
      limit: 3,
      sort: { "_id": -1 },
    });
    allFetchedProductsId.push(...products.map(p => p._id.toString()))
    categoriesProducts[mainCat._id] = products;
  }
   const session = await getServerSession(ctx.req, ctx.res, authOptions); 
   const wishedProducts = session?.user ? await WishedProduct.find({
       userEmail: session?.user.email,
       product: allFetchedProductsId,
     }) : []
  return {
    props: {
      mainCategories: JSON.parse(JSON.stringify(mainCategories)),
      categoriesProducts: JSON.parse(JSON.stringify(categoriesProducts)),
      wishedProducts: wishedProducts.map(i => i.product.toString())
    },
  };
}
