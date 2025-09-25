import { RiChat1Line, RiMapPin2Line, RiSmartphoneLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineGroupAdd } from "react-icons/md";
import Link from "next/link";
import Socials from "./Socials";
import Form from "./Form";

const Contact = () => {
  return (
    <section className="pt-16 xl:pt-32" id="Kontakt">
      <div className="container mx-auto">
        <div className="w-full h-full xl:h-[900px] shadow-lg shadow-accent rounded p-4 xl:p-8 xl:px-[90px] xl:py-[48px] border-t-4 border-accent">
          <div className="flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">
            <div className="w-full xl:max-w-[480px] xl:pr-[70px] xl:border-r xl:border-border/40 h-[740px]">
              <h4 className="text-[26px] font-primary font-bold mb-6">
                Kontaktieren Sie uns
              </h4>
              <p className="mb-9">
                Haben Sie Fragen? Melden Sie sich gerne bei uns!
              </p>
              <div className="flex flex-col gap-[40px] mb-16">
                <div className="flex items-start gap-[20px]">
                  <div>
                    <HiOutlineMail className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      E-Mail
                    </h5>
                    <p className="font-semibold text-primary">
                      info@asylkreis-eppstein.de
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiMapPin2Line className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Adresse
                    </h5>
                    <p className="font-semibold text-primary">
                      Asylkreis Eppstein e.V., Waldstraße 6, 65817 Eppstein.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-[20px]">
                  <div>
                    <MdOutlineGroupAdd className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Mitglied werden
                    </h5>
                    <p className="mb-4">
                      Wer uns mit seiner Mitgliedschaft im Verein unterstützen
                      möchte, kann hier die Beitrittserklärung ausdrucken,
                      ausfüllen und an info@asylkreis-eppstein.de oder an
                      Asylkreis Eppstein e.V., Waldstr. 6, 65817 Eppstein
                      senden.
                    </p>
                    <p className="font-semibold text-primary">
                      <a
                        href="/assets/pdf/Beitrittserklaerung-Asylkreis-Eppstein-SEPA-Lastschriftmandat.pdf"
                        download
                        className="text-blue-700 hover:underline font-bold py-2 pr-2"
                      >
                        Beitrittserklärung Asylkreis Eppstein + SEPA
                      </a>
                      und
                      <a
                        href="/assets/pdf/Beitragsordnung-des-Vereins.pdf"
                        download
                        className="text-blue-700 hover:underline font-bold py-2 pl-2"
                      >
                        die Beitragsordnung
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <Socials
                containerStyles="flex gap-[50px]"
                iconStyles="text-primary text-[24px]"
              />
            </div>
            <div className="flex-1">
              <h2 className="h2 mb-3">Schreiben Sie uns</h2>
              <p className="mb-9">
                Sie möchten Informationen über den Asylkreis, unsere
                Veranstaltungen oder wie Sie mitwirken können – schreiben Sie
                uns!
              </p>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
