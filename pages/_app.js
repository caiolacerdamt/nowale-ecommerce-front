import "@/styles/globals.css";
import { CartContextProvider } from "./components/CartContext";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <CartContextProvider session={session}>
        <SessionProvider>
          <Component {...pageProps} />
        </SessionProvider>
      </CartContextProvider>
    </>
  );
}

