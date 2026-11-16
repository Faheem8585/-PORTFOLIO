export default function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2>About</h2>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--foreground)' }}>
                    Hey 👋 I am an AI Engineer and Data Scientist based in Berlin, with a master&apos;s
                    in Artificial Intelligence from BTU Cottbus-Senftenberg. I work on computer vision
                    and machine learning systems, and I take them the whole way: data preparation,
                    model training, containerised deployment, and the API other people actually use.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--foreground)' }}>
                    Most of my work has been scientific and medical imaging. At Fraunhofer IFAM Dresden
                    I analysed electrode surfaces for coating and delamination, building a classical
                    computer vision pipeline and a learned U-Net pipeline so the two could cross-check
                    each other. At BTU I spent three years collecting and analysing EEG data in the
                    Computational Neuroscience group. Before Germany, I built and shipped production ML
                    for healthcare and finance clients in Islamabad.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--foreground)' }}>
                    What I care about is whether a result is real. A model that scores well on the split
                    it was tuned on has not proved anything yet, so most of my projects include some way
                    of checking the answer against a known truth: a simulator with ground truth, a held
                    out test set reported separately from validation, or a second pipeline built on
                    different principles. When something does not hold up, I would rather write that
                    down in the README than quietly report the better number.
                </p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--foreground)' }}>
                    I hold a valid German work permit and I am open to roles anywhere in Germany.
                </p>
            </div>
        </section>
    );
}
