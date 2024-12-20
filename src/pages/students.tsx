export function Students() {
    return (
      <div className="font-Noto text-primary-charcoal">
        {/* Intestazione */}
        <section className="py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Per Gli Studenti</h1>
          <p className="text-lg max-w-3xl mx-auto">CarrierLink supporta studenti attuali interessati a esperienze lavorative e ex-diplomati in cerca di opportunità lavorative. Scopri come possiamo aiutarti a raggiungere i tuoi obiettivi!</p>
        </section>
  
        {/* Sezione Studenti Attuali */}
        <section className="py-12 bg-secondary-green">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-8 text-neutral-white">Studenti Attuali</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 bg-neutral-white shadow-lg rounded-lg text-center hover:shadow-xl transition transform hover:-translate-y-1">
                <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="Esperienze" className="mx-auto mb-4 w-16 h-16" />
                <h3 className="text-xl font-medium mb-2 text-primary-charcoal">Esperienze Lavorative</h3>
                <p className="text-sm text-primary-charcoal">Partecipa a tirocini e progetti per sviluppare le tue competenze professionali.</p>
              </div>
              <div className="p-6 bg-neutral-white shadow-lg rounded-lg text-center hover:shadow-xl transition transform hover:-translate-y-1">
                <img src="https://cdn-icons-png.flaticon.com/512/847/847972.png" alt="Connessioni" className="mx-auto mb-4 w-16 h-16" />
                <h3 className="text-xl font-medium mb-2 text-primary-charcoal">Connessioni con Aziende</h3>
                <p className="text-sm text-primary-charcoal">Collega il tuo profilo alle aziende per prepararti al tuo futuro professionale.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Sezione Ex-Diplomati */}
        <section className="py-12 bg-primary-charcoal">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-8 text-neutral-white">Ex-Diplomati</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 bg-neutral-white shadow-lg rounded-lg text-center hover:shadow-xl transition transform hover:-translate-y-1">
                <img src="https://cdn-icons-png.flaticon.com/512/847/847974.png" alt="Supporto" className="mx-auto mb-4 w-16 h-16" />
                <h3 className="text-xl font-medium mb-2 text-primary-charcoal">Supporto nella Ricerca</h3>
                <p className="text-sm text-primary-charcoal">Trova il lavoro ideale con il nostro supporto dedicato.</p>
              </div>
              <div className="p-6 bg-neutral-white shadow-lg rounded-lg text-center hover:shadow-xl transition transform hover:-translate-y-1">
                <img src="https://cdn-icons-png.flaticon.com/512/847/847975.png" alt="Crescita" className="mx-auto mb-4 w-16 h-16" />
                <h3 className="text-xl font-medium mb-2 text-primary-charcoal">Crescita Professionale</h3>
                <p className="text-sm text-primary-charcoal">Partecipa a corsi di formazione per migliorare le tue prospettive di carriera.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Sezione Contatto */}
        <section className="py-12">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold mb-6">Hai bisogno di aiuto?</h2>
            <p className="mb-6 max-w-2xl mx-auto">Contatta il nostro team per ricevere il supporto di cui hai bisogno nel tuo percorso professionale.</p>
            <button className="bg-secondary-green text-white px-6 py-3 rounded-md font-medium shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">Contattaci Ora</button>
          </div>
        </section>
      </div>
    );
  }
  