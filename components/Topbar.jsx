import { RiPhoneFill, RiMailFill } from "react-icons/ri";
import Socials from "./Socials";

const Topbar = () => {
  return (
    <section
      className="py-4 xl:h-16 xl:py-0 bg-gradient-to-t from-[#0765A1] to-[#03A7AC] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-end gap-6 ">
          {/* <div className="xl:flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary text-white flex items-center justify-center">
                <RiPhoneFill />
              </div>
              <p className="font-medium text-primary">+49 888 123-456789</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary text-white flex items-center justify-center">
                <RiMailFill />
              </div>
              <p className="font-medium text-primary">email@abc.com</p>
            </div>
          </div> */}
          <Socials
            containerStyles="flex items-center gap-8 mx-auto xl:mx-0"
            iconStyles="text-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default Topbar;
