import { Metadata } from 'next';
import Section from '@/components/ui/Section';

export const metadata: Metadata = {
    title: 'About | Portfolio',
    description: 'Learn about my background, research interests, and career goals in data science and machine learning',
};

export default function AboutPage() {
    return (
        <>
            <Section className="pt-32 pb-16">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
                    <p className="text-xl text-muted mb-12">
                        Data scientist and researcher passionate about leveraging machine learning
                        and computer vision to solve complex real-world problems.
                    </p>

                    {/* Academic Background */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">Academic Background</h2>
                        <p className="text-muted mb-4">
                            I am pursuing advanced research in data science with a focus on computer vision,
                            machine learning, and physics-inspired modeling. My interdisciplinary approach
                            combines rigorous analytical methods with practical application development.
                        </p>
                        <p className="text-muted">
                            My academic journey has equipped me with strong foundations in mathematics,
                            statistics, and computational methods, enabling me to tackle challenging
                            problems across diverse domains.
                        </p>
                    </div>

                    {/* Research Interests */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">Research Interests</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 bg-card-bg border border-card-border rounded-lg">
                                <h3 className="font-semibold text-lg mb-2">Computer Vision</h3>
                                <p className="text-sm text-muted">
                                    Object detection, image segmentation, video analysis, and deep learning
                                    architectures for visual understanding.
                                </p>
                            </div>
                            <div className="p-6 bg-card-bg border border-card-border rounded-lg">
                                <h3 className="font-semibold text-lg mb-2">Machine Learning</h3>
                                <p className="text-sm text-muted">
                                    Deep learning, neural networks, model optimization, and applications
                                    in classification, detection, and prediction tasks.
                                </p>
                            </div>
                            <div className="p-6 bg-card-bg border border-card-border rounded-lg">
                                <h3 className="font-semibold text-lg mb-2">Data Science</h3>
                                <p className="text-sm text-muted">
                                    Statistical analysis, data visualization, pipeline development,
                                    and end-to-end solution architecture.
                                </p>
                            </div>
                            <div className="p-6 bg-card-bg border border-card-border rounded-lg">
                                <h3 className="font-semibold text-lg mb-2">Scientific Computing</h3>
                                <p className="text-sm text-muted">
                                    Physics-inspired modeling, numerical methods, simulation,
                                    and computational fluid dynamics applications.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Career Goals */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">Career Goals</h2>
                        <p className="text-muted mb-4">
                            I am actively pursuing PhD opportunities to deepen my research in machine learning
                            and computer vision. My goal is to contribute to cutting-edge research while
                            developing practical solutions that bridge the gap between academic innovation
                            and real-world applications.
                        </p>
                        <p className="text-muted">
                            I&apos;m particularly interested in research positions that allow me to explore novel
                            architectures, contribute to open-source projects, and collaborate with
                            interdisciplinary teams on challenging problems in healthcare, biology,
                            and environmental sciences.
                        </p>
                    </div>

                    {/* Interdisciplinary Focus */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Interdisciplinary Approach</h2>
                        <p className="text-muted">
                            My work spans multiple disciplines, combining insights from computer science,
                            physics, biology, and engineering. This interdisciplinary perspective enables
                            me to approach problems from unique angles and develop innovative solutions
                            that leverage the best of each field.
                        </p>
                    </div>
                </div>
            </Section>
        </>
    );
}
