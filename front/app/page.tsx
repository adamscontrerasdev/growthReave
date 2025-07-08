import { Hero, SocialProof, OurServices, Benefit, Pricing } from "./sections";
import { OurProcess } from "./sections/OurProcess";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <SocialProof />
      <OurServices />
      <OurProcess />
      <Benefit />
      <Pricing />
    </div>
  );
}
