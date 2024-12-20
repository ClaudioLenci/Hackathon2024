
export function Companies() {
    return (
        <div>
            {/* Sezione introduttiva */}
            <section className="flex flex-col md:flex-row items-center justify-between bg-light-blue p-8 md:p-16">
                <div className="max-w-xl">
                    <h1 className="text-4xl font-bold text-primary-charcoal mb-4">
                        Collabora con noi per connetterti con i migliori talenti
                    </h1>
                    <p className="text-lg text-gray-700 mb-6">
                        Scopri come CareerLink può aiutare la tua azienda a crescere. Promuovi il tuo brand, connettiti con studenti qualificati e ottimizza la tua strategia di assunzione con soluzioni su misura per le tue esigenze.
                    </p>
                    <ul className="text-gray-700 mb-6 space-y-2">
                        <li>- Accesso a una rete qualificata di candidati</li>
                        <li>- Soluzioni di promozione personalizzate</li>
                        <li>- Migliora la visibilità del tuo marchio</li>
                    </ul>
                    <button className="bg-primary-blue text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition-all">
                        Inizia ora
                    </button>
                </div>
                <img
                    src="https://www.orielstat.com/blog/wp-content/uploads/2019/04/business-people-working-on-a-plan_Resized-1104W736H.jpg"
                    alt="Team aziendale"
                    className="w-full md:w-1/2 mt-8 md:mt-0 rounded-lg shadow-md"
                />
            </section>

            {/* Sezione sui benefici */}
            <section className="bg-gray-100 p-8 md:p-16">
                <h2 className="text-3xl font-bold text-primary-charcoal text-center mb-6">
                    Perché scegliere CareerLink?
                </h2>
                <p className="text-lg text-gray-700 text-center mb-12">
                    Scopri come la nostra piattaforma può supportare il successo della tua azienda con strumenti avanzati e connessioni strategiche.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Prima colonna */}
                    <div className="text-center p-6 bg-white rounded-lg shadow-md">
                        <img
                            src="https://www.seekpng.com/png/full/333-3337750_objectives-png.png"
                            alt="Obiettivi"
                            className="w-16 h-16 mx-auto mb-4 object-contain"
                        />
                        <h3 className="text-xl font-bold mb-2">Accesso a Talenti Qualificati</h3>
                        <p className="text-gray-700">
                            Connettiti con una rete di professionisti qualificati e studenti pronti a contribuire al successo della tua azienda.
                        </p>
                    </div>
                    {/* Seconda colonna */}
                    <div className="text-center p-6 bg-white rounded-lg shadow-md">
                        <img
                            src="https://www.clipartbest.com/cliparts/aiq/Lnp/aiqLnpb6T.png"
                            alt="Crescita del Brand"
                            className="w-16 h-16 mx-auto mb-4 object-contain"
                        />
                        <h3 className="text-xl font-bold mb-2">Crescita del Brand</h3>
                        <p className="text-gray-700">
                            Promuovi il tuo marchio aziendale con strumenti di visibilità personalizzati.
                        </p>
                    </div>
                    {/* Terza colonna */}
                    <div className="text-center p-6 bg-white rounded-lg shadow-md">
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/009/342/688/original/clock-icon-clipart-design-illustration-free-png.png"
                            alt="Gestione del Tempo"
                            className="w-16 h-16 mx-auto mb-4 object-contain"
                        />
                        <h3 className="text-xl font-bold mb-2">Gestione del Tempo</h3>
                        <p className="text-gray-700">
                            Ottimizza il tuo processo di assunzione e riduci il tempo dedicato alla selezione del personale.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sezione piani di pagamento */}
            <section className="p-8 md:p-16">
                <h2 className="text-3xl font-bold text-primary-charcoal text-center mb-8">
                    Scegli il piano giusto per la tua azienda
                </h2>
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    {/* Piano Platinum */}
                    <div className="bg-white rounded-lg shadow-md p-6 text-center w-full md:w-1/3 border-4 border-[#A7C957]">
                        <h3 className="text-2xl font-bold text-primary-charcoal mb-4">Piano Platinum</h3>
                        <p className="text-lg text-gray-700 mb-4">1100 € / anno</p>
                        <ul className="space-y-2 mb-4">
                            <li className="flex items-center justify-center space-x-2">
                                <span className="text-green-600">✔</span>
                                <span>Promozione mirata</span>
                            </li>
                            <li className="flex items-center justify-center space-x-2">
                                <span className="text-green-600">✔</span>
                                <span>Alta visibilità</span>
                            </li>
                            <li className="flex items-center justify-center space-x-2">
                                <span className="text-green-600">✔</span>
                                <span>Accesso alla rete completa</span>
                            </li>
                        </ul>
                        <button className="border-2 border-[#A7C957] text-[#A7C957] bg-white px-6 py-3 rounded-md shadow-md">
                            Scegli Platinum
                        </button>
                    </div>

                    {/* Piano Gold */}
                    <div className="bg-white rounded-lg shadow-md p-6 text-center w-full md:w-1/3 border-4 border-[#A7C957] relative">
                        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#A7C957] text-white text-sm font-bold px-4 py-1 rounded-full">
                            Il più popolare
                        </span>
                        <h3 className="text-2xl font-bold text-primary-charcoal mb-4">Piano Gold</h3>
                        <p className="text-lg text-gray-700 mb-4">600 € / anno</p>
                        <ul className="space-y-2 mb-4">
                            <li className="flex items-center justify-center space-x-2">
                                <span className="text-red-600">✘</span>
                                <span>Promozione mirata</span>
                            </li>
                            <li className="flex items-center justify-center space-x-2">
                                <span className="text-green-600">✔</span>
                                <span>Pubblicità globale</span>
                            </li>
                            <li className="flex items-center justify-center space-x-2">
                                <span className="text-red-600">✘</span>
                                <span>Alta visibilità</span>
                            </li>
                        </ul>
                        <button className="bg-[#A7C957] text-white px-6 py-3 rounded-md shadow-md">
                            Scegli Gold
                        </button>
                    </div>

                    {/* Piano Silver */}
                    <div className="bg-white rounded-lg shadow-md p-6 text-center w-full md:w-1/3 border-4 border-[#A7C957]">
                        <h3 className="text-2xl font-bold text-primary-charcoal mb-4">Piano Silver</h3>
                        <p className="text-lg text-gray-700 mb-4">50 € / anno</p>
                        <ul className="space-y-2 mb-4">
                            <li className="flex items-center justify-center space-x-2">
                                <span className="text-red-600">✘</span>
                                <span>Promozione mirata</span>
                            </li>
                            <li className="flex items-center justify-center space-x-2">
                                <span className="text-red-600">✘</span>
                                <span>Pubblicità globale</span>
                            </li>
                            <li className="flex items-center justify-center space-x-2">
                                <span className="text-green-600">✔</span>
                                <span>Accesso alla rete completa</span>
                            </li>
                        </ul>
                        <button className="border-2 border-[#A7C957] text-[#A7C957] bg-white px-6 py-3 rounded-md shadow-md">
                            Scegli Silver
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
