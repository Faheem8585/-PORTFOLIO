export default function Experience() {
    const experiences = [
        {
            title: "Research / Teaching Assistant",
            company: "Brandenburgische Technische Universität Cottbus-Senftenberg",
            date: "Oct 2023 - Oct 2026 · 3 yrs 1 mo",
            location: "Cottbus, Brandenburg, Germany · On-site",
            type: "Part-time",
            project: "Chair of Computational Neuroscience",
            technologies: ["Python", "NumPy", "SciPy", "MNE", "Signal Processing", "MATLAB"],
            responsibilities: [
                "Collected EEG data from study participants and managed the full data lifecycle from acquisition through to analysis",
                "Built preprocessing pipelines for filtering, artefact removal and epoching to keep recordings accurate and consistent across sessions",
                "Applied statistical and machine learning methods to extract usable signal from noisy, high-dimensional recordings",
                "Supported laboratory teaching and supervised students through practical sessions and project work",
                "Contributed to ongoing academic research and educational projects in the department"
            ]
        },
        {
            title: "Master Thesis Researcher",
            company: "Fraunhofer IFAM Dresden",
            date: "Apr 2025 - Nov 2025 · 8 mos",
            location: "Dresden, Saxony, Germany · Hybrid",
            type: "Part-time",
            project: "Electrode Surface Analysis for Coating and Delamination Detection",
            technologies: ["Python", "OpenCV", "scikit-image", "Fiji (ImageJ)", "TensorFlow/Keras", "U-Net", "MicroCT"],
            responsibilities: [
                "Detected and quantified coating coverage, delamination, total area, covered substrate and uncovered regions on electrode cross-sectional images",
                "Built two independent pipelines that cross-check one another: a classical computer vision route and a learned U-Net route, so neither result has to be trusted on its own",
                "Classical pipeline used CLAHE, Gaussian normalisation, adaptive thresholding and morphological filtering",
                "Hand-labelled pixel-wise masks in Fiji to train the U-Net for multi-class segmentation, with a data preparation pipeline for mask and image pairing",
                "Measured region boundaries by contour length analysis, converting pixels to physical micrometres through the image scaling factor",
                "Held segmentation accuracy stable across lighting variation and differing material textures",
                "Enabled precise measurement of functional coating area, supporting material characterisation and failure analysis",
                "Work and thesis recognised in a formal Fraunhofer reference letter"
            ]
        },
        {
            title: "Research Assistant",
            company: "Fraunhofer IFAM Dresden",
            date: "Jun 2024 - May 2025 · 1 yr",
            location: "Dresden, Saxony, Germany · Hybrid",
            type: "Part-time",
            project: "Hydrogen Technology department",
            technologies: ["Python", "Streamlit", "Pandas", "NumPy", "Plotly", "scikit-learn", "SciPy", "MongoDB"],
            responsibilities: [
                "Developed Python software for scientific data analysis used by physicists, materials scientists and engineers in the department",
                "Built outlier detection modules combining curve fitting with k-Means and DBSCAN clustering",
                "Delivered a full data analysis application in Streamlit over Pandas, NumPy, Plotly, scikit-learn and SciPy",
                "Designed MongoDB collections and schemas, aggregation pipelines and indexing alongside relational stores",
                "Worked directly with domain scientists to turn their measurement questions into reproducible analysis code"
            ]
        },
        {
            title: "ML Engineer and Data Scientist",
            company: "JAYZENAI LTD",
            date: "Jan 2021 - Nov 2022 · 1 yr 11 mos",
            location: "Islamabad, Pakistan",
            type: "Full-time",
            technologies: ["Python", "scikit-learn", "TensorFlow", "OpenCV", "FastAPI", "PostgreSQL", "Docker"],
            responsibilities: [
                "Built and deployed machine learning and computer vision services for healthcare and finance clients, taking work from first analysis through to a running product",
                "Owned data preparation, model training, containerised deployment and the API layer other teams consumed",
                "Worked on fraud detection and risk scoring for financial clients, and analytics pipelines for healthcare clients",
                "Monitored models in production and handled the issues that surfaced once real traffic reached them",
                "Dealt directly with clients to turn loosely specified business problems into something measurable"
            ]
        },
        {
            title: "Intern, Digital Marketing and Analytics",
            company: "Zameen.com",
            date: "Jun 2020 - Dec 2020 · 7 mos",
            location: "Lahore, Pakistan",
            type: "Internship",
            technologies: ["YouTube Studio", "Analytics", "Content Strategy"],
            responsibilities: [
                "Managed social media accounts and supported content creation and marketing campaigns",
                "Ran the company YouTube channel through YouTube Studio and reported on channel performance",
                "Produced analytics summaries that fed into marketing decisions"
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
