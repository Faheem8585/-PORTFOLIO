export default function Certifications() {
    const certifications = [
        {
            title: "Power BI: Dashboards for Beginners",
            issuer: "LinkedIn",
            date: "Dec 2023",
            skills: ["Microsoft Power BI"]
        },
        {
            title: "Machine Learning with Python: k-Means Clustering",
            issuer: "LinkedIn",
            date: "Nov 2023",
            skills: ["Python", "Machine Learning"]
        },
        {
            title: "JavaScript Essential Training",
            issuer: "LinkedIn",
            date: "Sep 2023",
            skills: ["JavaScript"]
        },
        {
            title: "SQL Essential Training",
            issuer: "National Association of State Boards of Accountancy (NASBA)",
            date: "Sep 2023",
            skills: ["SQL", "Data Analyst", "Microsoft SQL Server"]
        },
        {
            title: "SQL Essential Training",
            issuer: "LinkedIn",
            date: "Sep 2023",
            skills: ["SQL", "MySQL"]
        },
        {
            title: "AWS Cloud Practitioner Essentials",
            issuer: "Coursera (AWS)",
            date: "Oct 2022",
            skills: ["AWS", "Cloud Computing"]
        },
        {
            title: "AWS Cloud Technical Essentials",
            issuer: "Coursera (AWS)",
            date: "Jul 2022",
            skills: ["AWS", "Cloud Computing"]
        },
        {
            title: "Fundamentals of Network Communication",
            issuer: "Coursera (University of Colorado)",
            date: "Feb 2022",
            skills: ["Networking"]
        },
        {
            title: "Introduction to Networks and Cisco Devices",
            issuer: "Coursera",
            date: "Feb 2022",
            skills: ["Networking", "Cisco"]
        },
        {
            title: "Image Segmentation with Python and Unsupervised Learning",
            issuer: "Coursera",
            date: "Jan 2022",
            skills: ["Python", "Machine Learning", "Computer Vision"]
        },
        {
            title: "Introduction to User Experience Design",
            issuer: "Coursera (Georgia Institute of Technology)",
            date: "Jan 2022",
            skills: ["UX Design"]
        },
        {
            title: "Data Forwarding Across Computer Networks",
            issuer: "Coursera",
            date: "Dec 2021",
            skills: ["Networking"]
        },
        {
            title: "E-Commerce Management",
            issuer: "DigiSkills.pk",
            date: "Nov 2019",
            credentialId: "PYCF6PJPQ"
        },
        {
            title: "FREELANCING",
            issuer: "DigiSkills.pk",
            date: "Nov 2019",
            credentialId: "3RBPZSWPQ"
        }
    ];

    return (
        <section id="certifications" className="section" style={{ background: 'var(--hover-bg)' }}>
            <div className="container">
                <h2>Certifications</h2>
                <p className="text-muted" style={{ marginBottom: '2rem', fontSize: '1.05rem' }}>
                    {certifications.length} professional certifications across Cloud Computing, Machine Learning, Data Analysis, and Web Development
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'white',
                                padding: '1.5rem',
                                borderRadius: '12px',
                                border: '1px solid var(--border)',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'pointer'
                            }}
                            className="project-card"
                        >
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', lineHeight: '1.4' }}>
                                {cert.title}
                            </h4>
                            <p className="text-muted" style={{
                                fontSize: '0.9rem',
                                marginBottom: '0.5rem',
                                fontWeight: 500
                            }}>
                                {cert.issuer}
                            </p>
                            <p className="text-muted" style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>
                                Issued {cert.date}
                            </p>

                            {cert.credentialId && (
                                <p className="text-muted" style={{ fontSize: '0.8rem', marginBottom: '1rem' }}>
                                    Credential ID: {cert.credentialId}
                                </p>
                            )}

                            {cert.skills && (
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                    {cert.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            style={{
                                                fontSize: '0.75rem',
                                                padding: '0.25rem 0.6rem',
                                                background: 'var(--hover-bg)',
                                                border: '1px solid var(--border)',
                                                borderRadius: '4px',
                                                color: 'var(--muted)'
                                            }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
