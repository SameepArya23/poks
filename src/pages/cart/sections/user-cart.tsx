import CartItem from "@/components/cards/cart-item";

export const cartProds = [
  {
    name: "MANIAC Men Oversized Shirt with Flap Pockets For Men",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQwlWswxYxwrTahKyjRCT1uzALP3j5DIJ9JTiV9fVF6OHwjsfSwgWKm1rlbxzxyLqPSx_4Xq9calPemcm2KBLJdT1EFjXBIlurqU2RbuEA&usqp=CAE",
    price: 9,
    color: "#3e64eb",
    size: "M",
    quantity: 1,
  },
  {
    name: "Leriya Fashion Textured Shirts for Men",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSSsEbgGeNfI7j8yc2cZsIDAiDjImY2IFgIbqyDuv4Kbyp8aYnHRLdTvMffi4CrSyRZfT4G7rsDah_A0UwMclHNYo8rwK4Ig9U6cqxPZ84",
    price: 12,
    color: "#c7d832",
    size: "M",
    quantity: 2,
  },
  {
    name: "Patagonia Fjord Flannel Shirt",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTxGfE9uXY6iLoNi-3MSbBdCyNpJvg6gT-t-k-EW1lOo3R0GxOFhYljUJF_y661h7TDhYEd-3OX5elPHtl7Z_JJSTdGY5Tp5waC2JmQRdwUag6j-ewPmChDmw",
    price: 10,
    color: "#dc4084",
    size: "M",
    quantity: 2,
  },
];

const UserCart = () => {
  return (
    <div className="w-full">
      {cartProds.map((item, idx) => (
        <CartItem
          key={idx}
          name={item.name}
          image={item.image}
          color={item.color}
          size={item.size}
          quantity={2}
          price={12}
        />
      ))}
    </div>
  );
};

export default UserCart;
