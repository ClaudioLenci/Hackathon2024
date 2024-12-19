import React from 'react';

export function HomePage() {
  return (
    <div className="font-Noto text-primary-charcoal bg-neutral-white">
      {/* Header Navigation */}
      <header className="bg-gradient-to-r from-primary-moonstone to-secondary-green py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-neutral-white"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              <circle cx="12" cy="12" r="5" />
            </svg>
            <div className="text-neutral-white text-3xl font-extrabold tracking-wide">CarrierLink</div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <button className="text-neutral-white hover:text-secondary-coral font-medium transition duration-300">Diplomi online</button>
            <button className="text-neutral-white hover:text-secondary-coral font-medium transition duration-300">Carriere</button>
            <button className="text-neutral-white hover:text-secondary-coral font-medium transition duration-300">Accedi</button>
            <button className="bg-neutral-white text-primary-moonstone border border-neutral-white px-5 py-2 rounded-full font-semibold hover:bg-secondary-coral hover:text-neutral-white transition duration-300">
              Iscriviti gratuitamente
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-secondary-green text-neutral-white py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">Accesso illimitato a Migliaia di Opportunità con CarrierLink</h1>
            <p className="text-lg mb-6">Esplora corsi, progetti pratici e certificazioni per il tuo futuro professionale, tutto incluso nel tuo abbonamento.</p>
            <button className="bg-primary-moonstone text-neutral-white px-6 py-3 rounded font-semibold hover:bg-primary-charcoal">
              Inizia la tua prova gratuita oggi
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img src="/path-to-your-image.png" alt="Ragazzo sorridente" className="w-3/4 md:w-full rounded" />
          </div>
        </div>
      </section>

      {/* Other sections placeholder */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">Sezione Placeholder</h2>
          <p className="text-center">Aggiungi altre sezioni qui...</p>
        </div>
      </section>
    </div>
  );
}
