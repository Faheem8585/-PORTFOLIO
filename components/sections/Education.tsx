export default function Education() {
    const education = [
        {
            degree: "Master of Science",
            field: "Artificial Intelligence",
            institution: "Brandenburgische Technische Universität Cottbus-Senftenberg",
            period: "2023 - Nov 2025",
            grade: "2.3",
            location: "Cottbus, Germany"
        },
        {
            degree: "Bachelor of Science",
            field: "Computer Science",
            institution: "Riphah International University",
            period: "Sep 2018 - Aug 2022",
            grade: "A+",
            location: "Pakistan"
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
                    </div>
                ))}
            </div>
        </section>
    );
}
