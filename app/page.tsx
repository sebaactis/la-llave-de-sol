import Benefits from "@/components/Benefits";
import CallAction from "@/components/CallAction";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Presentation from "@/components/Presentation";
import Testimonials from "@/components/Testimonials";
export default function Home() {
  return (
    <>
      <Intro />
      <Presentation />
      <Benefits />
      <Testimonials />
      <CallAction />
      <Contact />
    </>
  );
}
