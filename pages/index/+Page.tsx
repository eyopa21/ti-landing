import Hero from "../../components/hero";
import Steps from "../../components/steps";
import ScheduleMeeting from "../../components/scheduleMeeting";
import Testimonials from "../../components/testimonials";
import Contact from "../../components/contact";

import MobileTestimonials from "../../components/mobileTestimonails";

export { Page };

function Page() {
  return (
    <>
      <div className="">
        <Hero />
        <Steps />
        {/* <ScheduleMeeting /> */}
        <div className="hidden lg:block">
          <Testimonials />
        </div>
        <div className="block lg:hidden">
          <MobileTestimonials />
        </div>
        <Contact />
      </div>
      
    </>
  );
}
