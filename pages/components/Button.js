import ProductBox from "./ProductBox";

export default function NewProducts({ products }) {
  return (
    <div className="bg-gray-900">
      <div className="max-w-[1000px] mx-0 my-[auto] px-0 py-[20px]">
        <h2 className="text-2xl text-white">New Products</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {products?.length > 0 && products.map(product => (
            <ProductBox key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}