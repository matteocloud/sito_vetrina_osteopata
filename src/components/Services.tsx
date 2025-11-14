import {
  Baby,
  Bone,
  Brain,
  Dumbbell,
  HeartPulse,
  Smile,
  Stethoscope,
  StretchHorizontal
} from "lucide-react";
import Section from "./Section";
import type { ServiceItem } from "../types";

const services: ServiceItem[] = [
  {
    title: "Dolori muscolo-scheletrici",
    icon: Bone,
    points: [
      "Lombalgia, cervicalgia e dorsalgia",
      "Tensioni muscolari ricorrenti",
      "Dolori articolari (spalla, ginocchio, anca, polso, caviglia)",
      "Rigidità o limitazioni di movimento dopo traumi o interventi"
    ]
  },
  {
    title: "Disturbi temporo-mandibolari (ATM)",
    icon: Smile,
    points: ["Dolore o click alla mandibola", "Bruxismo"]
  },
  {
    title: "Cefalee e disturbi correlati",
    icon: Brain,
    points: ["Cefalee muscolo-tensive ed emicranie di origine cervicale"]
  },
  {
    title: "Disturbi viscerali",
    icon: Stethoscope,
    points: [
      "Reflusso gastroesofageo, stipsi",
      "Tensioni diaframmatiche o toraciche che influenzano la respirazione",
      "Disagi legati al ciclo mestruale"
    ]
  },
  {
    title: "Gravidanza e post-parto",
    icon: HeartPulse,
    points: [
      "Dolori lombari, pelvici o pubici durante la gravidanza",
      "Preparazione del corpo al parto",
      "Recupero post-parto: postura, cicatrici, diastasi addominale"
    ]
  },
  {
    title: "Ambito pediatrico",
    icon: Baby,
    points: [
      "Rigurgiti, coliche, stipsi",
      "Difficoltà nella suzione",
      "Preferenza di rotazione del capo da un lato, torcicollo miogeno, plagiocefalia",
      "Supporto alla crescita",
      "Disturbi legati a tensioni post-parto"
    ]
  },
  {
    title: "Ambito sportivo",
    icon: Dumbbell,
    points: [
      "Recupero da traumi o sovraccarichi (tendiniti, stiramenti, contratture)",
      "Ottimizzazione della performance e prevenzione degli infortuni",
      "Miglioramento della mobilità articolare e del gesto atletico",
      "Gestione del dolore muscolare o articolare legato all'attività sportiva"
    ]
  },
  {
    title: "Controllo posturale",
    icon: StretchHorizontal,
    points: ["Prevenzione e mantenimento di un buon equilibrio corporeo"]
  }
];

const Services = () => {
  return (
    <Section
      id="services"
      eyebrow="Cosa tratto"
      title="Trattamenti personalizzati per il tuo benessere o quello del tuo bambino "
      description="Ogni trattamento parte da un ascolto attento e da una valutazione personalizzata approfondita. L'obiettivo è favorire un buon equilibrio del corpo."
      background="muted"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="group flex h-full flex-col justify-between rounded-3xl border border-brand-primary/10 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg focus-within:-translate-y-1 focus-within:shadow-lg"
          >
            <div className="space-y-4">
              <div className="inline-flex rounded-full bg-brand-primary/10 p-3 text-brand-primary">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                {service.title}
              </h3>
              {service.description && (
                <p className="text-sm text-slate-600">
                  {service.description}
                </p>
              )}
              {service.points && (
                <ul className="space-y-2 text-sm text-slate-600">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-primary"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Services;
