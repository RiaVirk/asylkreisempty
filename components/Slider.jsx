"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import News1 from "./news/News1";
import Modal from "./Modal";
import { useState } from "react";
import Image from "next/image";
import SliderBtns from "./SliderBtns";

const Slider = () => {
  const [showModal, setShowModal] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false); // State for button className

  return (
    <div>
      <Modal
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
          setIsButtonActive(false); // Reset button class when closing modal
        }}
      >
        <News1 />
      </Modal>

      {/* Conditionally render Swiper when showModal is false */}
      {!showModal && (
        <Swiper
          className="bg-white w-full max-w-[1200px] h-full rounded-lg shadow-2xl shadow-accent"
          spaceBetween={10}
          slidesPerView={1}
        >
          {/* News 1 */}
          <SwiperSlide className="">
            <div className="px-12 md:pl-[90px] flex flex-col sm:flex-row items-center gap-9 h-full pt-6">
              <div className="relative xl:flex w-[400px] h-[300px]">
                <Image
                  src="/assets/img/aktuelles/News_1.jpg"
                  fill
                  className="object-contain"
                  quality={100}
                  alt=""
                />
              </div>
              <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
                <h3 className="h3 font-primary font-bold text-primary">
                  Fest der Vereine auf Burg Eppstein 2025
                </h3>
                <p className="font-primary text-primary text-[10px] lg:text-base pb-10">
                  Auch dieses Jahr waren wir mit einem Stand dabei. Timnit und
                  Dejen demonstrierten wie man in Eritrea und Äthiopien festlich
                  Habesha Kaffee kocht und boten Kostproben an. Alla aus der
                  Ukraine bastelten mit den kleinen und großen BesucherInnen
                  Püppchen und Orden. Besonders hat uns gefreut, dass viele
                  Flüchtlinge unter den Besuchern waren. Es hat allen mächtig
                  Spaß gemacht.
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* News 2 */}
          <SwiperSlide>
            <div className="px-12 md:pl-[90px] flex flex-col sm:flex-row items-center gap-9 h-full pt-6">
              <div className="relative xl:flex w-[400px] h-[250px]">
                <Image
                  src="/assets/img/aktuelles/News_2.jpg"
                  fill
                  className="object-contain"
                  quality={100}
                  alt=""
                />
              </div>
              <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
                <h3 className="h3 font-primary font-bold text-primary">
                  Kundgebung für Demokratie
                </h3>
                <p className="font-primary text-primary text-[10px] lg:text-base pb-10">
                  Der Asylkreis veranstaltete am 15.02.2025 um 11 Uhr eine
                  Kundgebung „Für Demokratie“ auf dem Rathausparkplatz neben dem
                  Rathaus, Hauptstr. 99 in Eppstein-Vockenhausen. Es gab
                  Redebeiträge vom Asylkreis, von der
                  Stadtverordnetenvorsteherin, von den Kirchen und Schulen. Wir
                  setzten ein deutliches Zeichen für Demokratie und Zusammenhalt
                  in der Gesellschaft. Unsere Pressemitteilung: Kundgebung für
                  Demokratie und Bericht der Eppsteiner Zeitung
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* News 3 */}
          <SwiperSlide>
            <div className="px-12 md:pl-[90px] flex flex-col sm:flex-row items-center gap-9 h-full pt-6">
              <div className="relative xl:flex w-[300px] h-[250px]">
                {/* <Image
                  src=""
                  fill
                  className="object-contain"
                  quality={100}
                  alt=""
                /> */}
              </div>
              <div className="flex-1 xl:max-w-[640px] flex flex-col gap-2">
                <h3 className="h3 font-primary font-bold text-primary">
                  Arbeit und Ausbildung
                </h3>
                <p className=" pb-12 whitespace-pre-line font-primary text-primary text-[10px] lg:text-base">
                  Ein neu gegründetes Team unterstützt Flüchtlinge bei der
                  Vermittlung von Ausbildung und Arbeit sowie bei den
                  vorbereitenden Schritten auf dem Weg dorthin. Das Angebot
                  steht für Kandidat*innen bereit, die bereits mindestens das
                  Sprachniveau A2 in Deutsch, besser noch B1, jeweils mit
                  Abschluss erreicht haben und eine Arbeitserlaubnis besitzen.
                  Uwe Kalz übernimmt die Koordination und kann für Fragen
                  kontaktiert werden: uwe.kalz@asylkreis-eppstein.com Hier der
                  Flyer zum Download: Hilfsangebot Ausbildung und Arbeit.
                  <br></br>Im Januar 2025 veranstaltete das Team für die
                  UkrainerInnen in der Unterkunft in der Königsteiner Straße in
                  Elhalten und weiteren Interessierten eine erste
                  Infoveranstaltung. Sie boten Hilfestellung bei Jobsuche,
                  Bewerbung, Lebenslauf verfassen etc. Es kamen 11 interessierte
                  Personen. Eppsteiner Zeitung berichtet
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* News 4 */}
          <SwiperSlide>
            <div className="px-12 md:pl-[90px] flex flex-col sm:flex-row items-center gap-9 h-full pt-6">
              <div className="relative xl:flex w-[400px] h-[350px]">
                <Image
                  src="/assets/img/aktuelles/News_3.jpg"
                  fill
                  className="object-contain"
                  quality={100}
                  alt=""
                />
              </div>
              <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
                <h3 className="h3 font-primary font-bold text-primary">
                  Unser MAGAZIN
                </h3>
                <p className=" pb-12 whitespace-pre-line font-primary text-primary text-[10px] lg:text-base">
                  Wer mehr über das Engagement im Asylkreis erfahren möchte,
                  kann sich hier unsere Broschüre anschauen. Wir lassen
                  Flüchtlinge und Helfer zu Wort kommen, zeigen auf wie
                  schwierig der Familiennachzug oder die Erlangung einer
                  Niederlassungserlaubnis sein kann. Aber auch wie bereichernd
                  es ist, helfen zu können. Wer bei uns mitmachen möchte,
                  erfährt wie er sich einbringen könnte. Hier ist die Broschüre
                  zum download: Asylkreis Eppstein Magazin
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* News 5 */}
          <SwiperSlide>
            <div className="px-12 md:pl-[30px] flex flex-col sm:flex-row items-center gap-9 h-full pt-6">
              <div className="relative xl:flex w-[400px] h-[300px]">
                <Image
                  src="/assets/img/aktuelles/News_4.jpg"
                  fill
                  className="object-contain"
                  quality={100}
                  alt=""
                />
              </div>
              <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
                <h3 className="h3 font-primary font-bold text-primary">
                  Ostereiersuche 2025
                </h3>
                <p className=" pb-12 whitespace-pre-line font-primary text-primary text-[10px] lg:text-base">
                  Dieses Jahr fand die Ostereiersuche für die Kinder, die in der
                  Gemeinschaftsunterkunft in Vockenhausen wohnen, auf privatem
                  Gelände in einem schönen großen Garten statt, der viele
                  Möglichkeiten zum Verstecken von Schokoladeneiern, Osterhasen
                  und Schoko-Lollies bot. Aber es wurden auch weitere Kleinteile
                  versteckt, z.B. kleine Malsets oder Ostereier-Farbsets. Die
                  Kinder hatten sehr viel Spaß und haben schnell viele
                  Süßigkeiten gefunden.
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* News 6 */}
          <SwiperSlide>
            <div className="px-12 md:pl-[90px] flex flex-col sm:flex-row items-center gap-9 h-full pt-14">
              <div className="relative xl:flex w-[400px] h-[350px]">
                <Image
                  src="/assets/img/aktuelles/News_5.jpg"
                  fill
                  className="object-contain"
                  quality={100}
                  alt=""
                />
              </div>
              <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
                <h3 className="h3 font-primary font-bold text-primary">
                  Kochen International in den Osterferien 2025
                </h3>
                <p className=" pb-12 whitespace-pre-line font-primary text-primary text-[10px] lg:text-base">
                  DAm 08.04.2025 fand die Aktion “ Kochen International in der
                  Schulküche der FVSS statt. In Kooperation zwischen der
                  Jugendarbeit Eppstein sowie dem Asylkreis Eppstein e.V. wurde
                  mit 14 Kindern und Jugendlichen im Alter von 10-15 Jahren ein
                  3-Gänge-Menü gekocht.
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* News 7 */}
          <SwiperSlide>
            <div className="px-12 md:pl-[30px] flex flex-col sm:flex-row items-center gap-9 h-full pt-12">
              <div className="relative xl:flex w-[400px] h-[300px]">
                <Image
                  src="/assets/img/aktuelles/News_6.jpg"
                  fill
                  className="object-contain"
                  quality={100}
                  alt=""
                />
              </div>
              <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
                <h3 className="h3 font-primary font-bold text-primary">
                  Auf dem Weihnachtsmarkt !
                </h3>
                <p className=" pb-12 whitespace-pre-line font-primary text-primary text-[10px] lg:text-base">
                  Lebhaft und schön war es am 14. und 15.12.2024 auf dem
                  Eppsteiner Weihnachtsmarkt. Wir präsentierten
                  Selbstgebasteltes, Plätzchen, Mistelzweige, Hoodies, Shirts
                  und mehr. Außerdem gibt es einen alkoholfreien, leckeren
                  „Heißen Engel Virginia“ aus den feinsten Zutaten. Wir freuten
                  uns über viele gut gelaunte BesucherInnen.
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* News 8 */}
          <SwiperSlide>
            <div className="px-12 md:pl-[30px] flex flex-col sm:flex-row items-center gap-9 h-full pt-12">
              <div className="relative xl:flex w-[400px] h-[300px]">
                <Image
                  src="/assets/img/aktuelles/News_7.jpg"
                  fill
                  className="object-contain"
                  quality={100}
                  alt=""
                />
              </div>
              <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
                <h3 className="h3 font-primary font-bold text-primary">
                  Club Asyl
                </h3>
                <p className=" pb-12 whitespace-pre-line font-primary text-primary text-[10px] lg:text-base">
                  Claudia Schaffner-Kalz lud Mitglieder, Interessierte, Freunde
                  und Zugewanderte zum ersten Treffen „Club Asyl“ in die
                  Wunderbar Weite Welt am Stadtbahnhof Eppstein ein. Es ist eine
                  neue Initiative und soll Menschen ins Gespräch bringen. Dies
                  ist ihr offentlichtlich gelungen, denn es kamen 18 Personen.
                  Mobarik Virk, ein Journalist, der erst kürzlich aus Pakistan
                  fliehen musste, war dabei und fasste alles auf Englisch
                  zusammen. Club Asyl by Mobarik
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* News 9 */}
          <SwiperSlide>
            <div className="px-12 md:pl-[30px] flex flex-col sm:flex-row items-center gap-9 h-full pt-6">
              <div className="relative xl:flex w-[400px] h-[300px]">
                <Image
                  src="/assets/img/aktuelles/News_8.jpg"
                  fill
                  className="object-contain"
                  quality={100}
                  alt=""
                />
              </div>
              <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
                <h3 className="h3 font-primary font-bold text-primary">
                  10 Jahre Jahre Jubiläum im Sommer 2024
                </h3>
                <p className=" pb-12 whitespace-pre-line font-primary text-primary text-[10px] lg:text-base">
                  Alle Mitglieder des Vereins, alle ehrenamtlichen Helferinnen
                  und Helfer der Bürgerinitiative und alle, die mal dabei waren,
                  waren herzlich eingeladen mit uns zu feiern. Mit vielen Fotos,
                  einer Diashow, mitgebrachtem Fingerfood und einem Gläschen
                  Wein haben wir über gemeinsame Erlebnisse gesprochen und den
                  Gründern der Initiative, Hilde Picard und Dieter Neuhaus,
                  gedankt. Die Eppsteiner Zeitung berichtet: 10-Jähriges
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* News 10 */}
          <SwiperSlide>
            <div className="px-12 md:pl-[30px] flex flex-col sm:flex-row items-center gap-9 h-full pt-6">
              <div className="relative xl:flex w-[400px] h-[300px]">
                <Image
                  src="/assets/img/aktuelles/News_9.jpg"
                  fill
                  className="object-contain"
                  quality={100}
                  alt=""
                />
              </div>
              <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
                <h3 className="h3 font-primary font-bold text-primary">
                  Höfefest 2024
                </h3>
                <p className=" pb-12 whitespace-pre-line font-primary text-primary text-[10px] lg:text-base">
                  Die Bestückung eines eigenen Standes beim Höfefest hat im
                  Asylkreis Tradition, wenn auch stets mit neuer Besetzung. Am
                  Ende sind wir von der überwältigenden und kreativen
                  Hilfsbereitschaft der GU Bewohner begeistert. Alle Beteiligten
                  sind wieder ein Stück zusammen gewachsen.
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* News 11 */}
          <SwiperSlide>
            <div className="px-12 md:pl-[30px] flex flex-col sm:flex-row items-center gap-9 h-full pt-6">
              <div className="relative xl:flex w-[400px] h-[300px]">
                <Image
                  src="/assets/img/aktuelles/News_10.jpg"
                  fill
                  className="object-contain"
                  quality={100}
                  alt=""
                />
              </div>
              <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
                <h3 className="h3 font-primary font-bold text-primary">
                  Sharity Veranstaltung für Frauen
                </h3>
                <p className=" pb-12 whitespace-pre-line font-primary text-primary text-[10px] lg:text-base">
                  Das 2. Sharity am Samstag (16.03.) im Blauen Saal des
                  Rathauses in Vockenhausen war wieder sehr gut besucht. Es
                  kamen ca. 50 Frauen mit Kindern, auch aus den umliegenden
                  Gemeinden. Sie fanden es toll, dass es eine solche
                  Veranstaltung vom Asylkreis Eppstein e.V. gibt. Das Schöne
                  ist, dass sich mittlerweile einige Frauen kennen und es so ein
                  großes Hallo gab. Die neuen Gesichter wurden ebenfalls
                  freundlichst begrüßt. <br />
                  <br />
                  Die Eppsteiner Zeitung berichtet: Artikel
                </p>
              </div>
            </div>
          </SwiperSlide>
          {/* News 12 */}
          <SwiperSlide>
            <div className="px-12 md:pl-[30px] flex flex-col sm:flex-row items-center gap-9 h-full pt-6">
              <div className="relative xl:flex w-[400px] h-[300px]">
                <Image
                  src="/assets/img/aktuelles/News_11.jpg"
                  fill
                  className="object-contain"
                  quality={100}
                  alt=""
                />
              </div>
              <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
                <h3 className="h3 font-primary font-bold text-primary">
                  Familiennachzug geglückt
                </h3>
                <p className=" pb-12 whitespace-pre-line font-primary text-primary text-[10px] lg:text-base">
                  Am Samstag den 01. Juli 2023 war es endlich so weit: Nach über
                  fünf Jahren konnte Filmon seine Familie am Frankfurter
                  Flughafen in die Arme schließen. Filmon stammt ebenso wie
                  seine Frau Selam aus Eritrea… <br />
                  <br />
                  Im Anhang erzählt Anja Keferstein, die schon viele Familien
                  bei der Zusammenführung unterstützt hat, wie es gelang. Der
                  legale Weg ist mühsam, aber er erspart den Betroffenen die
                  risikoreiche Flucht. Filmon’s Familie ist nach fünf Jahren
                  vereint
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Buttons */}
          <SliderBtns />
        </Swiper>
      )}
    </div>
  );
};

export default Slider;
