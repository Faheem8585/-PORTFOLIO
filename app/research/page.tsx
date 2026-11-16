import React from 'react';
import { Metadata } from 'next';
import Section from '@/components/ui/Section';

export const metadata: Metadata = {
    title: 'Research & Presentations | Portfolio',
    description: 'Research work, conference presentations, and academic contributions',
};

export default function ResearchPage() {
    const presentations = [
        {
            title: 'Invited research presentation',
            venue: 'Institute for Software and Systems Engineering, TU Clausthal',
            date: 'July 2026',
            type: 'invited talk',
            detail: 'Invited to present on human-in-the-loop system design to the software and systems engineering group.',
        },
        {
            title: 'Poster presentation',
            venue: 'dida Machine Learning Conference 2026, Berlin',
            date: '2026',
            type: 'poster',
            detail: 'Presented applied machine learning work to an industry and research audience.',
        },
        {
            title: 'Poster presentation and finalist',
            venue: 'Decarbon Days 2026, Cottbus',
            date: '2026',
            type: 'poster',
            detail: 'Selected as a finalist for work connected to decarbonisation and hydrogen technology.',
        },
    ];

    const areas = [
        {
            title: 'Scientific and Medical Image Analysis',
            body: 'Segmentation and quantification on imaging data where the answer has to be measurable: electrode cross-sections, MicroCT volumes, hippocampus MRI, and videomicroscopy. The recurring theme is building a second, independent route to the same number so the first one can be checked.',
        },
        {
            title: 'Validation and Honest Evaluation',
            body: 'Most reported model performance is a validation score presented as a test score. My work puts effort into the distinction: simulators with known ground truth, held-out test splits reported separately, blind baselines that reveal when a model is reading a shortcut rather than the data.',
        },
        {
            title: 'Human-in-the-Loop and Systems Engineering',
            body: 'How automated components and human judgement share a task, and where the handover should sit. Presented on this at TU Clausthal and carried it into work on requirement extraction from procurement documents, where full automation is the wrong target.',
        },
        {
            title: 'Retrieval-Augmented Generation on Technical Documents',
            body: 'Hybrid retrieval over specialised corpora: CFD and OpenFOAM documentation, procurement tenders, internal company records. Dense and sparse retrieval combined, with the consolidation step treated as the hard part rather than an afterthought.',
        },
        {
            title: 'Computational Neuroscience and Neural Signal Processing',
            body: 'Three years of EEG acquisition and analysis in the Computational Neuroscience group at BTU, alongside seven taught modules including brain-computer interfaces, neural signal processing, and modelling of perception and action.',
        },
        {
            title: 'Efficient Deep Learning on Constrained Hardware',
            body: 'Several projects are built deliberately for CPU-only training and inference, using patch sampling, gradient accumulation and smaller backbones such as MobileNetV2, so the results can be reproduced without a GPU budget.',
        },
    ];

    const cardStyle: React.CSSProperties = {
        background: 'white',
        padding: '1.5rem',
        borderRadius: '12px',
        border: '1px solid var(--border)',
        marginBottom: '1.25rem',
    };

    return (
        <>
            <Section>
                <div>
                    <h2>Research &amp; Presentations</h2>
                    <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2.5rem', maxWidth: '760px' }}>
                        My research sits where computer vision meets measurement: problems in which a model
                        has to produce a number somebody will act on, and the number has to be checkable.
                    </p>

                    {/* Presentations */}
                    <div style={{ marginBottom: '3rem' }}>
                        <h3 style={{ marginBottom: '1.25rem' }}>Presentations</h3>
                        {presentations.map((item, index) => (
                            <div key={index} style={cardStyle}>
                                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '0.4rem' }}>
                                    <h4 style={{ margin: 0 }}>{item.title}</h4>
                                    <span className="experience-date">{item.date}</span>
                                </div>
                                <p className="text-muted" style={{ fontWeight: 500, marginBottom: '0.4rem' }}>{item.venue}</p>
                                <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '0.9rem' }}>{item.detail}</p>
                                <span className="skill-badge" style={{ fontSize: '0.78rem', padding: '0.25rem 0.75rem' }}>{item.type}</span>
                            </div>
                        ))}
                    </div>

                    {/* Research Areas */}
                    <div style={{ marginBottom: '3rem' }}>
                        <h3 style={{ marginBottom: '1.25rem' }}>Research Areas</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
                            {areas.map((area, index) => (
                                <div key={index} className="project-card" style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border)' }}>
                                    <h4 style={{ marginBottom: '0.6rem' }}>{area.title}</h4>
                                    <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>{area.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Doctoral candidacy */}
                    <div style={{ marginBottom: '3rem' }}>
                        <h3 style={{ marginBottom: '1.25rem' }}>Doctoral Applications</h3>
                        <div style={cardStyle}>
                            <p className="text-muted" style={{ fontSize: '0.98rem', lineHeight: '1.8', margin: 0 }}>
                                In 2026 I was shortlisted to the final five of roughly 220 applicants for a
                                doctoral position in model-based systems engineering at TU Clausthal, after
                                five interview rounds including a presentation on human-in-the-loop system
                                design. The position went to another candidate. I am actively seeking a
                                doctoral position in computer vision, applied machine learning, or the
                                intersection of the two with systems engineering.
                            </p>
                        </div>
                    </div>

                    {/* Publications */}
                    <div>
                        <h3 style={{ marginBottom: '1.25rem' }}>Publications</h3>
                        <div style={cardStyle}>
                            <p className="text-muted" style={{ fontSize: '0.98rem', lineHeight: '1.8', margin: 0 }}>
                                Two manuscripts are in preparation. I have no peer-reviewed publications yet,
                                and would rather say so plainly than pad this page. My written output so far
                                is in the project repositories, where the method, the measured result and the
                                known limitations are documented in full.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
