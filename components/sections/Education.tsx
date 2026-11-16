export default function Education() {
    const education = [
        {
            degree: "Master of Science",
            field: "Artificial Intelligence",
            institution: "Brandenburgische Technische Universität Cottbus-Senftenberg",
            period: "Apr 2023 - Nov 2025",
            grade: "2.3",
            location: "Cottbus, Germany",
            notes: [
                "Degree awarded 4 November 2025. Taught and examined entirely in English.",
                "Research Module graded 1.0.",
                "Thesis with Fraunhofer IFAM Dresden on electrode surface analysis.",
                "Seven computational neuroscience modules, including Brain-Computer Interfaces for Neuroadaptive Technology, Neural Signal Processing, Modelling of Perception and Action, and Biological Neural Networks."
            ]
        },
        {
            degree: "Bachelor of Science",
            field: "Computer Science",
            institution: "Riphah International University",
            period: "Sep 2018 - Aug 2022",
            grade: "3.70 / 4.00",
            location: "Islamabad, Pakistan",
            notes: [
                "Assessed as 1.4 on the German grading scale.",
                "C++ was the primary language across the full degree: data structures, algorithms, object-oriented design and semester projects.",
                "Thesis: Pak Charity, a Flutter and Firebase donation platform."
            ]
        }
    ];

    return (
        <section id="education" className="section">
            <div className="container">
                <h2>Education</h2>
                {education.map((edu, index) => (
                    <div key={index} className="experience-item">
                        <div className="experience-header">
                            <div>
                                <h4>{edu.degree} - {edu.field}</h4>
                                <p className="text-muted" style={{ marginBottom: '0.25rem', fontWeight: 500 }}>
                                    {edu.institution}
                                </p>
                                <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                                    {edu.location}
                                </p>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <span className="experience-date">{edu.period}</span>
                                <div style={{
                                    marginTop: '0.5rem',
                                    padding: '0.25rem 0.75rem',
                                    background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
                                    color: 'white',
                                    borderRadius: '6px',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    display: 'inline-block'
                                }}>
                                    Grade: {edu.grade}
                                </div>
                            </div>
                        </div>
                        {edu.notes && (
                            <ul>
                                {edu.notes.map((note, i) => (
                                    <li key={i}>{note}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
