import { useEffect, useState } from 'react';
import { Company } from '../models/company';
import { GetApiLink } from '../api';
import { Link } from 'react-router-dom';

export function CompanyResearchPage() {

  const [selectedSector, setSelectedSector] = useState('');

  const [sectors, setSectors] = useState<Array<string>>([]);

  useEffect(() => {
    fetch(GetApiLink(`sector/getallsectors`), {
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors"
    })
    .then((res) => res.json()
      .then((data) => {
        setSectors(data);
      })
    );
  }, []);

  const [companies, setCompanies] = useState<Array<Company>>([]);

  useEffect(() => {   
    if(selectedSector)
    {
      fetch(GetApiLink(`search/search_companies_by_sector/${selectedSector}`), {
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors"
      })
      .then((res) => res.json()
        .then((data) => {
          setCompanies(data);
        })
      );
    }
  }, [selectedSector])

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center py-10">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-4xl w-full mx-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">Ricerca Aziende</h1>
          <p className="text-lg text-teal-500">Trova le compagnie per nome o settore</p>
        </header>

        {/* Barra di ricerca */}
        <section className="mb-8">
          <div className="flex gap-4 items-center">
            <label className="text-teal-500 font-semibold">Filtra per settore:</label>
            <select
              className="p-2 rounded-lg border-2 border-gray-300 text-gray-800"
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
            >
              <option value="">Seleziona settore</option>
              {sectors.map((sector, index) => (
                <option key={index} value={sector}>
                  {sector}
                </option>
              ))}
            </select>
          </div>
        </section>

        {/* Risultati delle compagnie */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">🧑‍💼 Aziende Trovate</h2>
          <div className="space-y-4">
            {companies.length === 0 ? (
              <p className="text-lg text-gray-600">Nessuna azienda trovata.</p>
            ) : (
              companies.map((company, index) => (
                <Link to={`/company/${company.ID_Company}`} key={index}>
                  <div className="bg-secondary-blue text-primary-charcoal p-4 rounded-lg shadow-md w-full">
                    <h3 className="text-lg font-semibold text-black">{company.Name}</h3>
                    <p className="text-sm text-white">{company.Sector}</p>
                  </div>
                </Link>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}