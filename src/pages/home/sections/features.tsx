import { Medal, ShieldCheck, Truck } from "lucide-react";

const content = [
  {
    heading: "Free shipping",
    caption:
      "Upgrade your style today and get FREE shipping on all orders! Don't miss out.",
    icon: Truck,
  },
  {
    heading: "Satisfaction Guarantee",
    caption:
      "Shop confidently with our Satisfaction Guarantee: Love it or get a refund.",
    icon: Medal,
  },
  {
    heading: "Secure Payment",
    caption: "Your security is our priority. Your payments are secure with us.",
    icon: ShieldCheck,
  },
];

const Features = () => {
  return (
    <section className="py-14 flex justify-center flex-wrap gap-20">
      {content.map((item, idx) => (
        <div
          style={{ maxWidth: "18rem" }}
          className="flex flex-col gap-2"
          key={idx}
        >
          <div className="w-10 h-10 flex justify-center items-center rounded-full bg-secondary">
            <item.icon />
          </div>
          <h1 className="text-2xl font-bold text-color-500">{item.heading}</h1>
          <p className="text-md text-color-100">{item.caption}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
