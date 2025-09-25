"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Button from "./Button";

import { PiHandshakeFill } from "react-icons/pi";
import { FaPeopleGroup, FaComputer } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { MdMarkEmailUnread, MdHealthAndSafety } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaHome, FaBookReader } from "react-icons/fa";

import Pretitle from "./Pretitle";

const serviceData = [
  {
    name: "Patenschaften",
    icon: <PiHandshakeFill />,
    title: "Patenschaften",
    description: (
      <div>
        Koordination: Gerhard Engler <br />
        <br />
        Paten begleiten Asylbewerber oder Familien von der ersten Begegnung bis
        zu ihrer Anerkennung und Einzug in eine eigene Wohnung. Familien werden
        idealerweise von zwei Paten, sog. Tandems betreut. Wer Pate werden
        möchte oder beim nächsten Patentreffen dabei sein möchte, kann sich
        über&nbsp;
        <a
          className="font-bold"
          href="mailto:gerhard.engler@asylkreis-eppstein.de"
        >
          gerhard.engler@asylkreis-eppstein.de&nbsp;
        </a>
        informieren und hier die kurze Zusammenfassung des letzten Patentreffens
        lesen :&nbsp;
        <a className="font-bold" href="">
          Protokoll Patentreffen vom 7.12.2024.
        </a>
      </div>
    ),
    serviceList: [
      "Unterstützung von der ersten Begegnung bis zur eigenen Wohnung",
      "Hilfe bei der Integration",
      "Gemeinsame Freizeitaktivitäten",
    ],
    thumbs: [{ url: "/assets/img/services/Gerhard_Profile.jpg" }],
  },
  // {
  //   name: "Unterricht",
  //   icon: <GiTeacher />,
  //   title: "Unterricht",
  //   description: (
  //     <div>
  //       Koordination: z.Zt. nicht besetzt <br />
  //       Die Sprache ist der Schlüssel zur Integration. Engagierte
  //       MitgliederInnen geben Schülerinnen und Schülern Nachhilfeunterricht oder
  //       unterstützen Flüchtlinge beim Deutschlernen. Ein Tutor leitet
  //       Flüchtlinge am Laptop an, mit dem kostenlosen Lernportal der vhs Deutsch
  //       zu lernen.&nbsp;
  //       <a className="font-bold" href="http://vhs-lernportal.de">
  //         http://vhs-lernportal.de.
  //       </a>
  //       &nbsp; Wenn Sie sich in diesem Bereich engagieren möchten, schreiben Sie
  //       uns eine Email an&nbsp;
  //       <a
  //         className="font-bold"
  //         href="mailto:volker.pottmann@asylkreis-eppstein.de"
  //       >
  //         volker.pottmann@asylkreis-eppstein.de&nbsp;
  //       </a>
  //     </div>
  //   ),
  //   serviceList: [
  //     "Language",
  //     "12345678",
  //     "************",
  //     "************",
  //     "************",
  //     "************",
  //   ],
  //   thumbs: [{ url: "/assets/img/services/Volker_Pottmann.jpg" }],
  // },
  {
    name: "Behördengruppe",
    icon: <FaPeopleGroup />,
    title: "Behördengruppe",
    description: (
      <div>
        Koordination: Elisabeth Frake-Rothert und Anja Keferstein <br />
        <br />
        Asylbewerber durchlaufen unterschiedliche Verfahren und Stufen je nach
        Herkunft oder Einzelfall. Erschwerend kommt hinzu, dass sich die
        Verfahren und Gesetze fortwährend ändern. Damit und mit der alltäglichen
        Bürokratie beschäftigt sich diese Arbeitsgruppe. Sie sind eine wertvolle
        Stütze für Paten und Geflüchtete. <br />
        Kontakt:&nbsp;
        <br />
        <a
          className="font-bold"
          href="mailto:elisabeth.frake@asylkreis-eppstein.de"
        >
          elisabeth.frake@asylkreis-eppstein.de&nbsp;
        </a>
        &nbsp;
        <br />
        <a
          className="font-bold"
          href="mailto:anja.keferstein@asylkreis-eppstein.de"
        >
          anja.keferstein@asylkreis-eppstein.de&nbsp;
        </a>
      </div>
    ),
    serviceList: [
      "Beratung und Unterstützung bei Ämter- und Behördenangelegenheiten",
      "Familiennnachzug",
      "Anerkennung",
    ],
    thumbs: [
      { url: "/assets/img/services/Elisabeth_Profile.jpg" },
      { url: "/assets/img/services/Anje_Profile.jpg" },
    ],
  },
  {
    name: "IT-Gruppe",
    icon: <FaComputer />,
    title: "IT-Gruppe",
    description: (
      <div>
        Koordination: Jürgen Schulte und Maria Virk
        <br />
        <br />
        <a
          className="font-bold"
          href="mailto:anja.keferstein@asylkreis-eppstein.de"
        >
          juergen.schulte@asylkreis-eppstein.de&nbsp;
        </a>
      </div>
    ),
    serviceList: [
      "Jürgen Schulte – Verleih und Verwaltung gebrauchter Laptops für Schule, Studium und Arbeit",
      "Maria Virk – Website Erstellung und Betreuung",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-1.jpg" },
      { url: "/assets/img/services/MV_Profile_2025.jpg" },
    ],
  },
  {
    name: "Kommunikation",
    icon: <MdMarkEmailUnread />,
    title: "Kommunikation",
    description: (
      <div>
        Koordination: Elfie Helmling und Claudia Schaffner-Kalz. <br />
        <br />
        Intern – Elfie Helmling: Informationen an die Mitglieder, Annahme von
        Angeboten für die Geflüchteten, Kommunikation mit Verbänden, Stadt
        Eppstein und dem Kreis. <br />
        <a className="font-bold" href="mailto:info@asylkreis-eppstein.de">
          info@asylkreis-eppstein.de&nbsp;
        </a>
        <br />
        <br />
        Extern – Claudia Schaffner-Kalz: Presseinformation, Ankündigung der
        Veranstaltungen, Newsletter via Presse und Social Media Kanälen.&nbsp;
        <br />
        <a className="font-bold" href="mailto:info@asylkreis-eppstein.de">
          claudiakalz@gmx.de&nbsp;
        </a>
      </div>
    ),
    serviceList: [
      "E-Mail Kommunikation",
      "Presse-Veröffentlichungen",
      "Social Media",
    ],
    thumbs: [
      { url: "/assets/img/services/Elfie_Helmling.jpg" },
      { url: "/assets/img/services/Frau_Claudia.jpg" },
    ],
  },
  {
    name: "Gesundheit",
    icon: <MdHealthAndSafety />,
    title: "Gesundheit",
    description: (
      <div>
        Koordination: Regine Pottmann <br />
        <br /> In der Fachgruppe Gesundheit engagieren sich HeferInnen, die
        einen medizinischen Beruf ausüben oder ausgeübt haben. Sie helfen
        Flüchtlingen beim Verstehen unseres Gesundheitssystems, bei der
        Verständigung mit Ärzten und bei der Korrespondenz mit den
        Krankenkassen. Kontakt:&nbsp;
        <a
          className="font-bold"
          href="mailto:regine.pottmann@asylkreis-eppstein.de"
        >
          regine.pottmann@asylkreis-eppstein.de&nbsp;
        </a>
        &nbsp; .
      </div>
    ),
    serviceList: [
      "Fragen zum Gesundheitssystem",
      "Verständigung und Korrespondenz mit Ärzten",
    ],
    thumbs: [{ url: "/assets/img/services/Regine_Pottmann.jpg" }],
  },
  {
    name: "Ausbildung und Arbeit",
    icon: <LiaChalkboardTeacherSolid />,
    title: "Ausbildung und Arbeit",
    description: (
      <div>
        Koordination: Uwe Kalz und Alfred Schäfer
        <br />
        <br />
        Das Hilfsangebot "Ausbildung und Arbeit" des Asylkreises Eppstein e.V.
        unterstützt Personen mit Migrationshintergrund aus dem Stadtgebiet
        Eppstein sich beruflich zu integrieren. Durch individuelle Beratung und
        praxisorientierte Unterstützung werden sowohl berufliche Qualifikationen
        bzw. Umorientierungen gefördert, als auch gezielt Ausbildungs- und
        Arbeitsmöglichkeiten versucht zu vermitteln. Ziel ist es, eine
        nachhaltige berufliche Perspektive zu schaffen um damit die Integration
        der Migranten:innen in die Gesellschaft zu fördern. Wir arbeiten
        vorzugsweise mit lokalen Unternehmen zusammen, sind aber auch über
        Eppsteins Grenzen hinaus aktiv, um Zugang zum Ausbildungs- und
        Arbeitsmarkt zu bekommen. Ihre Ansprechpartner zum Hilfsangebot
        „Ausbildung und Arbeit“:
        <br />
        <br />
        <a className="font-bold" href="mailto:uwe.kalz@asylkreis-eppstein.de">
          uwe.kalz@asylkreis-eppstein.com&nbsp;
        </a>
        <br />
        <br />
        <a className="font-bold" href="mailto:a.schaefer@asylkreis-eppstein.de">
          A.Schaefer@asylkreis-eppstein.de&nbsp;
        </a>
        &nbsp;
        <br />
        <br /> Der Asylkreis e.V. hat bereits erfolgreich Hilfestellung im
        Bewerbungsprozess, unter anderem zu folgenden Fragestellungen,
        geleistet:&nbsp;
      </div>
    ),
    serviceList: [
      "Wie und wo können reelle Stellenangebote gefunden werden?",
      "Wie sind die Stellenangebote zu verstehen?",
      "Welche Bewerbungsunterlagen werden benötigt?",
      "Wie sollten die Bewerbungsunterlagen ausgearbeitet und zusammengestellt werden?",
      "Wie bereite ich mich auf ein Vorstellungsgespräch vor?",
    ],
    thumbs: [
      { url: "/assets/img/services/Uwe_Profile.jpg" },
      { url: "/assets/img/services/A_Schafer.jpg" },
    ],
  },
  {
    name: "Hausaufgabenhilfe",
    icon: <FaBookReader />,
    title: "Hausaufgabenhilfe",
    description: (
      <div>
        Koordination : Hildegard Neuhaus <br />
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident et
        nostrum consectetur asperiores facilis hic eligendi natus enim vitae
        corporis. &nbsp;
        <a
          className="font-bold"
          href="mailto:gerhard.engler@asylkreis-eppstein.de"
        >
          ********@asylkreis-eppstein.de&nbsp;
        </a>
      </div>
    ),
    serviceList: [
      "Regelmäßige Unterstützung der Schüler bei den Hausaufgaben",
      "Verschiedene Einrichtungen in Eppstein",
    ],
    thumbs: [{ url: "" }],
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("Patenschaften");
  return (
    <section className="pt-16 xl:pt-32" id="services">
      <div className="container mx-auto">
        <div className="text-center max-w-[540px] mx-auto mb-20">
          <Pretitle text="„Hilfe beginnt mit einem Wir.“ " center />
          <h2 className="h2 mb-3">Hilfsangebote</h2>
        </div>

        <Tabs
          defaultValue="Patenschaften"
          onValueChange={(value) => setActiveTab(value)}
          className="flex flex-col xl:flex-row w-full gap-[30px]"
        >
          <TabsList className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[30px] w-full h-full rounded-none p-0 bg-transparent xl:w-[345px] ">
            {serviceData.map((item) => {
              return (
                <TabsTrigger
                  key={item.name}
                  value={item.name}
                  className="w-full rounded-none h-[100px] flex items-center relative shadow-custom p-0 outline-none"
                >
                  <div
                    className={`w-[100px] h-[100px] flex items-center justify-center absolute left-0 ${
                      activeTab === item.name
                        ? "bg-primary text-white"
                        : "bg-accent text-white"
                    }`}
                  >
                    <div className="text-4xl">{item.icon}</div>
                  </div>
                  <div className="uppercase font-primary text-balance font-semibold tracking-[.6px] w-[100px] ml-16">
                    {item.name}
                  </div>
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="flex-1 bg-white shadow-lg shadow-accent h-full p-[30px] ">
            {serviceData.map((item) => (
              <TabsContent key={item.name} value={item.name} className="m-0">
                <div className="flex flex-col md:flex-row gap-[30px]">
                  <div className="flex md:flex-col gap-5 xl:gap-[30px]">
                    {item.thumbs.map((thumb, index) => (
                      <div
                        key={index}
                        className="relative w-[140px] xl:w-[200px] h-[140px] xl:h-[240px]"
                      >
                        <Image src={thumb.url} fill alt="" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div>
                      <h3 className="h3 mb-6">{item.title}</h3>
                      <p className="mb-10 ">{item.description}</p>
                      <ul className=" gap-4 mb-12">
                        {item.serviceList.map((service, index) => {
                          return (
                            <li
                              key={index}
                              className="flex items-center gap-6 mb-4"
                            >
                              <div className="text-accent text-2xl">■</div>
                              <div className=" font-medium text-sm text-primary">
                                {service}
                              </div>
                            </li>
                          );
                        })}
                      </ul>

                      {/* <Button text="Read More" /> */}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
