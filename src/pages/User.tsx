import UserPfp from '/UserPfp.jpg';  // Importa l'immagine

export function UserPage() {

const User = {
    name: 'Samuel',
    lastName: 'Sanchez',
    email: 'samuel.sanchez@iisve.it',
    city: 'Ancona',
    school: 'I.I.S Volterra Elia',
    certifications: 'Ingegneria Informatica - ICDL - Hackaton - Cyber Security',
    description: 'Studente del Volterra Elia',
    skills: [
        { name: 'JavaScript', level: 'Alto' },
        { name: 'Python', level: 'Alto' },
        { name: 'React', level: 'Medio' },
    ]
};

return (
  <div className="bg-gray-200 min-h-screen flex justify-center items-center py-10">
  <div className="bg-white rounded-lg p-6 shadow-lg max-w-4xl w-full mx-8">
    {/* Header */}
    <header className="text-center mb-8">
      <h1 className="text-2xl font-semibold text-gray-800">{User.name} {User.lastName}</h1>
      <p className="text-lg text-teal-500">{User.city} | {User.school}</p>
    </header>

    {/* Dati utente con immagine e dettagli */}
    <section className="flex items-center mb-8">
      <div className="w-32 h-32 rounded-full overflow-hidden mr-6">
        <img src={UserPfp} alt="User Profile" className="w-full h-full object-cover" />
      </div>
      <div>
        <p className="text-lg text-gray-800"><span className="font-semibold text-teal-500">Email:</span> {User.email}</p>
        <p className="text-lg text-gray-800"><span className="font-semibold text-teal-500">Descrizione:</span> {User.description}</p>
      </div>
    </section>

    {/* Competenze */}
    <section className="mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">🧠 Competenze e Abilità</h2>
      <div className="flex flex-row flex-wrap gap-4 w-full columns-4">
        {User.skills.map((skill, index) => (
          <div key={index} className="bg-secondary-blue text-primary-charcoal font-medium rounded-lg p-4 text-center flex-1">
            {skill.name} ({skill.level})
          </div>
        ))}
      </div>
    </section>

    {/* Certificati */}
    <section className="text-gray-800">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">🏅 Certificati</h2>
      <div className="flex flex-col gap-3">
        {User.certifications.split(' - ').map((cert, index) => (
          <div key={index} className="bg-secondary-coral text-white font-medium rounded-lg py-4 px-6 min-w-20 w-fit">
            {cert}
          </div>
        ))}
      </div>
    </section>
  </div>
</div>
  );
}