import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { message, history } = await req.json();

        // Knowledge base about Faheem
        const systemPrompt = `You are Faheem's AI portfolio assistant. You help visitors learn about Muhammad Faheem Arshad, an AI Engineer and Data Scientist based in Berlin, Germany.

BACKGROUND:
- AI Engineer and Data Scientist specialising in machine learning, computer vision and data science
- Based in Berlin, Germany. Holds a valid German work permit. English professional, German A1 and improving.
- Core expertise: computer vision, ML engineering and data science, with a strong line in scientific and medical imaging
- Works end to end: data preparation, model training, containerised deployment and the API layer other teams consume

EDUCATION:
- MSc Artificial Intelligence, Brandenburgische Technische Universität Cottbus-Senftenberg (Apr 2023 to Nov 2025). Final grade 2.3; Research Module 1.0. Degree awarded 4 November 2025. Taught and examined entirely in English.
- BSc Computer Science, Riphah International University, Islamabad (Sep 2018 to Aug 2022). CGPA 3.70 / 4.00, assessed as 1.4 on the German scale.

PROFESSIONAL EXPERIENCE:
- Research and Teaching Assistant, BTU Cottbus-Senftenberg, Chair of Computational Neuroscience (Oct 2023 to Oct 2026). Collected EEG data from study participants, built preprocessing pipelines for filtering, artefact removal and epoching, applied statistical and machine learning analysis, and supported laboratory teaching.
- Master Thesis Researcher, Fraunhofer IFAM Dresden (Apr 2025 to Nov 2025). Electrode surface analysis for coating and delamination detection. Built two independent pipelines that cross-check one another, a classical computer vision route and a learned U-Net route. Python, OpenCV, scikit-image, Fiji, TensorFlow/Keras. The work and thesis were recognised in a formal Fraunhofer reference letter.
- Research Assistant, Fraunhofer IFAM Dresden, Hydrogen Technology department (Jun 2024 to May 2025). Python software for scientific data analysis; outlier detection with curve fitting, k-Means and DBSCAN; a Streamlit analysis application; MongoDB schema and aggregation design.
- ML Engineer and Data Scientist, JAYZENAI LTD, Islamabad (Jan 2021 to Nov 2022). Built and deployed machine learning and computer vision services for healthcare and finance clients, including fraud detection and risk scoring, from first analysis through to a running product.
- Intern, Digital Marketing and Analytics, Zameen.com, Lahore (Jun 2020 to Dec 2020).

SCIENTIFIC COMMUNICATION:
- Invited research presentation, Institute for Software and Systems Engineering, TU Clausthal, July 2026
- Poster presentation, dida Machine Learning Conference 2026, Berlin
- Poster presentation and finalist, Decarbon Days 2026, Cottbus
- Two manuscripts in preparation. No peer-reviewed publications yet.
- In 2026 shortlisted to the final five of roughly 220 applicants for a doctoral position in model-based systems engineering at TU Clausthal, through five interview rounds.

SKILLS:
- Languages: Python (primary), C++ (four years during the BSc), SQL, JavaScript and TypeScript, Java, Dart
- Deep learning: PyTorch, TensorFlow and Keras, MONAI, scikit-learn
- Computer vision: OpenCV, scikit-image, U-Net, YOLOv8, MobileNetV2, Grad-CAM, MediaPipe
- LLM and RAG: LangChain, LangGraph, ChromaDB, Qdrant, pgvector, BM25 and hybrid retrieval, MCP servers
- Data: Pandas, NumPy, SciPy, Plotly, Matplotlib, Seaborn, Power BI, PostgreSQL, MongoDB
- Engineering: FastAPI, Streamlit, Flask, Docker and Docker Compose, Kubernetes with Helm, GitHub Actions CI/CD, pytest, Prometheus and Grafana, Git
- Cloud: Google Cloud Platform and Firebase, AWS at certificate level

Answer questions concisely, accurately and professionally. Never invent figures, dates or job titles. If you do not know something, say so honestly and point the visitor at the contact page.`;

        const response = generateResponse(message.toLowerCase(), systemPrompt);

        return NextResponse.json({ message: response });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to process request' },
            { status: 500 }
        );
    }
}

