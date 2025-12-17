'use client';

export default function Skills() {
    const skills = [
        // Programming Languages
        { name: 'Python', proficiency: 90 },
        { name: 'JavaScript', proficiency: 75 },
        { name: 'C++', proficiency: 70 },
        { name: 'SQL', proficiency: 80 },

        // Deep Learning & ML Frameworks
        { name: 'TensorFlow', proficiency: 85 },
        { name: 'PyTorch', proficiency: 80 },
        { name: 'Scikit-learn', proficiency: 90 },
        { name: 'Keras', proficiency: 85 },

        // Computer Vision
        { name: 'OpenCV', proficiency: 85 },
        { name: 'YOLOv8', proficiency: 85 },
        { name: 'MediaPipe', proficiency: 80 },
        { name: 'scikit-image', proficiency: 85 },

        // ML/DL Models & Techniques
        { name: 'U-Net', proficiency: 85 },
        { name: 'ResNet-18', proficiency: 80 },
        { name: 'ResNet-30', proficiency: 85 },
        { name: 'SMOTE', proficiency: 85 },
        { name: 'Computer Vision', proficiency: 90 },
        { name: 'Deep Learning', proficiency: 85 },
        { name: 'Machine Learning', proficiency: 90 },

        // Data Science & Analysis
        { name: 'Pandas', proficiency: 90 },
        { name: 'NumPy', proficiency: 90 },
        { name: 'SciPy', proficiency: 85 },
        { name: 'Matplotlib', proficiency: 85 },
        { name: 'Seaborn', proficiency: 85 },
        { name: 'Plotly', proficiency: 80 },
        { name: 'Data Analysis', proficiency: 85 },
        { name: 'Power BI', proficiency: 75 },

        // Specialized Libraries
        { name: 'FilterPy', proficiency: 80 },
        { name: 'Streamlit', proficiency: 85 },
        { name: 'Flask', proficiency: 80 },

        // Web Development
        { name: 'React/Next.js', proficiency: 80 },
        { name: 'Flutter', proficiency: 70 },

        // DevOps & Tools
        { name: 'Git', proficiency: 85 },
        { name: 'GitHub', proficiency: 85 },
        { name: 'Docker', proficiency: 70 },
        { name: 'CI/CD', proficiency: 75 },

        // Cloud & Databases
        { name: 'AWS', proficiency: 70 },
        { name: 'Firebase', proficiency: 75 },
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
