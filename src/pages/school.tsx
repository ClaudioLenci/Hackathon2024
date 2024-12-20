import { ClassList } from "../components/listClassesDirection";

export function SchoolPage() {
  const School = {
    name: 'I.I.S Volterra Elia',
    email: 'IISVE-COM@domain.it',
    phoneNumber: '+39 457 822 9999',
    address: 'Via Esino',
    city: 'Ancona',
    classes: [
      {
        class: 'Informatica',
        descriptionOfGraduations: 'Competenze in programmazione, sviluppo software e gestione sistemi informatici. Possibili certificazioni: ECDL, Certificazioni Cisco e Microsoft.'
      },
      {
        class: 'Scienze Applicate',
        descriptionOfGraduations: 'Preparazione a studi universitari in ingegneria, biotecnologie e fisica applicata. Certificazioni in ambito scientifico e tecnologico.'
      },
      {
        class: 'Meccanica',
        descriptionOfGraduations: 'Competenze in progettazione e manutenzione di macchine, impianti industriali. Certificazioni in CAD, progettazione meccanica e sicurezza sul lavoro.'
      },
      {
        class: 'Navale',
        descriptionOfGraduations: 'Formazione in costruzione e gestione di imbarcazioni e navi. Certificazioni relative a tecniche navali, sicurezza marittima e progettazione nautica.'
      },
      {
        class: 'Logistico',
        descriptionOfGraduations: 'Competenze in gestione della logistica, trasporti e distribuzione merci. Certificazioni in gestione delle supply chain, sicurezza e trasporti internazionali.'
      },
      {
        class: 'Elettronica',
        descriptionOfGraduations: 'Competenze in progettazione e manutenzione di impianti elettronici e circuiti. Certificazioni in automazione, elettronica industriale e sistemi di controllo.'
      },
      {
        class: 'Chimica',
        descriptionOfGraduations: 'Competenze in analisi chimiche, gestione e controllo di laboratori chimici. Certificazioni in analisi ambientale, laboratorio chimico e sicurezza industriale.'
      },
      {
        class: 'Telecomunicazioni',
        descriptionOfGraduations: 'Formazione su reti di telecomunicazioni, internet e gestione dei segnali. Certificazioni Cisco, Network+, e gestione delle comunicazioni aziendali.'
      }
    ]
  };

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center py-10">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-4xl w-full mx-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">{School.name}</h1>
          <p className="text-lg text-teal-500">{School.city}</p>
        </header>

        {/* Dati Scuola */}
        <section className="flex items-center mb-8">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-secondary-blue text-white flex items-center justify-center text-4xl font-bold mr-6">
            {School.name.charAt(0)} {/* Prima lettera del nome come icona */}
          </div>
          <div>
            <p className="text-lg text-gray-800">
              <span className="font-semibold text-teal-500">Email:</span> {School.email}
            </p>
            <p className="text-lg text-gray-800">
              <span className="font-semibold text-teal-500">Telefono:</span> {School.phoneNumber}
            </p>
            <p className="text-lg text-gray-800">
              <span className="font-semibold text-teal-500">Indirizzo:</span> {School.address || "Non disponibile"}
            </p>
          </div>
        </section>

        {/* Classi */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">📚 Indirizzi</h2>
          {/* Utilizzo del componente ClassList */}
          <ClassList classes={School.classes} />
        </section>
      </div>
    </div>
  );
}