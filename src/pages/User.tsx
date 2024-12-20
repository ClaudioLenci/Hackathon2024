import UserPfp from '/UserPfp.jpg';  // Importa l'immagine
import { CertificationsListing } from '../components/certificationsList';
import { useEffect, useState } from 'react';
import { GetApiLink } from '../api';
import { useParams } from 'react-router-dom';
import { User } from '../models/user';
import { Skill } from '../models/skill';
import { Certification } from '../models/certification';

export function UserPage() {

  const { id } = useParams();

  const [user, setUser] = useState<User>();
  useEffect(() => {
    fetch(GetApiLink(`person/getperson/${id}`), {
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors"
    })
    .then((res) => res.json()
      .then((data) => {
        setUser(data);
      })
    );
  }, [])

  const [skills, setSkills] = useState<Array<Skill>>([]);
  useEffect(() => {
    fetch(GetApiLink(`person/getskills/${id}`), {
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors"
    })
    .then((res) => res.json()
      .then((data: Array<Skill>) => {
        setSkills(data);
      })
    );
  }, [])
  useEffect(() => {
  console.log(skills)
  }, [skills])
  
  const [certifications, setCertifications] = useState<Array<Certification>>([]);
  useEffect(() => {
    fetch(GetApiLink(`person/getskills/${id}`), {
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors"
    })
    .then((res) => res.json()
      .then((data) => {
        setCertifications(data);
      })
    );
  }, [])

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center py-10">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-4xl w-full mx-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">{user?.FirstName} {user?.LastName}</h1>
          {/*<p className="text-lg text-teal-500">{user.city} | {user.school}</p>*/}
        </header>

        {/* Dati utente con immagine e dettagli */}
        <section className="flex items-center mb-8">
          <div className="w-32 h-32 rounded-full overflow-hidden mr-6">
            <img src={UserPfp} alt="User Profile" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-lg text-gray-800"><span className="font-semibold text-teal-500">Email:</span> {user?.Email}</p>
          </div>
        </section>

        {/* Competenze */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">🧠 Competenze e Abilità</h2>
          <div className="flex flex-row flex-wrap gap-4 w-full columns-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-secondary-blue text-primary-charcoal font-medium rounded-lg p-4 text-center flex-1">
                {skill.Name}
              </div>
            ))}
          </div>
        </section>

        {/* Certificati */}
        <section className="text-gray-800">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">🏅 Certificati</h2>
          <div className="flex flex-col gap-3">
            <CertificationsListing certifications={certifications} />
          </div>
        </section>
      </div>
    </div>
  );
}