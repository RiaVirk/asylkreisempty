"use client";
import Image from "next/image";
import Link from "next/link";
import Pretitle from "./Pretitle";
import { useState } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";

const workData = [
  {
    img: "/assets/img/work/work-1.jpg",
    name: "Freitags unter Freunden",
    more: "Weitere Informationen.",
    description:
      "Ist ein offener Treffpunkt im Familienzentrum Eppstein in der Burgstraße 18. Hier  treffen sich UkrainerInnen und alle interessierten EppsteinerInnen regelmäßig freitags von 17-19 Uhr. Dabei kann die deutsche Sprache geübt werden. Bei Kaffee und Tee wird gebastelt, erzählt und gelacht. Das Treffen wird von Alla Serhiieva geleitet, einer Ukrainerin, die seit Ausbruch des Krieges in Eppstein lebt. Alle EppsteinerInnen mit oder ohne Fluchtgeschichte sind willkommen. Informationen findet man auch in den Social Media Kanälen instagram und facebook.",
    href: "",
  },
  {
    img: "/assets/img/work/work-2.jpg",
    name: "Montagstreff",
    more: "Weitere Informationen.",
    description:
      "Unser Montagstreff im Erdgeschoss der Gemeinschaftsunterkunft, Neugasse 7, Bremthal ist ein Angebot für die Bewohner der Gemeinschaftsunterkunft. Die Aktivitäten werden an den Bedarf der Bewohner angepasst. Wir spielen, unterstützen bei Behördenbriefen und üben die deutsche Sprache. Ein idealer Einstieg für Menschen, die uns und unsere Arbeit kennenlernen wollen. Ansprechperson ist elisabeth.frake@asylkreis-eppstein.de",
    href: "",
  },
  {
    img: "/assets/img/work/work-3.jpg",
    name: "Fahrradwerkstatt",
    more: "Weitere Informationen.",
    description: (
      <div>
        "FahrradwerkstattIm April 2017 wurde die Fahrradwerkstatt des
        Asylkreises Eppstein eröffnet.Aufbau und Einrichtung wurden vom Bund
        großzügig gefördert. Das Team nimmt Fahrradspenden entgegen oder holt
        Fahrräder ab. Danach wird entsprechend der gesetzlichen Anforderungen
        des Straßenverkehrs repariert. Viele Geflüchtete konnten bereits ein
        Fahrrad gegen Zahlung eines symbolischen Preises in Empfang nehmen.
        Geflüchtete sind jederzeit willkommen mitzuhelfen, ihre Fahrräder zur
        Reparatur zu bringen oder zu lernen wie sie sie eigenständig reparieren
        könnenZu finden ist die Fahrradwerkstatt in der Gemeinschaftsunterkunft
        “Schützenhof”, Neugasse 7 in Bremthal.Ansprechpartner im Asylkreis sind
        Thomas Hey und Bodo Mensing. Die Öffnungszeiten sind montags von 14 bis
        17 Uhr.Kontakt: fahrradwerkstatt@asylkreis-eppstein.de <br />
        <br />
        Flyer Fahrradwerkstatt"
      </div>
    ),

    href: "",
  },
  {
    img: "/assets/img/work/work-4.jpg",
    name: "Fussball und andere Sportarten",
    more: "Weitere Informationen.",
    description:
      "Fussball und andere SportartenGeflüchtete sind in den Sportvereinen Eppsteins willkommen.  Die ganze Bandbreite der Angebote steht ihnen offen.Der ehrenamtliche und zertifizierte Sportcoach Samuel Zerai Embaye ist Bindeglied zwischen den Vereinen und den Geflüchteten. Er informiert die Flüchtlinge über Sportangebote und vermittelt den Kontakt zu den örtlichen Sportvereinen.Kontakt: samuel.zerai@asylkreis-eppstein.de",
    href: "",
  },
];

const WorkItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="w-full h-[492px] flex-1 relative overflow-hidden group flex justify-center shadow-md shadow-accent">
      <Image
        src={item.img}
        fill
        className="object-cover"
        alt={item.name}
        quality={100}
      />
      <div className="w-[90%] h-[84px] bg-primary/60 absolute bottom-4 flex justify-between items-center text-white md:translate-y-[108px] md:group-hover:translate-y-0 transition-all duration-700">
        <div className="pl-8">
          <h4 className="text-white font-primary font-semibold tracking-[1px] uppercase">
            {item.name}
          </h4>
          <div className="flex items-center gap-1">
            <RiCheckboxCircleFill className="text-accent text-xl" />
            <button onClick={handleClickOpen} className="hover:underline">
              {item.more}
            </button>
          </div>
        </div>
        <Button
          // href={item.href}
          onClick={handleClickOpen}
          className="w-[44px] xl:w-[60px] xl:h-[60px] h-[44px] bg-white text-primary text-2xl flex justify-center items-center absolute right-3"
        >
          <RiArrowRightUpLine className="text-white text-3xl transition-all duration-700 hover:rotate-45" />
        </Button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{item.name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {item.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions className="text-red-800">
          <Button onClick={handleClose} autoFocus className="text-red-950">
            schließen
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const Work = () => {
  return (
    <div className="pt-16 xl:pt-32" id="projects">
      <div className="container mx-auto">
        <div className="text-center max-w-[540px] mx-auto xl:mb-20">
          <Pretitle text="„Begegnen. Erleben. Zusammenwachsen.“" center />
          <h2 className="h2 mb-3">Freizeit und Begegnungen</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 ">
        {workData.map((item, index) => (
          <WorkItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Work;
