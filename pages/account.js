import { RevealWrapper } from "next-reveal";
import Header from "./components/Header";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Input from "./components/Input";
import axios from "axios";
import Spinner from "./components/Spinner";
import ProductBox from "./components/ProductBox";
import Tabs from "./components/Tabs";
import SingleOrder from "./components/SingleOrder";
import Footer from "./components/Footer";

export default function AccountPage() {
  const { data: session } = useSession();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [country, setCountry] = useState("");
  const [addressLoaded, setAddressLoaded] = useState(true);
  const [wishlistLoaded, setWishlistLoaded] = useState(true);
  const [ordersLoaded, setOrdersLoaded] = useState(true);
  const [wishedProducts, setWishedProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("Favoritos");
  const [orders, setOrders] = useState([]);
  async function logout() {
    await signOut({
      callbackUrl: process.env.NEXT_PUBLIC_URL,
    });
  }

  async function login() {
    await signIn("google", {
      callbackUrl: process.env.NEXT_PUBLIC_URL,
    });
  }

  async function saveAddress() {
    const data = { name, email, city, streetAddress, postalCode, country };
    await axios.put("/api/address", data);
  }

  useEffect(() => {
    if (!session) {
      return;
    }
    setAddressLoaded(false);
    setWishlistLoaded(false);
    setOrdersLoaded(false);
    fetchAddres();
    fetchWishlist();
    fetchOrders();
  }, [session]);

  async function fetchAddres() {
    await axios.get("/api/address").then((response) => {
      setName(response.data.name);
      setEmail(response.data.email);
      setCity(response.data.city);
      setPostalCode(response.data.postalCode);
      setStreetAddress(response.data.streetAddress);
      setCountry(response.data.country);
      setAddressLoaded(true);
    });
  }

  async function fetchWishlist() {
    await axios.get("/api/wishlist").then((response) => {
      setWishedProducts(response.data.map((wp) => wp.product));
      setWishlistLoaded(true);
    });
  }

  async function fetchOrders() {
    await axios.get("/api/orders").then((response) => {
      setOrders(response.data);
      setOrdersLoaded(true);
    });
  }

 

  function productRemovedFromWishlist(idToRemove) {
    setWishedProducts((products) => {
      return [...products.filter((p) => p?._id.toString() !== idToRemove)];
    });
  }

  return (
    <>
      <Header />
      <div className="max-w-[1200px] min-h-[600px] my-0 mx-[auto] px-[20px]">
        <h2 className="text-2xl font-semibold my-6">Sua Conta</h2>
        <div className="grid grid-cols-1 min-[768px]:grid-cols-2 gap-6 ">
          <div className="order-2">
            <RevealWrapper delay={0}>
              <div className="bg-white mb-6 rounded-[10px] p-[30px]">
                <Tabs
                  tabs={["Compras", "Favoritos"]}
                  active={activeTab}
                  onChange={setActiveTab}
                />
                {activeTab === "Compras" && (
                  <>
                    {!ordersLoaded && <Spinner />}

                    {ordersLoaded && (
                      <div>
                        {orders.length === 0 && (
                          <p>Faça login para ver suas compras.</p>
                        )}
                        {orders.length > 0 &&
                          orders.map((o) => <SingleOrder key={o._id} {...o} />)}
                      </div>
                    )}
                  </>
                )}
                {activeTab === "Favoritos" && (
                  <>
                    {!wishlistLoaded && <Spinner />}
                    {wishlistLoaded && (
                      <>
                        <div className="grid grid-cols-1 min-[768px]:grid-cols-2 gap-4">
                          {wishlistLoaded &&
                            wishedProducts.length > 0 &&
                            wishedProducts.map((wp) => (
                              <ProductBox
                                key={wp}
                                {...wp}
                                wished={true}
                                onRemoveFromWishList={
                                  productRemovedFromWishlist
                                }
                              />
                            ))}
                        </div>
                        {wishedProducts.length === 0 && (
                          <>
                            {session && (
                              <p className="m-3">Sua lista está vazia.</p>
                            )}
                            {!session && (
                              <p className="m-3">
                                Faça login para adicionar produtos à sua lista.
                              </p>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </div>
            </RevealWrapper>
          </div>

          <div>
            <RevealWrapper delay={100}>
              <div className="bg-white mb-6 rounded-[10px] p-[30px]">
                <h1 className="text-xl text-gray-900 font-bold">
                  {session ? "Detalhes da conta" : "Login"}
                </h1>
                {!addressLoaded && <Spinner />}
                {addressLoaded && session && (
                  <>
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
                      className="bg-gray-900 w-full py-2 rounded-md text-white"
                      onClick={saveAddress}
                    >
                      Salvar
                    </button>
                  </>
                )}

                {session && (
                  <button
                    className="mt-5 bg-gray-900 text-white font-semibold py-[4px] px-3 rounded-md"
                    onClick={logout}
                  >
                    Sair
                  </button>
                )}
                {!session && (
                  <button
                    className="mt-5 bg-gray-900 text-white font-semibold py-[4px] px-3 rounded-md"
                    onClick={login}
                  >
                    Login com Google
                  </button>
                )}
              </div>
            </RevealWrapper>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
