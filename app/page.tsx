import Benefits from "@/components/Benefits";
import CallAction from "@/components/CallAction";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Presentation from "@/components/Presentation";
import Testimonials from "@/components/Testimonials";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <>
      <Intro />
      <Presentation />
      <Timeline />
      <Benefits />
      <Testimonials />
      <CallAction />
      <Contact />
    </>
  );
}


