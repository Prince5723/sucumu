import Hero from "@/components/hero";
import {WhyChooseUs} from "@/components/why-choose-us";
import {ProductSection} from "@/components/product"

export default function Home() {
  return (
    
    <>
    <div className="bg-gradient-to-b from-[#f2e9dc] to-[#e8dfd1]">
    <Hero />
    <WhyChooseUs/>
    <ProductSection/>
    </div>
    </>
  );
}
