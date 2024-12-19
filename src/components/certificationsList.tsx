export function CertificationsListing({ certifications }: { certifications: { [key: string]: string } }) {
  return (
    <>
      {Object.entries(certifications).map(([certification, description], index) => (
        <div key={index} className="bg-secondary-coral text-white font-semibold rounded-lg py-4 px-6 min-w-20 w-fit">
          <div className="font-semibold">{certification}</div>
          <details className="mt-2">
            <summary className="text-sm text-white font-normal cursor-pointer list-none">
              Descrizione
            </summary>
            <p className="text-sm text-white font-normal">{description}</p>
          </details>
        </div>
      ))}
    </>
  );
}