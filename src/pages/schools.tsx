import React from "react";

export function Schools() {
    return (
        <div>
            {/* Sezione introduttiva */}
            <section className="flex flex-col items-center justify-center bg-light-blue p-8 md:p-16">
                <div className="text-center max-w-2xl">
                    <h1 className="text-4xl font-bold text-primary-charcoal mb-4">
                        Scopri le opportunità per le scuole
                    </h1>
                    <p className="text-lg text-gray-700 mb-6">
                        Con il nostro programma dedicato, le scuole possono accedere a strumenti unici per facilitare l'assistenza, migliorare i PCTO e collaborare con aziende innovative.
                    </p>
                    <button className="bg-primary-blue text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition-all">
                        Scopri di più
                    </button>
                </div>
            </section>

            {/* Sezione piani di pagamento */}
            <section className="p-8 md:p-16">
                <h2 className="text-3xl font-bold text-primary-charcoal text-center mb-8">
                    Scegli il piano giusto per la tua scuola
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Piano Freemium */}
                    <div className="bg-white rounded-lg shadow-md p-6 text-center border-4 border-[#A7C957]">
                        <h3 className="text-2xl font-bold text-primary-charcoal mb-4">Piano Freemium</h3>
                        <p className="text-lg text-gray-700 mb-4">Gratuito</p>
                        <ul className="space-y-2 mb-4">
                            <li className="flex items-center justify-center space-x-2">
                                <span className="text-green-600">✔</span>
                                <span>Facilitazione assistenza</span>
                            </li>
                            <li className="flex items-center justify-center space-x-2">
                                <span className="text-green-600">✔</span>
                                <span>Facilitazione PCTO</span>
                            </li>
                            <li className="flex items-center justify-center space-x-2">
                                <span className="text-green-600">✔</span>
                                <span>Mostrare interesse ad aziende</span>
                            </li>
                        </ul>
                        <button className="border-2 border-[#A7C957] text-[#A7C957] bg-white px-6 py-3 rounded-md shadow-md">
                            Attiva Freemium
                        </button>
                    </div>

                    {/* Piano Premium */}
                    <div className="bg-white rounded-lg shadow-md p-6 text-center border-4 border-[#A7C957] relative">
                        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#A7C957] text-white text-sm font-bold px-4 py-1 rounded-full">
                            Più visibilità
                        </span>
                        <h3 className="text-2xl font-bold text-primary-charcoal mb-4">Piano Premium</h3>
                        <p className="text-lg text-gray-700 mb-4">500 € / anno</p>
                        <ul className="space-y-2 mb-4">
                            <li className="flex items-center justify-center space-x-2">
                                <span className="text-green-600">✔</span>
                                <span>Facilitazione assistenza</span>
                            </li>
                            <li className="flex items-center justify-center space-x-2">
                                <span className="text-green-600">✔</span>
                                <span>Facilitazione PCTO</span>
                            </li>
                            <li className="flex items-center justify-center space-x-2">
                                <span className="text-green-600">✔</span>
                                <span>Mostrare interesse ad aziende</span>
                            </li>
                            <li className="flex items-center justify-center space-x-2">
                                <span className="text-green-600">✔</span>
                                <span>Maggiore visibilità</span>
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
