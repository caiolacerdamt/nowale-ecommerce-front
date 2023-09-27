import { useContext, useEffect, useRef } from "react";
import { CartContext } from "./CartContext";

export default function FlyingButton(props) {
  const { addProduct } = useContext(CartContext);
  const imgRef = useRef();
  function sendImageToCart(ev) {
    imgRef.current.style.display = "inline-block";
    imgRef.current.style.left = (ev.clientX-30) + "px";
    imgRef.current.style.top = (ev.clientY-100) + "px";
    setTimeout(() => {
      imgRef.current.style.display = "none";
    }, 1000);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      const reveal = imgRef.current?.closest("div[data-sr-id]");
      if (reveal?.style.opacity === "1") {
        reveal.style.transform = "none";
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div onClick={() => addProduct(props._id)} className="bg-transparent">
        <img
          src={props.src}
          alt=""
          ref={imgRef}
          className="hidden max-w-[60px] max-h-[60px] fixed z-[5] rounded-md animate-fly"
        />
        <button className="bg-white border border-white text-black rounded-md px-4 py-2 flex gap-2" onClick={ev => sendImageToCart(ev)} {...props} />
      </div>
    </>
  );
}
