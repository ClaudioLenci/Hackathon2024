import React from "react";

export function Schools() {
    return (
        <div>
            {/* Sezione introduttiva */}
            <section className="flex flex-col md:flex-row items-center justify-between bg-light-blue p-8 md:p-16">
                <div className="max-w-xl">
                    <h1 className="text-4xl font-bold text-primary-charcoal mb-4">
                        Registrati come Scuola e crea opportunità per i tuoi studenti
                    </h1>
                    <p className="text-lg text-gray-700 mb-6">
                        Con il nostro programma dedicato, le scuole possono inviare richieste alle aziende per coinvolgere gli studenti in attività di PCTO in modo semplice e veloce.
                    </p>
                    <ul className="text-gray-700 mb-6 space-y-2">
                        <li>- Accedi a strumenti per facilitare l'organizzazione del PCTO</li>
                        <li>- Connettiti con aziende innovative</li>
                        <li>- Maggiore visibilità per la tua scuola</li>
                    </ul>
                    <button className="bg-primary-blue text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition-all">
                        Registrati ora
                    </button>
                </div>
                <img
                    src="https://img.freepik.com/free-photo/group-young-happy-students-talking-studying-together_171337-12241.jpg"
                    alt="Studenti collaborativi"
                    className="w-full md:w-1/2 mt-8 md:mt-0 rounded-lg shadow-md"
                />
            </section>

            {/* Sezione benefici */}
            <section className="bg-gray-100 p-8 md:p-16">
                <h2 className="text-3xl font-bold text-primary-charcoal text-center mb-6">
                    Perché scegliere il nostro programma per le scuole?
                </h2>
                <p className="text-lg text-gray-700 text-center mb-12">
                    Scopri come possiamo aiutarti a migliorare l'organizzazione delle attività di PCTO e a creare opportunità uniche per i tuoi studenti.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Prima colonna */}
                    <div className="text-center p-6 bg-white rounded-lg shadow-md">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3470/3470666.png"
                            alt="Facilità d'uso"
                            className="w-16 h-16 mx-auto mb-4 object-contain"
                        />
                        <h3 className="text-xl font-bold mb-2">Facilità d'uso</h3>
                        <p className="text-gray-700">
                            Gestisci richieste di PCTO con un'interfaccia intuitiva e strumenti dedicati.
                        </p>
                    </div>
                    {/* Seconda colonna */}
                    <div className="text-center p-6 bg-white rounded-lg shadow-md">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3874/3874642.png"
                            alt="Connessione aziende"
                            className="w-16 h-16 mx-auto mb-4 object-contain"
                        />
                        <h3 className="text-xl font-bold mb-2">Connessione con aziende</h3>
                        <p className="text-gray-700">
                            Trova aziende partner per collaborazioni efficaci e opportunità per gli studenti.
                        </p>
                    </div>
                    {/* Terza colonna */}
                    <div className="text-center p-6 bg-white rounded-lg shadow-md">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2950/2950707.png"
                            alt="Maggiore visibilità"
                            className="w-16 h-16 mx-auto mb-4 object-contain"
                        />
                        <h3 className="text-xl font-bold mb-2">Maggiore visibilità</h3>
                        <p className="text-gray-700">
                            Aumenta la visibilità della tua scuola nel panorama educativo e aziendale.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sezione piani di pagamento */}
            <section className="p-8 md:p-16">
                <h2 className="text-3xl font-bold text-primary-charcoal text-center mb-8">
                    Scegli il piano giusto per la tua scuola
                </h2>
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    {/* Piano Freemium */}
                    <div className="bg-white rounded-lg shadow-md p-6 text-center w-full md:w-1/3 border-4 border-[#A7C957]">
                        <h3 className="text-2xl font-bold text-primary-charcoal mb-4">Piano Freemium</h3>
                        <p className="text-lg text-gray-700 mb-4">Gratuito</p>
                        <ul className="space-y-2 mb-4">
                            <li className="flex items-center justify-center space-x-2">
                                <span className="text-green-600">✔</span>
                                <span>Accesso a tutte le funzionalità</span>
                            </li>
                            <li className="flex items-center justify-center space-x-2">
                                <span className="text-green-600">✔</span>
                                <span>Assistenza nell'organizzazione PCTO</span>
                            </li>
                        </ul>
                        <button className="border-2 border-[#A7C957] text-[#A7C957] bg-white px-6 py-3 rounded-md shadow-md">
                            Attiva Freemium
                        </button>
                    </div>

                    {/* Piano Premium */}
                    <div className="bg-white rounded-lg shadow-md p-6 text-center w-full md:w-1/3 border-4 border-[#A7C957] relative">
                        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#A7C957] text-white text-sm font-bold px-4 py-1 rounded-full">
                            Maggiore visibilità
                        </span>
                        <h3 className="text-2xl font-bold text-primary-charcoal mb-4">Piano Premium</h3>
                        <p className="text-lg text-gray-700 mb-4">500 € / anno</p>
                        <ul className="space-y-2 mb-4">
                            <li className="flex items-center justify-center space-x-2">
                                <span className="text-green-600">✔</span>
                                <span>Accesso a tutte le funzionalità</span>
                            </li>
                            <li className="flex items-center justify-center space-x-2">
                                <span className="text-green-600">✔</span>
                                <span>Assistenza nell'organizzazione PCTO</span>
                            </li>
                            <li className="flex items-center justify-center space-x-2">
                                <span className="text-green-600">✔</span>
                                <span>Maggiore fruibilità e visibilità</span>
                            </li>
                        </ul>
                        <button className="bg-[#A7C957] text-white px-6 py-3 rounded-md shadow-md">
                            Scegli Premium
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
