import Herosection from "@/components/Herosection";
import PasSection from "@/components/PasSection";
import Benefits from "../components/Benefits";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Herosection />
      <PasSection />
      <h1 className="capitalize text-3xl font-bold my-12 text-center underline lg:my-24 ">
        what will you gain.
      </h1>

      <Benefits />
      <h1 className="capitalize text-3xl font-bold my-12 text-center gradient lg:my-24 ">
        What Our Customers Have to Say.
      </h1>
      <Testimonials />
      <CTASection />
    </>
  );
}
