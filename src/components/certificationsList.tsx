import { Certification } from "../models/certification";

export function CertificationsListing({ certifications }: { certifications: Array<Certification> }) {
  return (
    <>
      {certifications.map((certification, index) => (
        <div key={index} className="bg-secondary-coral text-white font-semibold rounded-lg py-4 px-6 min-w-20 w-fit">
          <div className="font-semibold">{certification.Name}</div>
          <details className="mt-2">
            <summary className="text-sm text-white font-normal cursor-pointer list-none">
              Descrizione
            </summary>
            <p className="text-sm text-white font-normal">{certification.Description}</p>
          </details>
        </div>
      ))}
    </>
  );
}