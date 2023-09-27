import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import axios from "axios";
import ProductsGrid from "./components/ProductsGrid";
import { debounce } from "lodash";
import Spinner from "./components/Spinner";

export default function SearchPage() {
  const [phrase, setPhrase] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedSearch = useCallback(debounce(searchProducts, 500), []);
  useEffect(() => {
    if (phrase.length > 0) {
      setIsLoading(true);
      debouncedSearch(phrase);
    } else {
      setProducts([]);
    }
  }, [phrase]);

  async function searchProducts(phrase) {
    await axios
      .get("/api/products?phrase=" + encodeURIComponent(phrase))
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false);
      });
  }
  return (
    <>
      <Header />
      <div className="max-w-[1200px] my-0 mx-[auto] py-0 px-[20px]">
        <div className="bg-[#ddd] z-[100] sticky top-[64px] py-[10px] px-[0] my-[20px] mx-[0]">
          <input
            autoFocus
            type="text"
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
            placeholder="Procurar produto"
            className="w-full py-[5px] px-[10px] rounded-[5px] text-[1.4rem]"
          />
        </div>

        {!isLoading && phrase !== "" && products.length === 0 && (
          <h1 className="text-gray-900 text-xl font-bold">
            Nenhum produto com o nome <strong>{phrase}</strong>
          </h1>
        )}
        {isLoading && <Spinner fullWidth={true} />}
        {!isLoading && products.length > 0 && (
          <ProductsGrid products={products} />
        )}
      </div>
    </>
  );
}
