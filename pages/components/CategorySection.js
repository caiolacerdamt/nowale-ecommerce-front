import Link from "next/link";
import { RevealWrapper } from "next-reveal";
import ProductBox from "./ProductBox";

function CategorySection({ category, products, wishedProducts }) {
  return (
    <div key={category._id} className="my-6">
      <div className="flex items-center gap-[15px] my-6">
        <h2 className="text-2xl font-semibold text-gray-900 mt-[10px] mb-[10px]">
          {category.name}
        </h2>
        <Link className="text-gray-900 underline inline-block" href={"/category/" + category._id}>
          Ver tudo
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-[20px] ... min-[768px]:grid ... ... min-[768px]:grid-cols-4">
        {products.map((p, index) => (
          <RevealWrapper delay={index * 50} key={p._id}>
            <ProductBox {...p} wished={wishedProducts.includes(p._id)} />
          </RevealWrapper>
        ))}
        <RevealWrapper delay={products.length * 50}>
          <Link
            className="bg-gray-900 h-[120px] rounded-[15px] flex items-center ... ... justify-center text-white"
            href={"/category/" + category._id}
          >
            Ver tudo &rarr;
          </Link>
        </RevealWrapper>
      </div>
    </div>
  );
}

export default CategorySection;