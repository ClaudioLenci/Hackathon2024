export function ClassList({ classes }: { classes: { class: string, descriptionOfGraduations: string }[] }) {
    return (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {classes.map((classItem, index) => (
            <div
                key={index}
                className="bg-secondary-blue text-primary-charcoal font-medium rounded-lg p-4 text-center"
            >
                <div className="font-semibold">{classItem.class}</div>
                {/* Utilizzo di details e summary per visualizzare la descrizione */}
                <details className="mt-2">
                    <summary className="text-sm text-primary-charcoal font-normal cursor-pointer list-none">
                        Descrizione
                    </summary>
                    <p className="text-sm text-primary-charcoal font-normal">{classItem.descriptionOfGraduations}</p>
                </details>
            </div>
            ))}
        </div>
        </>
    );
  }