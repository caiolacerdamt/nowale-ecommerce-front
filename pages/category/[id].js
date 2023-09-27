import { Category } from "@/models/Category";
import Header from "../components/Header";
import { Product } from "@/models/Product";
import ProductBox from "../components/ProductBox";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";

export default function CategoryPage({
  category,
  subCategories,
  products: originalProducts,
  wishedProducts
}) {
  const defaultSorting = "_id-desc";
  const defaultFilterValues = category.properties.map((p) => ({
    name: p.name,
    value: "all",
  }));
  const [products, setProducts] = useState(originalProducts);
  const [filtersValues, setFilterValues] = useState(defaultFilterValues);
  const [sort, setSort] = useState(defaultSorting);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [filtersChanged, setFiltersChanged] = useState(false);

  function handleFilterChange(filterName, filterValue) {
    setFilterValues((prev) => {
      return prev.map((p) => ({
        name: p.name,
        value: p.name === filterName ? filterValue : p.value,
      }));
    });
    setFiltersChanged(true);
  }

  useEffect(() => {
    if (!filtersChanged) {
      return;
    }
    setLoadingProducts(true);
    const catIds = [category._id, ...(subCategories?.map((c) => c._id) || [])];
    const params = new URLSearchParams();
    params.set("categories", catIds.join(","));
    params.set("sort", sort);
    filtersValues.forEach((f) => {
      if (f.value !== "all") {
        params.set(f.name, f.value);
      }
    });
    const url = `/api/products?` + params.toString();
    axios.get(url).then((res) => {
      setProducts(res.data);
      setLoadingProducts(false);
    });
  }, [filtersValues, sort, filtersChanged]);

  console.log(category);

  return (
    <>
      <Header />
      <div className="max-w-[1200px] my-0 mx-[auto] py-0 px-[20px]">
        <div className="flex flex-col min-[768px]:flex-row min-[768px]:items-center justify-between my-6">
          <h1 className="text-2xl font-semibold text-gray-900 mt-[10px] mb-[10px]">
            {category.name}
          </h1>
          <div className="flex gap-[15px]">
            {category.properties.map((prop) => (
              <div
                className="flex gap-[5px] bg-gray-900 text-white py-[5px] px-[10px] rounded-[5px]"
                key={prop.name}
              >
                <span>{prop.name}:</span>
                <select
                  onChange={(e) =>
                    handleFilterChange(prop.name, e.target.value)
                  }
                  value={filtersValues.find((f) => f.name === prop.name).value}
                  className="bg-transparent border-0"
                >
                  <option className="text-white bg-gray-900" value="all">
                    Todos
                  </option>
                  {prop.values.map((val) => (
                    <option
                      className="bg-gray-900 text-white"
                      key={val}
                      value={val}
                    >
                      {val}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            <div className="flex gap-[5px] bg-gray-900 text-white py-[5px] px-[10px] rounded-[5px]">
              <span>Filtrar:</span>
              <select
                className="bg-transparent border-0"
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value);
                  setFiltersChanged(true);
                }}
              >
                <option className="text-white bg-gray-900" value="price-asc">
                  Menor preço
                </option>
                <option className="text-white bg-gray-900" value="price-desc">
                  Maior preço
                </option>
                <option className="text-white bg-gray-900" value="_id-desc">
                  Lançamentos
                </option>
                <option className="text-white bg-gray-900" value="_id-asc">
                  Antigos
                </option>
              </select>
            </div>
          </div>
        </div>
        {loadingProducts && <Spinner />}
        {!loadingProducts && (
          <div>
            {products.length > 0 && (
              <div className="grid grid-cols-2 gap-[20px] min-[768px]:grid min-[768px]:grid-cols-4">
                {products.map((p) => (
                  <ProductBox key={p._id} {...p} wished={wishedProducts} />
                ))}
              </div>
            )}
            {products.length === 0 && (
                <div>Sem produtos deste tipo.</div>
            )}
          </div>
        )}
      </div>
        <Footer /> 
    </>
  );
}

export async function getServerSideProps(context) {
  const category = await Category.findById(context.query.id);
  const subCategories = await Category.find({ parent: category._id });
  const catIds = [category._id, ...subCategories.map((c) => c._id)];
  const products = await Product.find({ category: catIds });
  return {
    props: {
      category: JSON.parse(JSON.stringify(category)),
      subCategories: JSON.parse(JSON.stringify(subCategories)),
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
