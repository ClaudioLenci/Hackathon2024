export function RequiredSkillsListing({ skills }: { skills: string[] }) {
    return (
      <div className="flex flex-col gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-secondary-coral text-white font-medium rounded-lg py-2 px-4"
          >
            {skill}
          </div>
        ))}
      </div>
    );
  }