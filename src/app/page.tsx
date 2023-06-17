import Herosection from "@/components/Herosection";
import PasSection from "@/components/PasSection";
import Benefits from "../components/Benefits";

export default function Home() {
  return (
    <>
      <Herosection />
      <PasSection />
      <h1 className="capitalize text-3xl font-bold my-12 text-center underline lg:my-24 ">
        what will you gain.
      </h1>
      <Benefits />
    </>
  );
}
