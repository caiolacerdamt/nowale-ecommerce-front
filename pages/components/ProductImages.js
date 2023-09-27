import { useState } from "react";

export default function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0]);

  return (
    <>
      <div className="flex justify-center">
        <img
          className="max-w-[100%] h-[200px]"
          src={activeImage}
          alt="Imagem do Produto"
        />
      </div>

      <div className="flex gap-[10px] flex-grow-0 mt-[10px] cursor-pointer">
        {images.map((image) => (
          <div
            active={image === activeImage}
            onClick={() => setActiveImage(image)}
            key={image._id}
            className={` flex justify-center items-center rounded-[5px] h-[60px] w-[80px] p-[5px] ${
              image === activeImage ? "border-2 border-gray-900" : "border-none opacity-50"
            }`}
          >
            <img className="max-w-[100%] max-h-[100%]" src={image} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}
