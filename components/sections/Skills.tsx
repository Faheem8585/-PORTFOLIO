'use client';

export default function Skills() {
    const skills = [
        { name: 'Python', proficiency: 90 },
        { name: 'TensorFlow', proficiency: 85 },
        { name: 'PyTorch', proficiency: 80 },
        { name: 'OpenCV', proficiency: 85 },
        { name: 'Scikit-learn', proficiency: 90 },
        { name: 'YOLOv8', proficiency: 85 },
        { name: 'Computer Vision', proficiency: 90 },
        { name: 'Deep Learning', proficiency: 85 },
        { name: 'Machine Learning', proficiency: 90 },
        { name: 'Data Analysis', proficiency: 85 },
        { name: 'Pandas', proficiency: 90 },
        { name: 'NumPy', proficiency: 90 },
        { name: 'JavaScript', proficiency: 75 },
        { name: 'React/Next.js', proficiency: 80 },
        { name: 'Flutter', proficiency: 70 },
        { name: 'Firebase', proficiency: 75 },
        { name: 'Docker', proficiency: 70 },
        { name: 'Git', proficiency: 85 },
        { name: 'GitHub', proficiency: 85 },
        { name: 'CI/CD', proficiency: 75 },
        { name: 'SQL', proficiency: 80 },
        { name: 'AWS', proficiency: 70 },
        { name: 'Power BI', proficiency: 75 },
        { name: 'C++', proficiency: 70 },
    ];

    return (
        <section id="skills" className="section">
            <div className="container">
                <h2>Skills</h2>
                <h4 className="mb-4 text-muted" style={{ fontWeight: 400 }}>
                    Hover over a skill for current proficiency
                </h4>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '1rem'
                }}>
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <span>{skill.name}</span>
                            <span className="skill-percentage">{skill.proficiency}%</span>
                            <div className="progress-bar" style={{ width: `${skill.proficiency}%` }}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
