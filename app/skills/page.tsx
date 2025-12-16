import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import { SkillCategory } from '@/lib/types';

export const metadata: Metadata = {
    title: 'Skills | Portfolio',
    description: 'Technical skills and expertise in programming, machine learning, data science, and research',
};

export default function SkillsPage() {
    const skillCategories: SkillCategory[] = [
        {
            category: 'Programming Languages',
            skills: [
                { name: 'Python' },
                { name: 'MATLAB' },
                { name: 'JavaScript/TypeScript' },
                { name: 'SQL' },
                { name: 'C++' },
                { name: 'R' },
            ],
        },
        {
            category: 'Machine Learning & AI',
            skills: [
                { name: 'TensorFlow' },
                { name: 'PyTorch' },
                { name: 'Scikit-learn' },
                { name: 'Keras' },
                { name: 'YOLOv8/YOLOv5' },
                { name: 'Hugging Face' },
            ],
        },
        {
            category: 'Computer Vision',
            skills: [
                { name: 'OpenCV' },
                { name: 'Detectron2' },
                { name: 'MediaPipe' },
                { name: 'Image Processing' },
                { name: 'Object Detection' },
                { name: 'Segmentation' },
            ],
        },
        {
            category: 'Data Science & Analysis',
            skills: [
                { name: 'NumPy' },
                { name: 'Pandas' },
                { name: 'Matplotlib/Seaborn' },
                { name: 'Plotly' },
                { name: 'Statistical Analysis' },
                { name: 'Data Visualization' },
            ],
        },
        {
            category: 'Web Development',
            skills: [
                { name: 'Streamlit' },
                { name: 'Next.js' },
                { name: 'React' },
                { name: 'FastAPI' },
                { name: 'Flask' },
                { name: 'Node.js' },
            ],
        },
        {
            category: 'Tools & Technologies',
            skills: [
                { name: 'Git/GitHub' },
                { name: 'Docker' },
                { name: 'Linux/Unix' },
                { name: 'Jupyter Notebooks' },
                { name: 'VS Code' },
                { name: 'Google Colab' },
            ],
        },
        {
            category: 'Scientific Computing',
            skills: [
                { name: 'SciPy' },
                { name: 'OpenFOAM' },
                { name: 'Numerical Methods' },
                { name: 'CFD Analysis' },
                { name: 'Simulation' },
                { name: 'Mathematical Modeling' },
            ],
        },
        {
            category: 'Research & Analytical Skills',
            skills: [
                { name: 'Experimental Design' },
                { name: 'Literature Review' },
                { name: 'Technical Writing' },
                { name: 'Data Analysis' },
                { name: 'Problem Solving' },
                { name: 'Critical Thinking' },
            ],
        },
    ];

    return (
        <>
            <Section className="pt-32 pb-16">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h1>
                    <p className="text-xl text-muted mb-16">
                        A comprehensive overview of my technical skills, tools, and methodologies
                        across data science, machine learning, and research.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skillCategories.map((category) => (
                            <div
                                key={category.category}
                                className="p-6 bg-card-bg border border-card-border rounded-lg"
                            >
                                <h2 className="text-xl font-semibold mb-4">{category.category}</h2>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill.name}
                                            className="px-3 py-1.5 bg-primary-light text-primary text-sm rounded-md"
                                        >
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </>
    );
}
