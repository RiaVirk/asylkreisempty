"use client";

import Pretitle from "./Pretitle";
import Slider from "./Slider";

const Aktuelles = () => {
  return (
    <section className="pt-16 xl:pt-32" id="aktuelles">
      <div className="container mx-auto">
        <div className="flex flex-col relative justify-center items-center">
          <div className="flex-1 max-w-[800px] xl:pt-[54px] mb-12 xl:mb-0 mr-6">
            <Pretitle
              className=""
              text="„Veranstaltungen & Neuigkeiten - für ein buntes Miteinander.“"
              center
            />
            <h2 className="h2 mb-6 text-center">
              Neueste Nachrichten und aktuelle Veranstaltungen - bleiben Sie auf
              dem Laufenden.
            </h2>
          </div>

          <div className="flex-1 flex flex-col xl:justify-end w-full xl:h-[780px]">
            <Slider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aktuelles;
