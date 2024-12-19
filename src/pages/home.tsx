export function HomePage() {
  return (
    <div className="font-Noto text-primary-charcoal bg-neutral-white">
      {/* Spazio per la profondità con ombra */}
      <div className="h-6 bg-neutral-white shadow-md"></div>

      {/* Sezione Eroe */}
      <section className="bg-gradient-to-br from-secondary-green to-primary-moonstone text-neutral-white py-16 shadow-lg relative overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 text-center md:text-left md:pl-10">
            <h1 className="text-5xl font-extrabold mb-6 leading-tight text-primary-charcoal">Connetti Studenti e Aziende con CarrierLink</h1>
            <p className="text-lg mb-8 text-primary-charcoal">Registra le tue competenze e renditi visibile alle aziende. Trova il talento perfetto o scopri opportunità lavorative su misura per te.</p>
            <button className="bg-neutral-white text-primary-charcoal px-8 py-4 rounded-lg font-semibold hover:bg-neutral-gray-light shadow-lg transition-all duration-300">
              Registrati ora
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative overflow-hidden">
            {/* Immagine dello studente */}
            <div className="relative top-2/4 left-1/3">
              <img
                src="https://images.vexels.com/media/users/3/139183/isolated/preview/e81136ff89d964e1b8e8e4f7ff63d4cf-ellipse-by-vexels.png"
                alt="Grafica geometrica"
                className="w-80 opacity-50 -rotate-12 -z-10"
              />
            </div>
            <img
              src="https://pngimg.com/uploads/student/student_PNG62539.png"
              alt="Studente connesso"
              className="w-1/2 max-w-xs rounded relative z-10"
            />
          </div>
        </div>
        {/* Grafiche dietro l'immagine */}
      </section>

      {/* Sezione Funzionalità */}
      <section className="py-16 bg-neutral-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10 text-primary-charcoal">Come funziona</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center p-6 bg-neutral-white shadow-lg rounded-lg transition-transform hover:scale-105">
              <img src="https://pluspng.com/img-png/user-png-icon-big-image-png-2240.png" alt="Icona profilo" className="mx-auto mb-4 w-12 h-12" />
              <h3 className="text-2xl font-semibold mb-4 text-primary-charcoal">Registra il tuo profilo</h3>
              <p className="text-primary-charcoal">Aggiungi competenze, esperienze e certificazioni al tuo profilo personale.</p>
            </div>
            <div className="text-center p-6 bg-neutral-white shadow-lg rounded-lg transition-transform hover:scale-105">
              <img src="https://cdn-icons-png.flaticon.com/512/69/69846.png" alt="Icona opportunità" className="mx-auto mb-4 w-12 h-12" />
              <h3 className="text-2xl font-semibold mb-4 text-primary-charcoal">Esplora opportunità</h3>
              <p className="text-primary-charcoal">Scopri le aziende registrate e trova opportunità che corrispondono al tuo profilo.</p>
            </div>
            <div className="text-center p-6 bg-neutral-white shadow-lg rounded-lg transition-transform hover:scale-105">
              <img src="https://pluspng.com/img-png/star-png-star-icon-1600.png" alt="Icona connessione" className="mx-auto mb-4 w-12 h-12" />
              <h3 className="text-2xl font-semibold mb-4 text-primary-charcoal">Connetti</h3>
              <p className="text-primary-charcoal">Ricevi offerte o contatta aziende per iniziare la tua prossima esperienza professionale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Recensioni */}
      <section className="py-16 bg-gradient-to-br from-secondary-blue via-secondary-green to-secondary-blue shadow-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10 text-primary-charcoal">Cosa dicono i nostri utenti</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center p-6 bg-neutral-white shadow-xl rounded-lg transition-transform hover:scale-105">
              <img src="https://chinafilminsider.com/wp-content/uploads/2017/08/VCG11425563869-e1502812829653-876x1024.jpg" alt="Recensione utente 1" className="mx-auto mb-4 w-20 h-20 rounded-full object-cover" />
              <p className="text-lg text-primary-charcoal italic">“CarrierLink ha trasformato il mio modo di cercare lavoro. Ora sono più visibile alle aziende!”</p>
              <h4 className="text-xl font-semibold mt-4 text-primary-charcoal">Alessio R.</h4>
            </div>
            <div className="text-center p-6 bg-neutral-white shadow-xl rounded-lg transition-transform hover:scale-105">
              <img src="https://thumbs.dreamstime.com/b/young-woman-park-resting-92113335.jpg" alt="Recensione utente 2" className="mx-auto mb-4 w-20 h-20 rounded-full object-cover" />
              <p className="text-lg text-primary-charcoal italic">“Una piattaforma intuitiva e completa. Ho trovato il lavoro perfetto in pochi clic!”</p>
              <h4 className="text-xl font-semibold mt-4 text-primary-charcoal">Giulia S.</h4>
            </div>
            <div className="text-center p-6 bg-neutral-white shadow-xl rounded-lg transition-transform hover:scale-105">
              <img src="https://img.freepik.com/premium-photo/hungry-young-african-american-black-man-eating-hamburger-isolated-beige-background-diet-fast-food-concept_255757-10405.jpg" alt="Recensione utente 3" className="mx-auto mb-4 w-20 h-20 rounded-full object-cover" />
              <p className="text-lg text-primary-charcoal italic">“Grazie a CarrierLink ho avuto accesso a stage incredibili. Consigliatissimo!”</p>
              <h4 className="text-xl font-semibold mt-4 text-primary-charcoal">Marco L.</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