function generateResponse(message: string, systemPrompt: string): string {
    if (message.includes('contact') || message.includes('reach') || message.includes('email') || message.includes('hire')) {
        return "You can reach Faheem through:\n\n• Email: faheemarshad381999@icloud.com\n• LinkedIn: linkedin.com/in/muhammadfaheemarshad99\n• GitHub: github.com/Faheem8585\n\nHe is based in Berlin and holds a valid German work permit. Use the 'Get in touch' button to send a message directly.";
    }

    if (message.includes('education') || message.includes('degree') || message.includes('university') || message.includes('study')) {
        return "Faheem's education:\n\n• MSc Artificial Intelligence\n  Brandenburgische Technische Universität Cottbus-Senftenberg\n  April 2023 to November 2025, final grade 2.3, Research Module 1.0\n  Taught and examined entirely in English\n\n• BSc Computer Science\n  Riphah International University, Islamabad\n  September 2018 to August 2022\n  CGPA 3.70 / 4.00, assessed as 1.4 on the German scale\n\nHis master's thesis was carried out with Fraunhofer IFAM Dresden.";
    }

    if (message.includes('experience') || message.includes('background') || message.includes('career') || message.includes('job')) {
        return "Faheem's professional experience:\n\n• Research and Teaching Assistant, BTU Cottbus-Senftenberg, Computational Neuroscience (Oct 2023 to Oct 2026) — EEG data collection, preprocessing pipelines and analysis\n\n• Master Thesis Researcher, Fraunhofer IFAM Dresden (Apr to Nov 2025) — electrode surface analysis, classical CV and U-Net pipelines cross-checking each other\n\n• Research Assistant, Fraunhofer IFAM Dresden (Jun 2024 to May 2025) — scientific data analysis software, outlier detection, Streamlit tooling\n\n• ML Engineer and Data Scientist, JAYZENAI LTD, Islamabad (Jan 2021 to Nov 2022) — production ML and computer vision for healthcare and finance clients\n\n• Intern, Zameen.com, Lahore (2020)\n\nHe works end to end, from data preparation through to deployment.";
    }

    if (message.includes('research') || message.includes('publication') || message.includes('paper') || message.includes('conference')) {
        return "Faheem's research and scientific communication:\n\n• Invited research presentation, Institute for Software and Systems Engineering, TU Clausthal, July 2026\n• Poster, dida Machine Learning Conference 2026, Berlin\n• Poster and finalist, Decarbon Days 2026, Cottbus\n• Two manuscripts in preparation\n\nHe has no peer-reviewed publications yet. In 2026 he was shortlisted to the final five of around 220 applicants for a doctoral position in model-based systems engineering at TU Clausthal, after five interview rounds.";
    }

    if (message.includes('skill') || message.includes('technology') || message.includes('stack') || message.includes('language')) {
        return "Faheem's technical skills:\n\n• Languages: Python, C++, SQL, TypeScript and JavaScript\n• Deep learning: PyTorch, TensorFlow and Keras, MONAI, scikit-learn\n• Computer vision: OpenCV, scikit-image, U-Net, YOLOv8, MobileNetV2, Grad-CAM\n• LLM and RAG: LangChain, LangGraph, ChromaDB, Qdrant, pgvector, hybrid BM25 retrieval, MCP servers\n• Data: Pandas, NumPy, SciPy, Plotly, PostgreSQL, MongoDB, Power BI\n• Engineering: FastAPI, Streamlit, Docker, Kubernetes with Helm, GitHub Actions, pytest\n\nAsk about any project and I will tell you which of these it uses.";
    }

    if (message.includes('thesis')) {
        return "Faheem's master's thesis was carried out at Fraunhofer IFAM Dresden between April and November 2025: electrode surface analysis for coating and delamination detection.\n\nThe interesting part is that he built two independent pipelines that cross-check one another. A classical computer vision route using CLAHE, adaptive thresholding and morphological filtering, and a learned U-Net route trained on masks he hand-labelled in Fiji. Neither result has to be trusted on its own.\n\nThe work and the thesis were recognised in a formal Fraunhofer reference letter.\n\nHis bachelor's thesis was Pak Charity, a Flutter and Firebase donation platform.";
    }

    if (message.includes('medical') || message.includes('segmentation') || message.includes('hippocamp')) {
        return "Faheem has several medical imaging projects:\n\n• 3D Medical Segmentation — a MONAI 3D U-Net on the Medical Segmentation Decathlon hippocampus task, trained entirely on CPU with foreground-biased patch sampling. Mean Dice 0.8493 on the held-out split.\n\n• Brain Tumour Detection — MobileNetV2 with Grad-CAM heatmaps, CPU-only, flagging any prediction under 60% confidence.\n\n• Sperm Quantification — motility analysis with Kalman filtering and the Hungarian algorithm, reporting the full WHO 2021 parameter set, validated against a simulator with known ground truth.";
    }

    if (message.includes('sperm') || message.includes('motility')) {
        return "The Sperm Quantification pipeline measures sperm motility from videomicroscopy.\n\n• Multi-object tracking with Kalman filtering and the Hungarian algorithm\n• The full WHO 2021 clinical motility parameter set: VCL, VSL, VAP, LIN, WOB, ALH and BCF\n• Physics-based analysis including mean squared displacement, persistence length and diffusion coefficients\n• An Active Brownian particle simulator generates synthetic trajectories with known ground truth, so the tracker can be checked against a correct answer rather than judged by eye\n\nThat last point matters: most tracking projects have no way to tell whether they are right.";
    }

    if (message.includes('fraud')) {
        return "The Credit Card Fraud Detection project tackles an extremely imbalanced dataset, where genuine fraud is a tiny fraction of transactions.\n\n• SMOTE and related resampling to handle the imbalance\n• Several classifiers compared rather than one picked in advance, with gradient boosting coming out ahead\n• Evaluated on AUC rather than accuracy, because accuracy is meaningless when 99.8% of rows are one class\n• Deployed as a Streamlit dashboard\n\nThe dataset is the public Kaggle credit card fraud set, so the figures are reproducible by anyone.";
    }

    if (message.includes('project') || message.includes('portfolio') || message.includes('built') || message.includes('work')) {
        return "Faheem has published a large body of work on GitHub. Some highlights:\n\n• 3D Medical Segmentation — MONAI 3D U-Net on CPU, mean Dice 0.8493\n• Drone Segmentation — U-Net from scratch, 47.9% mean IoU, recovering rare classes from near zero\n• Tender Extractor — turns procurement PDFs into a structured requirement tree, 506 chunks to 2,684 consolidated requirements\n• JobIntel — job matching engine with a transparent scoring model and an MCP server, 87% test coverage\n• Multimodal Office Platform — RAG platform with pgvector, Kubernetes and Helm\n• AeroLattice — Lattice-Boltzmann wind simulation over real OpenStreetMap building geometry\n• Sperm Quantification — WHO 2021 motility analysis validated against a simulator\n• Construction Monitoring — YOLOv8 detection on construction site video\n\nWhich would you like to hear about? Or browse the Projects page for all of them.";
    }

    if (message.includes('german') || message.includes('language') || message.includes('visa') || message.includes('permit') || message.includes('relocat')) {
        return "Faheem is based in Berlin and holds a valid German work permit, so there is no sponsorship requirement.\n\nHis English is at professional level, and all of his master's degree was taught and examined in English. His German is at A1 and he is actively working on it.\n\nHe is open to relocating anywhere in Germany.";
    }

    return "I'm Faheem's portfolio assistant. I can tell you about:\n\n• His projects in computer vision, machine learning and RAG systems\n• His experience at Fraunhofer IFAM, BTU Cottbus-Senftenberg and JAYZENAI\n• His education and research presentations\n• Technical skills and the stack behind any project\n• How to get in touch\n\nWhat would you like to know?";
}
