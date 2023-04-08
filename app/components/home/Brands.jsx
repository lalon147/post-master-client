import Image from "next/image";
import Layout from "../Layout";



const brands = [
  { name: "Brand 1", logo: "/images/commercial_works.webp" },
  { name: "Brand 2", logo: "/images/unilever.webp" },
  { name: "Brand 3", logo: "/images/safety_kleen.webp" },
  { name: "Brand 4", logo: "/images/griffin.webp" },
  { name: "Brand 5", logo: "/images/gallager.webp" },
  { name: "Brand 6", logo: "/images/hardies.webp" },
  { name: "Brand 7", logo: "/images/clearesult.webp" },
  { name: "Brand 8", logo: "/images/telgian.webp" },
  { name: "Brand 9", logo: "/images/southern_star.webp" },
  { name: "Brand 10", logo: "/images/eldum_rett.webp" }
];

export default function Brands() {
  return (
    <Layout>
      <div className="container mx-auto py-20">
        <h1 className="text-3xl font-bold mb-10 text-center capitalize">Proudly serving customers of all sizes</h1>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5">
          {brands.map((brand) => (
            <div className="shadow-lg p-4 bg-rgba-(255,255,255,.7) flex justify-center items-center" key={brand.name}>
              <Image width={100} height={80} src={brand.logo} alt={brand.name} className="max-w-[156px] max-h-28 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}