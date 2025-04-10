import Hero from "@/components/hero";
import {WhyChooseUs} from "@/components/why-choose-us";
import {ProductSection} from "@/components/product"
import DeliveryCoverage from "@/components/delivery-coverage"

export default function Home() {
  return (
    
    <>
    <div className="bg-gradient-to-b from-[#f2e9dc] to-[#e8dfd1]">
    <Hero />
    <WhyChooseUs/>
    <ProductSection/>
    <DeliveryCoverage/>
    </div>
    </>
  );
}
