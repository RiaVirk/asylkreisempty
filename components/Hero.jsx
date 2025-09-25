"use client";
import Button from "./Button";
import { Link as ScrollLink } from "react-scroll";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);

  return (
    <section className="h-[77vh] relative">
      {/* Carousel for sliding background images */}
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide bg-hero bg-no-repeat bg-cover bg-center min-h-[77vh] relative">
            <div className="absolute inset-0 bg-gradient-to-l from-black/0 via-black/10 to-black/50 z-10"></div>
          </div>
          <div className="embla__slide bg-hero2 bg-no-repeat bg-cover bg-center min-h-[77vh] relative">
            <div className="absolute inset-0 bg-gradient-to-l from-black/0 via-black/10 to-black/50 z-10"></div>
          </div>
          <div className="embla__slide bg-hero3 bg-no-repeat bg-cover bg-center min-h-[77vh] relative">
            <div className="absolute inset-0 bg-gradient-to-l from-black/0 via-black/10 to-black/50 z-10"></div>
          </div>
        </div>
      </div>

      {/* Fixed text and button overlay */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto flex items-center">
          <div className="text-white text-center xl:text-left mx-auto xl:mx-0 flex flex-col items-center xl:items-start max-w-[608px]">
            <span className="text-white mb-4 h2">
              <h1 className="text-white h2">Herzlich willkommen</h1> beim
              Asylkreis Eppstein e.V.
            </span>
            <div>
              <ScrollLink to="services" smooth={true} duration={500}>
                <Button text="Hilfsangebote" />
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
