import { RequiredSkillsListing } from "../components/requiredSkillsListing";

export function CompanyPage() {
  const Company = {
    name: 'Volterra Corps',
    address: 'Via Esino',
    phoneNumber: '+39 111 222 3457',
    city: 'Ancona',
    sector: 'Informatica',
    requiredSkills: [
      'Programmazione',
      'Matematica Analitica',
      'Dottorato in Ingegneria',
      'Esperienza Lavorativa di 2 Anni'
    ],
  };

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center py-10">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-4xl w-full mx-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">{Company.name}</h1>
          <p className="text-lg text-teal-500">{Company.city} | Settore: {Company.sector}</p>
        </header>

        {/* Dati azienda con icona e dettagli */}
        <section className="flex items-center mb-8">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-secondary-blue text-white flex items-center justify-center text-4xl font-bold mr-6">
            {Company.name.charAt(0)}
          </div>
          <div>
            <p className="text-lg text-gray-800">
              <span className="font-semibold text-teal-500">Indirizzo:</span> {Company.address || "Non disponibile"}
            </p>
            <p className="text-lg text-gray-800">
              <span className="font-semibold text-teal-500">Telefono:</span> {Company.phoneNumber}
            </p>
            <p className="text-lg text-gray-800">
              <span className="font-semibold text-teal-500">Città:</span> {Company.city}
            </p>
          </div>
        </section>

        {/* Competenze Richieste */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">📋 Competenze Richieste</h2>
          <RequiredSkillsListing skills={Company.requiredSkills} />
        </section>
      </div>
    </div>
  );
}