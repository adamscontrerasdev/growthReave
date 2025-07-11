import { Footer } from "./components";
import { Hero, SocialProof, OurServices, Benefit, Pricing } from "./sections";
import { OurProcess } from "./sections/OurProcess";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center scroll-smooth"
      style={{
        scrollBehavior: "smooth",
      }}
    >
      <Hero />
      <SocialProof />
      <OurServices />
      <OurProcess />
      <Benefit />
      <Pricing />.
      <Footer />
    </div>
  );
}
