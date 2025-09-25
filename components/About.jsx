import Image from "next/image";
import Pretitle from "./Pretitle";
import Button from "./Button";

const About = () => {
  return (
    <div className="pt-28 xl:pt-32" id="Über Uns">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
          <div className="flex-1">
            <div className="max-w-[500px]">
              <Pretitle text="Über Uns" />
              <h3 className="h3 mb-6">„Brücken bauen. Zukunft gestalten.“</h3>
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
              <div className="w-max flex flex-col text-right mb-10 items-center ">
                <Image
                  src="/assets/img/about/Gerhard_Engler_Sign.png"
                  className="bg-transparent"
                  width={300}
                  height={70}
                  alt=""
                />
                {/* <p>Management</p> */} <Button text="E-mail" />
              </div>
            </div>
          </div>
          <div className="flex-1 xl:flex xl:justify-center ml-10">
            <div className="xl:w-[900px] xl:h-[600px] relative ">
              <div className=" "></div>
              <Image
                className="rounded-lg ring-8 ring-accent shadow-2xl shadow-accent"
                src={"/assets/img/about/Asyl_bg.jpg"}
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

export default About;
