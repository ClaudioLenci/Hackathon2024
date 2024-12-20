import { useEffect, useState } from "react";
import { RequiredSkillsListing } from "../components/requiredSkillsListing";
import { Company } from "../models/company";
import { GetApiLink } from "../api";
import { useParams } from "react-router-dom";

export function CompanyPage() {

  const requiredSkills = [
    'Programmazione',
    'Matematica Analitica',
    'Dottorato in Ingegneria',
    'Esperienza Lavorativa di 2 Anni'
  ];

  const { id } = useParams();

  const [company, setCompany] = useState<Company>();
  useEffect(() => {
    fetch(GetApiLink(`company/getcompany/${id}`), {
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors"
        })
        .then((res) => res.json()
          .then((data) => {
            setCompany(data);
          })
        );
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center py-10">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-4xl w-full mx-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">{company?.Name}</h1>
          <p className="text-lg text-teal-500">{company?.City} | Settore: {company?.Sector}</p>
        </header>

        {/* Dati azienda con icona e dettagli */}
        <section className="flex items-center mb-8">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-secondary-blue text-white flex items-center justify-center text-4xl font-bold mr-6">
            {company?.Name.charAt(0)}
          </div>
          <div>
            <p className="text-lg text-gray-800">
              <span className="font-semibold text-teal-500">Indirizzo:</span> {company?.Address || "Non disponibile"}
            </p>
            <p className="text-lg text-gray-800">
              <span className="font-semibold text-teal-500">Telefono:</span> {company?.Phone}
            </p>
            <p className="text-lg text-gray-800">
              <span className="font-semibold text-teal-500">Città:</span> {company?.City}
            </p>
          </div>
        </section>

        {/* Competenze Richieste */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">📋 Competenze Richieste</h2>
          <RequiredSkillsListing skills={requiredSkills} />
        </section>
      </div>
    </div>
  );
}