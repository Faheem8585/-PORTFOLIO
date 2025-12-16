import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import { Publication } from '@/lib/types';

export const metadata: Metadata = {
    title: 'Research & Publications | Portfolio',
    description: 'Research work, publications, and academic contributions',
};

export default function ResearchPage() {
    // Sample publications - replace with actual data
    const publications: Publication[] = [
        // Add your publications here as they become available
    ];

    return (
        <>
            <Section className="pt-32 pb-16">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Research & Publications</h1>
                    <p className="text-xl text-muted mb-16">
                        My research focuses on advancing computer vision and machine learning techniques
                        with applications in healthcare, biology, and environmental sciences.
                    </p>

                    {/* Research Interests */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-semibold mb-6">Research Areas</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 bg-card-bg border border-card-border rounded-lg">
                                <h3 className="font-semibold text-lg mb-2">Deep Learning Architectures</h3>
                                <p className="text-sm text-muted">
                                    Developing novel neural network architectures for improved performance
                                    in object detection, segmentation, and classification tasks.
                                </p>
                            </div>
                            <div className="p-6 bg-card-bg border border-card-border rounded-lg">
                                <h3 className="font-semibold text-lg mb-2">Medical Image Analysis</h3>
                                <p className="text-sm text-muted">
                                    Applying computer vision to medical imaging for automated diagnosis,
                                    cell counting, and biological sample analysis.
                                </p>
                            </div>
                            <div className="p-6 bg-card-bg border border-card-border rounded-lg">
                                <h3 className="font-semibold text-lg mb-2">Real-time Detection Systems</h3>
                                <p className="text-sm text-muted">
                                    Building efficient algorithms for real-time object detection and tracking
                                    in video streams with optimized inference pipelines.
                                </p>
                            </div>
                            <div className="p-6 bg-card-bg border border-card-border rounded-lg">
                                <h3 className="font-semibold text-lg mb-2">Physics-Informed ML</h3>
                                <p className="text-sm text-muted">
                                    Integrating physical principles and domain knowledge into machine learning
                                    models for improved interpretability and performance.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Publications Section */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-semibold mb-6">Publications</h2>
                        {publications.length === 0 ? (
                            <div className="p-8 bg-hover-bg/30 rounded-lg text-center">
                                <p className="text-muted">
                                    Publications and conference papers in preparation. Check back soon for updates.
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {publications.map((pub, index) => (
                                    <div key={index} className="p-6 bg-card-bg border border-card-border rounded-lg">
                                        <h3 className="font-semibold text-lg mb-2">{pub.title}</h3>
                                        <p className="text-sm text-muted mb-2">
                                            {pub.authors.join(', ')} • {pub.year}
                                        </p>
                                        <p className="text-sm mb-2">{pub.venue}</p>
                                        <span className="inline-block px-2 py-1 text-xs bg-primary-light text-primary rounded">
                                            {pub.type}
                                        </span>
                                        {pub.link && (
                                            <a
                                                href={pub.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="ml-4 text-sm text-primary hover:text-primary-dark"
                                            >
                                                View Paper →
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Ongoing Projects */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-6">Ongoing Research</h2>
                        <div className="space-y-4">
                            <div className="p-6 bg-card-bg border border-card-border rounded-lg">
                                <h3 className="font-semibold mb-2">Automated Biological Analysis</h3>
                                <p className="text-sm text-muted">
                                    Developing computer vision pipelines for automated analysis of biological samples,
                                    including cell tracking, morphology analysis, and quantitative measurements.
                                </p>
                            </div>
                            <div className="p-6 bg-card-bg border border-card-border rounded-lg">
                                <h3 className="font-semibold mb-2">Fraud Detection Systems</h3>
                                <p className="text-sm text-muted">
                                    Machine learning approaches for detecting anomalous patterns in transaction data
                                    with focus on interpretability and real-time performance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
