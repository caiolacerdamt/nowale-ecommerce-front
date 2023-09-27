export default function SingleOrder({ line_items, createdAt, ...rest }) {
  return (
    <div className="flex items-center gap-5 my-[10px] mx-0 py-[10px] py-0 border-b-2 border-b-[#ddd]">
      <div>
        <time className="text-base text-[#779] font-bold">
          {new Date(createdAt).toLocaleString()}
        </time>
        <div className="text-[#999] text-[.8rem] leading-[.8rem] mt-[5px]">
            {rest.name}<br />
            {rest.email} <br/>
            {rest.streetAddress} <br/> 
            {rest.postalCode} {rest.city} - {rest.country}
        </div>
      </div>
      <div>
        {line_items.map((item) => (
          <div key={item._id}>
            <span className="text-[#aaa]">{item.quantity}x</span>{" "}
            {item.price_data.product_data.name}
          </div>
        ))}
      </div>
    </div>
  );
}
