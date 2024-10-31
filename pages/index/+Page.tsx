import Hero from "../../components/hero";
import Steps from "../../components/steps";
import ScheduleMeeting from "../../components/scheduleMeeting";
import Testimonials from "../../components/testimonials";
import Contact from "../../components/contact";
import Header from "../../components/nav/header";

export { Page };

function Page() {
  return (
    <>
      <Hero />
      <Steps />
      <ScheduleMeeting />
      <Testimonials />
      <Contact />
      <Header/>
    </>
  );
}
