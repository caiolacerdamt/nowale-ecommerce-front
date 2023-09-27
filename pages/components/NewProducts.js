import ProductsGrid from "./ProductsGrid";

export default function NewProducts({ products, wishedProducts }) {
  return (
    <div className="max-w-[1000px] my-0 mx-[auto] py-0 px-[20px]">
      <h2 className="text-2xl font-semibold my-6">Destaques</h2>
      <ProductsGrid products={products} wishedProducts={wishedProducts} />
    </div>
  );
}
