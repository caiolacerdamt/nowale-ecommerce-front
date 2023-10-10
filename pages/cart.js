import Header from "./components/Header";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./components/CartContext";
import axios from "axios";
import Input from "./components/Input";
import Link from "next/link";
import { RevealWrapper } from "next-reveal";
import { useSession } from "next-auth/react";
import Footer from "./components/Footer";
import { FaSpinner } from "react-icons/fa";

export default function CartPage() {
  const { cartProducts, addProduct, removeProduct, clearCart } =
    useContext(CartContext);
  const { data: session } = useSession();
  const [isSuccess, setIsSuccess] = useState(false);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [country, setCountry] = useState("");
  const [shippingFee, setShippingFee] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (cartProducts.length > 0) {
        await axios
          .post("/api/cart", { ids: cartProducts })
          .then((response) => {
            setProducts(response.data);
          });
      } else {
        setProducts([]);
      }
    };
    fetchData();
  }, [cartProducts]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (window?.location.href.includes("success")) {
      setIsSuccess(true);
      clearCart();
    }
    fetchShippingFee();
  }, []);

  async function fetchShippingFee() {
    try {
      await axios.get("/api/settings?name=shippingFee").then((res) => {
        setShippingFee(res.data?.value);
      });
    } catch (error) {
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    if (!session) {
      return;
    }
    fetchAddress();
  }, [session]);

  async function fetchAddress() {
    try {
      await axios.get("/api/address").then((response) => {
        setName(response.data.name);
        setEmail(response.data.email);
        setCity(response.data.city);
        setPostalCode(response.data.postalCode);
        setStreetAddress(response.data.streetAddress);
        setCountry(response.data.country);
      });
    } catch (error) {
      console.log(error.response.data);
    }
  }

  async function moreOfThisProduct(id) {
    await addProduct(id);
  }

  function lessOfThisProdut(id) {
    removeProduct(id);
    clearCart();
  }

  const address = {
    name: name,
    email: email,
    city: city,
    postalCode: postalCode,
    streetAddress: streetAddress,
    country: country,
    cartProducts: cartProducts,
  };

  async function goToPayment() {
    try {
      setIsLoading(true);
      const response = await axios.post("/api/checkout", address, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.data.url) {
        window.location = response.data.url;
      }
    } catch (error) {
      console.log(error.response.data);
    } finally {
      setIsLoading(false);
    }
  }

  let productsTotal = 0;

  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    productsTotal += price;
  }

  if (isSuccess) {
    return (
      <>
        <Header />
        <div className="max-w-[1200px] mx-[auto] p-4 rounded-md bg-gray-200 mt-[40px]">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-gray-950">
              Obrigado pela preferência!
            </h1>
            <p className="text-gray-600 font-semibold">
              Nós enviaremos um email quando seu pedido for enviado!
            </p>
            <Link
              href={"/"}
              onClick={clearCart}
              className="bg-gray-900 text-xl font-bold text-white p-4 rounded-md mt-4"
            >
              Voltar para o ínicio
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="max-w-[1200px] min-h-[600px] mb-8 mx-[auto] py-0 px-[20px]">
        <div className="grid grid-cols-1 gap-[40px] mt-[40px] min-[768px]:grid-cols-2">
          <RevealWrapper delay={0}>
            <div className="bg-white rounded-[10px] p-4">
              <h2 className="text-2xl font-extrabold my-4">Carrinho</h2>
              {!cartProducts?.length && <div>Seu carrinho está vazio</div>}
              {products.length > 0 && (
                <table className="w-full">
                  <thead className="text-left uppercase text-gray-900 font-bold text-[.7rem]">
                    <tr>
                      <td className="border-t border-solid border-gray-900">
                        Produto
                      </td>
                      <td className="border-t border-solid border-gray-900">
                        Quantidade
                      </td>
                      <td className="text-right border-t border-solid border-gray-900">
                        Preço
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product._id}>
                        <td className="px-[10px] py-0">
                          <div className="w-[150px] h-[150px] p-[10px] flex items-center justify-center rounded-[10px]">
                            <img
                              className="max-w-[130px] max-h-[130px]"
                              src={product.images[0]}
                              alt="Imagem do Produto"
                            />
                          </div>
                          <p className="font-bold text-lg">{product.title}</p>
                        </td>
                        <td>
                          <button
                            className="bg-gray-600 px-2 text-white rounded-sm"
                            onClick={() => lessOfThisProdut(product._id)}
                          >
                            -
                          </button>
                          <span className="py-0 px-2">
                            {
                              cartProducts.filter((id) => id === product._id)
                                .length
                            }
                          </span>
                          <button
                            className="bg-gray-600 px-2 text-white rounded-sm"
                            onClick={() => moreOfThisProduct(product._id)}
                          >
                            +
                          </button>
                        </td>
                        <td className="text-right">
                          R$
                          {cartProducts.filter((id) => id === product._id)
                            .length * product.price}
                        </td>
                      </tr>
                    ))}
                    <tr className="">
                      <td colSpan={2}>Produtos</td>
                      <td className="text-xl py-3 text-right">
                        R${productsTotal}
                      </td>
                    </tr>
                    {shippingFee > 0 && (
                      <tr className="">
                        <td colSpan={2}>Frete</td>
                        <td className="text-xl py-3 text-right">
                          {" "}
                          R${shippingFee}
                        </td>
                      </tr>
                    )}

                    <tr className="font-bold">
                      <td colSpan={2}>Total</td>
                      <td className="text-xl py-3 text-right">
                        ${productsTotal + parseInt(shippingFee || 0)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>
          </RevealWrapper>

          {!!cartProducts?.length && (
            <RevealWrapper delay={200}>
              <div className="bg-white rounded-[10px] p-[30px]">
                <h2>Informações da compra</h2>
                <Input
                  type="text"
                  placeholder="Nome"
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Email"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="flex gap-[5px]">
                  <Input
                    type="text"
                    placeholder="Cidade"
                    value={city}
                    name="city"
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="CEP"
                    value={postalCode}
                    name="postalCode"
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>
                <Input
                  type="text"
                  placeholder="Número"
                  value={streetAddress}
                  name="streetAddress"
                  onChange={(e) => setStreetAddress(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="País"
                  value={country}
                  name="country"
                  onChange={(e) => setCountry(e.target.value)}
                />
                <button
                  className="bg-gray-900 w-full py-2 rounded-md text-white mx-auto"
                  onClick={goToPayment}
                >
                  {isLoading ? (
                    <FaSpinner className="animate-spin text-emerald-400 w-full h-6" />
                  ) : (
                    "Continuar para o pagamento"
                  )}
                </button>
              </div>
            </RevealWrapper>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
