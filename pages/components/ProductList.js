import ProductBox from "./ProductBox";

function ProductList({ products, onRemoveFromWishlist }) {
  return (
    <div className="grid grid-cols-1 min-[768px]:grid-cols-2 gap-4">
      {products.map((product) => (
        <ProductBox
          key={product}
          {...product}
          wished={true}
          onRemoveFromWishlist={onRemoveFromWishlist}
        />
      ))}
    </div>
  );
}

export default ProductList;