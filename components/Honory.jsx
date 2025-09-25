import Image from "next/image";
import Pretitle from "./Pretitle";
import Button from "./Button";

const Honory = () => {
  return (
    <div className="pt-28 xl:pt-32" id="">
      <div className="container mx-auto">
        <div className="text-center max-w mx-auto xl:mb-20">
          <Pretitle className="" text="„speziell“" center />
          <h2 className="h2 mb-6 text-center">
            „Bericht: Ehrenmitglieder des Asylkreis Eppstein e.V. (Gründung
            2025)“„Bericht: Ehrenmitglieder des Asylkreis Eppstein e.V.
            (Gründung 2025)“
          </h2>
        </div>
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row items-center">
          <div className="flex-1">
            <div className="max-w-[600px]">
              <p className="mb-11">
                Im März 2014 wurde der Asylkreis Eppstein von Hilde Picard und
                Dieter Neuhaus gegründet. Die Fluchtbewegungen auf der ganzen
                Welt stellen die Menschen in Europa vor neue Herausforderungen.
                Der Asylkreis will denen helfen, deren Weg in unsere Stadt
                geführt hat. Wir wollen, dass sich die Menschen, die aus ihrer
                Heimat flüchten mussten, in ihrer neuen, für sie sehr fremden
                Umgebung wohlfühlen können. Sie sollen Vertrauen fassen und die
                Chance bekommen, sich ein neues, selbständiges Leben aufzubauen.
                Dabei möchten wir sie unterstützen.
              </p>
            </div>
          </div>
          <div className="flex-1 xl:flex xl:justify-center ml-10">
            <div className="xl:w-[900px] xl:h-[600px] relative ">
              <div className=" "></div>
              <Image
                className="rounded-lg shadow-2xl shadow-accent"
                src={"/assets/img/honory/founding_members.jpg"}
                width={870}
                height={600}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Honory;
