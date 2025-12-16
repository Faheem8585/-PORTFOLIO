import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
    title: 'CV / Resume | Portfolio',
    description: 'Download my CV or view my experience, education, and qualifications',
};

export default function CVPage() {
    return (
        <>
            <Section className="pt-32 pb-16">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Curriculum Vitae</h1>
                            <p className="text-xl text-muted">
                                My academic and professional background
                            </p>
                        </div>
                        <Button href="/cv/resume.pdf" variant="primary" size="md" className="mt-4 md:mt-0">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download PDF
                        </Button>
                    </div>

                    {/* Education */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-border">Education</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold">Your Degree</h3>
                                <p className="text-muted">University Name • Year - Year</p>
                                <p className="text-sm mt-2">
                                    Relevant coursework, thesis topic, or notable achievements
                                </p>
                            </div>
                            {/* Add more education entries as needed */}
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-border">Experience</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold">Position Title</h3>
                                <p className="text-muted">Organization • Year - Year</p>
                                <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                                    <li>Key responsibility or achievement</li>
                                    <li>Another important contribution</li>
                                    <li>Technical skills or impact</li>
                                </ul>
                            </div>
                            {/* Add more experience entries */}
                        </div>
                    </div>

                    {/* Research Experience */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-border">
                            Research Experience
                        </h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold">Research Project Title</h3>
                                <p className="text-muted">Institution • Year - Year</p>
                                <p className="text-sm mt-2">
                                    Brief description of research focus, methodologies used, and outcomes
                                </p>
                            </div>
                            {/* Add more research entries */}
                        </div>
                    </div>

                    {/* Publications */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-border">Publications</h2>
                        <div className="p-6 bg-hover-bg/30 rounded-lg">
                            <p className="text-muted text-sm">
                                Publications in preparation. See{' '}
                                <a href="/research" className="text-primary hover:text-primary-dark">
                                    Research page
                                </a>{' '}
                                for ongoing work.
                            </p>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-border">
                            Technical Skills
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h3 className="font-semibold mb-2">Programming</h3>
                                <p className="text-sm text-muted">Python, MATLAB, JavaScript, SQL, C++</p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">ML/AI Frameworks</h3>
                                <p className="text-sm text-muted">TensorFlow, PyTorch, Scikit-learn, OpenCV</p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Data Science</h3>
                                <p className="text-sm text-muted">NumPy, Pandas, Matplotlib, Statistical Analysis</p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Tools</h3>
                                <p className="text-sm text-muted">Git, Docker, Linux, Jupyter, VS Code</p>
                            </div>
                        </div>
                        <p className="text-sm text-muted mt-4">
                            See full{' '}
                            <a href="/skills" className="text-primary hover:text-primary-dark">
                                skills list
                            </a>
                        </p>
                    </div>

                    {/* Awards & Honors */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-border">
                            Awards & Honors
                        </h2>
                        <div className="space-y-3">
                            <div>
                                <h3 className="font-semibold">Award Name</h3>
                                <p className="text-sm text-muted">Organization • Year</p>
                            </div>
                            {/* Add awards as needed */}
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
