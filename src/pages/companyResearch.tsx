import { useState } from 'react';
import { GetListaCompagnie } from './ListaCompagnie';

export function CompanyResearchPage() {
  const ListaCompagnie = GetListaCompagnie();

  // Stato per la ricerca e il filtro del settore
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('');

  // Filtra le compagnie in base alla ricerca e al settore selezionato
  const filteredCompanies = ListaCompagnie.filter((company) => {
    const isSearchMatch = company.name.toLowerCase().includes(searchTerm.toLowerCase());
    const isSectorMatch = selectedSector ? company.sector === selectedSector : true;
    return isSearchMatch && isSectorMatch;
  });

  // Estrai tutti i settori unici
  const sectors = [...new Set(ListaCompagnie.map((company) => company.sector))];

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
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Cerca per nome azienda..."
              className="p-2 w-full rounded-lg border-2 border-gray-300 text-gray-800"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-4 items-center">
            <label className="text-teal-500 font-semibold">Filtra per settore:</label>
            <select
              className="p-2 rounded-lg border-2 border-gray-300 text-gray-800"
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
            >
              <option value="">Tutti i settori</option>
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
            {filteredCompanies.length === 0 ? (
              <p className="text-lg text-gray-600">Nessuna azienda trovata.</p>
            ) : (
              filteredCompanies.map((company, index) => (
                <div key={index} className="bg-secondary-blue text-primary-charcoal p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-white">{company.name}</h3>
                  <p className="text-sm text-white">{company.sector}</p>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}