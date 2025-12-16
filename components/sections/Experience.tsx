export default function Experience() {
    const experiences = [
        {
            title: "Teaching Assistant",
            company: "Brandenburgische Technische Universität Cottbus-Senftenberg",
            date: "Oct 2023 - Present · 2 yrs 3 mos",
            location: "Cottbus, Brandenburg, Germany · On-site",
            type: "Part-time",
            responsibilities: [
                "Play an integral role in the collection and analysis of egg data from various subjects",
                "Manage the entire data lifecycle, starting with meticulous data collection",
                "Perform thorough preprocessing to ensure data accuracy and consistency",
                "Apply various analytical techniques to extract meaningful insights from data",
                "Contribute effectively to academic research and educational projects"
            ]
        },
        {
            title: "Master Thesis",
            company: "Fraunhofer IFAM",
            date: "Apr 2024 - Nov 2024 · 8 mos",
            location: "Dresden, Saxony, Germany · Hybrid",
            type: "Work Study",
            project: "Electrode Surface Analysis for Coating & Delamination Detection",
            technologies: ["Python", "OpenCV", "scikit-image", "Fiji (ImageJ)", "TensorFlow/Keras", "U-Net"],
            responsibilities: [
                "Accurately detected and quantified coating coverage, delamination, overall area, substrate covered area and uncovered areas on electrode cross-sectional images",
                "Implemented robust classical pipeline with CLAHE, Gaussian normalization, adaptive thresholding, and morphological filtering",
                "Segmented critical regions: covered coating, uncovered substrate, delaminated areas, and coating continuity",
                "Quantified region boundaries using contour length analysis to calculate physical lengths (in µm) based on pixel scaling",
                "Created pixel-wise labeled masks in Fiji to train a U-Net model for multi-class segmentation",
                "Developed data preparation pipeline for mask-image pairing and normalization",
                "Improved segmentation accuracy across lighting variations and material textures",
                "Enabled precise measurement of functional coating performance areas, aiding material characterization and failure analysis"
            ]
        },
        {
            title: "Working Student",
            company: "Fraunhofer IFAM Dresden",
            date: "Jun 2024 - May 2025 · 1 yr",
            location: "Dresden, Saxony, Germany · Hybrid",
            type: "Part-time",
            responsibilities: [
                "Focus on software development using Python for data analysis applications",
                "Created modules for outlier detection utilizing curve fitting, K-means, and DBSCAN algorithms",
                "Developed comprehensive data analysis module using Streamlit, Pandas, NumPy, Plotly, Scikit-learn, and SciPy",
                "Delivered robust, scalable solutions for complex data processing tasks",
                "Enhanced proficiency in software development and data science"
            ]
        }
    ];

    return (
        <section id="experience" className="section">
            <div className="container">
                <h2>Experience</h2>
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-item">
                        <div className="experience-header">
                            <div>
                                <h4>{exp.title}</h4>
                                <p className="text-muted" style={{ marginBottom: '0.25rem', fontWeight: 500 }}>
                                    {exp.company} · {exp.type}
                                </p>
                                {exp.project && (
                                    <p className="text-muted" style={{ marginBottom: '0.25rem', fontSize: '0.95rem' }}>
                                        <strong>Project:</strong> {exp.project}
                                    </p>
                                )}
                                <p className="text-muted" style={{ marginBottom: '0.25rem', fontSize: '0.9rem' }}>
                                    {exp.location}
                                </p>
                            </div>
                            <span className="experience-date">{exp.date}</span>
                        </div>

                        {exp.technologies && (
                            <div style={{ marginTop: '0.75rem', marginBottom: '0.75rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {exp.technologies.map((tech, i) => (
                                    <span key={i} className="skill-badge" style={{ fontSize: '0.8rem', padding: '0.25rem 0.75rem' }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}

                        <ul>
                            {exp.responsibilities.map((resp, i) => (
                                <li key={i}>{resp}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
