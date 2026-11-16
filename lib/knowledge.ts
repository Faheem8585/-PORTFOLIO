/**
 * Knowledge base for the portfolio assistant.
 *
 * Every fact here is verified against the repositories, CV and transcripts.
 * The assistant is instructed never to go beyond it. If something is not in
 * this file, the honest answer is "I don't know, ask Faheem directly."
 *
 * Sections are also used by the offline fallback: when no LLM API key is
 * configured, the route scores the question against each section's keywords
 * and returns the best matches.
 */

export interface KnowledgeSection {
    id: string;
    title: string;
    keywords: string[];
    content: string;
}

export const PROFILE = {
    name: 'Muhammad Faheem Arshad',
    shortName: 'Faheem',
    role: 'AI Engineer and Data Scientist',
    location: 'Berlin, Germany',
    email: 'faheemarshad381999@icloud.com',
    github: 'https://github.com/Faheem8585',
    linkedin: 'https://www.linkedin.com/in/muhammadfaheemarshad99',
};

export const SECTIONS: KnowledgeSection[] = [
    {
        id: 'summary',
        title: 'Who Faheem is',
        keywords: ['who', 'about', 'summary', 'introduce', 'yourself', 'background', 'overview', 'tell me'],
        content: `Muhammad Faheem Arshad, known as Faheem, is an AI Engineer and Data Scientist based in Berlin, Germany.

He holds an MSc in Artificial Intelligence from BTU Cottbus-Senftenberg, completed in November 2025. His core expertise is computer vision, machine learning engineering and data science, with a particular line in scientific and medical imaging.

He works end to end: data preparation, model training, containerised deployment, and the API layer other people consume. He is not only a modeller, and not only an engineer.

The thread running through his work is validation. A model that scores well on the split it was tuned on has not proved anything, so his projects usually include a second, independent way of checking the answer: a simulator with known ground truth, a test split reported separately from validation, or a blind baseline that exposes when a model is reading a shortcut instead of the data. Where something does not hold up, it is written into the README rather than quietly removed.

He holds a valid German work permit, so no sponsorship is required. English is at professional level. German is at A1 and he is working on it.`,
    },
    {
        id: 'contact',
        title: 'Contact',
        keywords: ['contact', 'email', 'reach', 'hire', 'available', 'linkedin', 'github', 'get in touch', 'message', 'cv', 'resume'],
        content: `Email: faheemarshad381999@icloud.com
LinkedIn: linkedin.com/in/muhammadfaheemarshad99
GitHub: github.com/Faheem8585

He is based in Berlin and holds a valid German work permit, so there is no visa sponsorship requirement. He is open to machine learning and computer vision roles anywhere in Germany, and to doctoral positions.

Email is the reliable way to reach him. The contact page has a form that composes the message and opens it in your own email app; it does not send anything by itself and nothing is stored on this site.`,
    },
    {
        id: 'education',
        title: 'Education',
        keywords: ['education', 'degree', 'university', 'study', 'master', 'msc', 'bachelor', 'bsc', 'grade', 'gpa', 'btu', 'riphah', 'graduated', 'qualification'],
        content: `MSc Artificial Intelligence, Brandenburgische Technische Universität Cottbus-Senftenberg. April 2023 to November 2025, degree awarded 4 November 2025. Final grade 2.3 on the German scale. Research Module graded 1.0. Taught and examined entirely in English.

The master's thesis was carried out with Fraunhofer IFAM Dresden on electrode surface analysis.

His coursework included seven computational neuroscience modules: Introduction to Computational Neuroscience, Sensorimotor Processing in Health and Disease, Introduction to Neural Signal Processing, Modelling of Perception and Action, Foundations of Psychophysiology, Biological Neural Networks, and Brain-Computer Interfaces for Neuroadaptive Technology. He also took an Artificial Intelligence for Drug Design seminar.

BSc Computer Science, Riphah International University, Islamabad. September 2018 to August 2022. CGPA 3.70 out of 4.00, assessed as 1.4 on the German scale.

C++ was his primary language across the whole bachelor's degree: data structures, algorithms, object-oriented design and semester projects. His bachelor's thesis was Pak Charity, a Flutter and Firebase donation platform.`,
    },
    {
        id: 'experience-btu',
        title: 'BTU Cottbus-Senftenberg, Computational Neuroscience',
        keywords: ['btu', 'teaching assistant', 'research assistant', 'eeg', 'neuroscience', 'brain', 'lab', 'cottbus', 'university job', 'signal'],
        content: `Research and Teaching Assistant, Chair of Computational Neuroscience, BTU Cottbus-Senftenberg. October 2023 to October 2026, part time, on site in Cottbus.

He collected EEG data from study participants and managed the full data lifecycle from acquisition through to analysis. He built preprocessing pipelines for filtering, artefact removal and epoching, so that recordings stayed accurate and consistent across sessions. He applied statistical and machine learning methods to pull usable signal out of noisy, high-dimensional recordings.

He also supported laboratory teaching, supervising students through practical sessions and project work.

Three years of hands-on work with real biological signal data, which is messier than any public dataset.`,
    },
    {
        id: 'experience-fraunhofer-thesis',
        title: 'Fraunhofer IFAM Dresden, Master Thesis Researcher',
        keywords: ['fraunhofer', 'thesis', 'master thesis', 'electrode', 'coating', 'delamination', 'ifam', 'dresden', 'hydrogen', 'microct', 'u-net', 'segmentation'],
        content: `Master Thesis Researcher, Fraunhofer IFAM Dresden. April 2025 to November 2025, hybrid.

Project: electrode surface analysis for coating and delamination detection, supporting research into green hydrogen production.

He detected and quantified coating coverage, delamination, total area, covered substrate and uncovered regions on electrode cross-sectional images.

The approach that makes this work interesting is that he built two independent pipelines that cross-check one another:

1. A classical computer vision route using CLAHE, Gaussian normalisation, adaptive thresholding and morphological filtering.
2. A learned route: a U-Net trained on pixel-wise masks he hand-labelled in Fiji (ImageJ), with a data preparation pipeline for mask and image pairing.

Because the two routes rest on different principles, neither result has to be trusted on its own. Where they agree, the measurement is solid. Where they disagree, that is a signal worth investigating.

He measured region boundaries by contour length analysis, converting pixels to physical micrometres through the image scaling factor, and kept segmentation accuracy stable across lighting variation and differing material textures.

The work and the thesis were recognised in a formal Fraunhofer reference letter.

Stack: Python, OpenCV, scikit-image, Fiji (ImageJ), TensorFlow and Keras, U-Net, MicroCT datasets.`,
    },
    {
        id: 'experience-fraunhofer-ra',
        title: 'Fraunhofer IFAM Dresden, Research Assistant',
        keywords: ['fraunhofer', 'research assistant', 'streamlit', 'outlier', 'dbscan', 'k-means', 'clustering', 'curve fitting', 'mongodb', 'hydrogen', 'data analysis'],
        content: `Research Assistant, Hydrogen Technology department, Fraunhofer IFAM Dresden. June 2024 to May 2025, part time, hybrid.

He developed Python software for scientific data analysis, used by physicists, materials scientists and engineers in the department.

Specific work:
- Outlier detection modules combining curve fitting with k-Means and DBSCAN clustering
- A full data analysis application in Streamlit, over Pandas, NumPy, Plotly, scikit-learn and SciPy
- MongoDB collection and schema design, aggregation pipelines and indexing, alongside relational stores

He worked directly with domain scientists, turning their measurement questions into reproducible analysis code. The customers of this software were researchers, not software engineers, which shaped how it had to be built.`,
    },
    {
        id: 'experience-jayzenai',
        title: 'JAYZENAI LTD, ML Engineer and Data Scientist',
        keywords: ['jayzenai', 'industry', 'production', 'client', 'islamabad', 'pakistan', 'fraud', 'healthcare', 'finance', 'deployment', 'first job', 'commercial'],
        content: `ML Engineer and Data Scientist, JAYZENAI LTD, Islamabad, Pakistan. January 2021 to November 2022, full time.

Nearly two years of commercial production machine learning before he came to Germany.

He built and deployed machine learning and computer vision services for healthcare and finance clients, taking work from first analysis through to a running product. He owned data preparation, model training, containerised deployment and the API layer other teams consumed.

The work included fraud detection and risk scoring for financial clients, and analytics pipelines for healthcare clients. He monitored models in production and handled the problems that only surface once real traffic arrives.

He also dealt directly with clients, turning loosely specified business problems into something measurable, which is a different skill from modelling.

Stack: Python, scikit-learn, TensorFlow, OpenCV, FastAPI, PostgreSQL, Docker.

Note: several public projects on this site solve the same kinds of problem he worked on at JAYZENAI, rebuilt independently on public data so the method and the measurements are open to inspection. The client work itself is not public.`,
    },
    {
        id: 'experience-zameen',
        title: 'Zameen.com internship',
        keywords: ['zameen', 'intern', 'internship', 'marketing', 'youtube', 'social media', 'lahore', '2020'],
        content: `Intern, Digital Marketing and Analytics, Zameen.com, Lahore. June 2020 to December 2020.

He managed social media accounts, supported content creation and marketing campaigns, ran the company YouTube channel through YouTube Studio, and produced analytics summaries that fed into marketing decisions.

This was before his technical career proper, and he lists it for completeness rather than as relevant engineering experience.`,
    },
    {
        id: 'research',
        title: 'Research, presentations and publications',
        keywords: ['research', 'publication', 'paper', 'conference', 'poster', 'presentation', 'phd', 'doctoral', 'clausthal', 'dida', 'decarbon', 'academic', 'manuscript'],
        content: `Presentations:
- Invited research presentation, Institute for Software and Systems Engineering, TU Clausthal, July 2026, on human-in-the-loop system design
- Poster presentation, dida Machine Learning Conference 2026, Berlin
- Poster presentation and finalist, Decarbon Days 2026, Cottbus

Publications: two manuscripts are in preparation. He has no peer-reviewed publications yet, and says so plainly rather than padding the record. His written output so far is in the project repositories, where method, measured result and known limitations are documented in full.

Doctoral applications: in 2026 he was shortlisted to the final five of roughly 220 applicants for a doctoral position in model-based systems engineering at TU Clausthal. The process ran to five interview rounds, including a presentation on human-in-the-loop system design and a final extra round the professor added for all five finalists. The position went to another candidate.

He is actively seeking a doctoral position in computer vision, applied machine learning, or the intersection of either with systems engineering.

Research interests: scientific and medical image analysis; validation and honest evaluation; human-in-the-loop and systems engineering; retrieval-augmented generation over technical documents; computational neuroscience and neural signal processing; efficient deep learning on constrained hardware.`,
    },
    {
        id: 'skills',
        title: 'Technical skills',
        keywords: ['skill', 'technology', 'stack', 'language', 'framework', 'tool', 'programming', 'python', 'pytorch', 'tensorflow', 'docker', 'kubernetes', 'know', 'experience with'],
        content: `Languages: Python is his primary working language. C++ for four years during the bachelor's degree, academic rather than commercial, with solid fundamentals and modern C++ from C++11 onwards as his acknowledged gap. Also SQL, TypeScript and JavaScript, Java and Angular from coursework, Dart for Flutter.

Deep learning: PyTorch, TensorFlow and Keras, MONAI, scikit-learn.

Computer vision: OpenCV, scikit-image, U-Net, YOLOv8, MobileNetV2, ResNet, Grad-CAM, MediaPipe, Fiji (ImageJ).

LLM and RAG: LangChain, LangGraph, ChromaDB, Qdrant, pgvector, BM25 and hybrid retrieval with reciprocal rank fusion, MCP servers.

Data: Pandas, NumPy, SciPy, Plotly, Matplotlib, Seaborn, Power BI, PostgreSQL, MongoDB, SQLite, star schema warehouse design.

Engineering: FastAPI, Streamlit, Flask, Docker and Docker Compose, Kubernetes with Helm, GitHub Actions CI/CD, pytest, Prometheus and Grafana, Git, Linux.

Cloud: Google Cloud Platform and Firebase from a production application. AWS at certificate level rather than production experience, and he states that distinction rather than letting it be assumed.

Honest gaps: he has not used Argo Workflows, MLflow or Vertex AI. He has tracked experiments with his own logging rather than a dedicated tool. He has no competitive data science record: he has never entered or ranked on Kaggle, DrivenData, Zindi, AIcrowd, Numerai or CodaLab, though he uses public competition datasets in his own projects.`,
    },
    {
        id: 'project-crashvlm',
        title: 'CrashVLM',
        keywords: ['crashvlm', 'crash', 'vlm', 'vision language', 'nhtsa', 'qwen', 'benchmark', 'automotive', 'airbag', 'strongest', 'best project', 'impressive'],
        content: `CrashVLM asks whether open vision-language models can actually read a crash test video, or whether most of what they appear to see is just the clock burned into the frame.

Data: the public NHTSA NCAP database. 1,583 tests narrowed to 100 frontal, side-barrier and side-pole tests, two high-speed camera views each, giving 200 clips at 8 ms frames, with a vehicle-grouped split so the same car never appears on both sides.

Findings:
1. The clock gives the answer away. With the lab's impact time visible, a predictor that never looks at the video scores 1.00 on airbag deployment and 0.94 on head contact. Any timing benchmark on standardised crash tests is meaningless without this baseline.
2. Even without the clock, the prior is strong. A blind baseline times impact and airbag within 16 ms in 75% of cases, and no frozen-feature probe or zero-shot encoder beat it.
3. Video VLMs win where precision matters. Within 8 ms, all three Qwen models time airbag deployment significantly better than the prior, Qwen3-VL-8B reaching 0.90 against 0.25. The same model also claims fire in 7% of clips with no fire.
4. Fine-tuning helps even when cut short. A LoRA run that finished 20 of 183 planned steps on a free GPU still improved impact timing significantly.

An earlier version of the blind baseline was measured on uncropped clips, making it around 20 ms late and too weak. Fixing that overturned an earlier conclusion that probes beat the prior. That self-correction is documented in the repository rather than removed.

Contains: an open data pipeline with overlay removal, automated leak checking and OCR time recovery; a frame-level event ontology; 200 annotated views with label-quality checks; a leakage-aware evaluation protocol; physics ground truth from vehicle accelerometers; a clock-free optical-flow method validated against it; a FastAPI service; a Gradio demo; and a five-page paper draft.

Engineering: 78 unit tests in CI with ruff, Hydra configs, a frozen split file, and every number in the README generated by a script rather than typed by hand.

github.com/Faheem8585/crashvlm`,
    },
    {
        id: 'project-medical',
        title: '3D Medical Segmentation',
        keywords: ['3d', 'medical', 'segmentation', 'monai', 'hippocampus', 'mri', 'dice', 'decathlon', 'volumetric', 'cpu'],
        content: `3D U-Net segmentation of the anterior and posterior hippocampus from MRI, using Medical Segmentation Decathlon Task04, trained and evaluated entirely on CPU.

Model: MONAI UNet, spatial_dims 3, channels 16/32/64/128, strides 2/2/2, two residual units, roughly 1.2 million parameters. DiceCE loss with background excluded, Adam with cosine annealing.

The interesting constraint: the volumes are around 35x50x35 voxels, too small for standard sliding-window patching. The pipeline uses foreground-biased 32-cubed patch sampling instead, so patches actually contain the structure being learned. Inference uses sliding windows over the full volume.

Results:

| Region | Dice | IoU |
|---|---|---|
| Anterior | 0.8553 | 0.7472 |
| Posterior | 0.8433 | 0.7291 |
| **Mean** | **0.8493** | **0.7382** |

> Important caveat he states openly: the split these numbers come from is also used for early stopping, which makes 0.8493 a validation score rather than a clean test score. A properly held-out test split is the honest next step.

Stack: MONAI, PyTorch, nibabel, FastAPI, Streamlit, Docker, ruff, pytest with over 40 tests.

github.com/Faheem8585/3d-medical-segmentation`,
    },
    {
        id: 'project-drone',
        title: 'Drone Aerial Image Segmentation',
        keywords: ['drone', 'aerial', 'semantic segmentation', 'iou', 'class imbalance', 'u-net from scratch', 'satellite', 'uav'],
        content: `Semantic segmentation of aerial drone imagery with a U-Net written from scratch. Kaggle Semantic Drone Dataset, 400 images, 24 classes simplified to 6, input 128x128 for CPU training.

Architecture: four downsampling blocks of Conv2d, BatchNorm, ReLU and MaxPool; four upsampling blocks with skip connections; a 1x1 convolution to 6 classes.

The real problem was class imbalance. Roads are 67% of pixels and cars are 0.2%, so an untreated model simply never predicts a car and still scores well. He used weighted cross-entropy with cars at 50x and trees at 15x, plus flips, rotations up to 15 degrees, and brightness and contrast jitter, with early stopping at patience 7.

Results: mean IoU 47.9%, F1 62.2%, pixel accuracy 76.5%.

| Class | IoU |
|---|---|
| Roads | 76.9% |
| Vegetation | 67.1% |
| Buildings | 56.0% |
| Cars | 28.2% (up from 0%) |
| Trees | 22.5% (up from 0.3%) |

The headline number is modest, but recovering two classes from effectively zero is the actual result.

github.com/Faheem8585/drone-segmentation`,
    },
    {
        id: 'project-tender',
        title: 'Tender Extractor',
        keywords: ['tender', 'procurement', 'pdf', 'requirement', 'extraction', 'deepseek', 'typescript', 'llm pipeline', 'document'],
        content: `Reads multi-file procurement tender PDFs, a main notice plus annexes, and extracts every requirement into a structured three-level tree. The hard part is merging fragments of the same requirement scattered across pages and files.

Pipeline: overlapping chunks of around 3,000 characters, each tagged with document, page and chunk identifiers for traceability. DeepSeek extraction in parallel batches, Zod-validated, retried and checkpointed. Two-pass consolidation: coarse grouping by category label, then an LLM deciding genuine duplicates, with all source chunk IDs kept on the surviving node. Tree building in two steps, one call for the top level and one per bucket for the second, with buckets over 120 split further.

Measured: 506 chunks produced 3,469 raw requirements, consolidated to 2,684.

Documented limitation: grouping by label before merging means duplicates filed under different labels, for example "Electrical Testing" against "Testing", are never compared. This is the main source of missed merges. The README names it, says embeddings are the obvious fix, and explains that label grouping was chosen as simpler, cheaper and good enough when categories are consistent.

Stack: TypeScript, Node 18+, pdf-parse, DeepSeek via the openai npm package, Zod.

github.com/Faheem8585/tender-extractor`,
    },
    {
        id: 'project-jobintel',
        title: 'JobIntel',
        keywords: ['jobintel', 'job search', 'matching', 'scoring', 'mcp', 'pydantic', 'scraping', 'applications'],
        content: `A job search assistant that scrapes adverts from LinkedIn, Indeed, StepStone and XING, scores fit, identifies missing skills, and tracks applications.

The scoring is deliberately transparent, not a black box.

| Component | Weight | How |
|---|---|---|
| Skills | 50% | Weighted Jaccard, required skills counted twice |
| Experience | 25% | Linear ratio, over-qualification capped not rewarded |
| Education | 15% | Ordinal rank |
| Location | 10% | Exact 1.0, same country 0.5, remote 1.0 |

Labels: Strong at 0.75 and above, Good at 0.55, Weak at 0.35, Poor below. Every weight and threshold lives in config.yaml with nothing hardcoded, so the model can be argued with.

Design: Pydantic v2 validation at the boundary so malformed scraped data fails loudly; thread-safe SQLite with an explicit lock; a fuzzy alias table mapping sklearn to scikit-learn and torch to pytorch, plus substring matching; a state machine refusing invalid application status transitions; and four interfaces over one core, namely CLI, FastAPI REST, Streamlit and an MCP server with nine documented tools.

Stack: Python 3.11, Pydantic v2, SQLite, httpx, BeautifulSoup4 with lxml, FastAPI, uvicorn, Streamlit, MCP, pytest with freezegun, flake8, black, mypy, Docker. 87% test coverage.

github.com/Faheem8585/jobintel`,
    },
    {
        id: 'project-office',
        title: 'Multimodal Office Platform',
        keywords: ['multimodal', 'office', 'platform', 'rag', 'pgvector', 'kubernetes', 'helm', 'approval', 'enterprise', 'internal'],
        content: `An internal company platform: role-aware dashboards, a configurable approval engine, document ingestion with OCR, semantic search, and a RAG assistant scoped to the department asking the question. HR, Finance and IT modules implemented end to end.

The assistant degrades gracefully through three answering modes: a local LLM at no cost, a cloud LLM where quality matters, and an offline extractive fallback that still returns the relevant passage when no model is reachable. The platform stays useful when the expensive part is unavailable.

Stack: Python 3.11, TypeScript with React 18, PostgreSQL with pgvector so semantic and relational data live in one database, Docker Compose locally, Helm charts for Kubernetes, GitHub Actions CI and CD. Tested at unit, integration and end-to-end level against a real Postgres with pgvector rather than a mock. Includes an operations runbook.

This is the project behind his Kubernetes and Helm experience.

github.com/Faheem8585/Multimodal_office_platform`,
    },
    {
        id: 'project-aerolattice',
        title: 'AeroLattice',
        keywords: ['aerolattice', 'wind', 'cfd', 'lattice boltzmann', 'openstreetmap', 'simulation', 'urban', 'physics', 'maplibre'],
        content: `Draw a boundary on a map and a lattice-Boltzmann CFD solver, written from scratch, computes airflow around the real OpenStreetMap building footprints, heights and terrain inside it, driven by live Open-Meteo wind data and rendered as animated streamlines.

Physics: a D3Q19 lattice with two-relaxation-time collision and a Smagorinsky eddy-viscosity closure. The README explains why TRT was chosen over full MRT: a hand-verified 19x19 MRT moment matrix carries a real risk of producing a result that is subtly wrong but looks entirely plausible. In a visual simulation, a wrong answer that looks right is the worst possible outcome.

Honest scoping: a "what this is and what it isn't" section states it captures large recirculation, wake and channelling patterns, but is not wind-tunnel-grade quantitative load estimation. Solves target roughly 10 to 30 seconds for preview quality over a few hundred metres.

Stack: FastAPI backend, MapLibre GL JS frontend with no bundler, nginx, Docker Compose, pytest.

github.com/Faheem8585/aerolattice`,
    },
    {
        id: 'project-sperm',
        title: 'Sperm Quantification and Motility Analysis',
        keywords: ['sperm', 'motility', 'kalman', 'hungarian', 'tracking', 'who 2021', 'fertility', 'videomicroscopy', 'brownian'],
        content: `A research pipeline measuring sperm motility from videomicroscopy.

Multi-object tracking with Kalman filtering and the Hungarian algorithm. It reports the full WHO 2021 clinical motility parameter set: VCL, VSL, VAP, LIN, WOB, ALH and BCF. It adds physics-based analysis including mean squared displacement, persistence length and diffusion coefficients.

The part that matters most: an Active Brownian particle simulator generates synthetic trajectories with known ground truth, so the tracker can be measured against a correct answer rather than judged by eye. Most tracking projects have no way to tell whether they are right at all.

github.com/Faheem8585/sperm-quantification`,
    },
    {
        id: 'project-fraud',
        title: 'Credit Card Fraud Detection',
        keywords: ['fraud', 'credit card', 'imbalance', 'smote', 'auc', 'gradient boosting', 'finance', 'anomaly', 'classification'],
        content: `Fraud detection on an extremely imbalanced dataset where genuine fraud is a tiny fraction of transactions.

SMOTE and related resampling handle the imbalance. Several classifiers are compared rather than one chosen in advance, with gradient boosting coming out ahead at an AUC of 97.66%. The ensemble scored slightly lower at 0.9668, and both numbers are reported rather than only the better one.

Evaluation is on AUC rather than accuracy, because accuracy is meaningless when 99.8% of rows belong to one class: a model that predicts "not fraud" every time scores 99.8% and catches nothing.

Deployed as a Streamlit dashboard. The dataset is the public Kaggle credit card fraud set, so the figures are reproducible by anyone.

github.com/Faheem8585/credit_card_fraud_detection`,
    },
    {
        id: 'project-quadruped',
        title: 'Statistical 3D Quadruped Shape Model',
        keywords: ['quadruped', 'horse', 'smpl', '3d model', 'pca', 'shape space', 'skinning', 'registration', 'animal'],
        content: `A statistical 3D body model for quadrupeds in the SMPL family, built from scratch: a mesh template, a skeleton, linear blend skinning and a PCA shape space, plus differentiable template-to-scan registration.

One command runs the whole thing: build the template from a public horse scan, register two exemplar quadrupeds, fit the PCA shape space, then run a generalisation experiment.

The experiment asks whether a shape space trained only on variation between normal-sized horses generalises to a disproportionate pony it has never seen. The answer is no, and the gap concentrates in the legs, which is exactly where real miniature-breed anatomy diverges from a scaled-down horse. The failure is anatomically meaningful rather than random.

Running the experiment that could embarrass the model, and reporting that it did, is the point of the repository.

Python 3.12 managed with uv. 59 tests at roughly 91% coverage.

github.com/Faheem8585/quadruped-shape-model`,
    },
    {
        id: 'project-german-tutor',
        title: 'German GPT Tutor',
        keywords: ['german tutor', 'language learning', 'langgraph', 'qdrant', 'bm25', 'hybrid retrieval', 'gamified', 'gemma', 'rrf'],
        content: `A German learning application with an adaptive AI tutor, grammar correction, voice input and output, six game types, 17 lessons across five units from A1 to B2, and a progress dashboard.

Architecture: every message runs through one LangGraph state pipeline. First a safety check including prompt injection detection, then hybrid retrieval combining BM25 keyword search with Qdrant vector search merged by Reciprocal Rank Fusion, then an intent router dispatching to tutor, grammar correction, lesson planning or motivation.

Hybrid retrieval matters here because a learner's question often turns on an exact word form that pure vector search smooths over.

Backend: FastAPI, async SQLAlchemy, PostgreSQL, Redis, LangGraph, LangChain, Qdrant, rank-bm25, Pydantic v2, Structlog, Prometheus and Grafana. Frontend: Next.js 15, React 19, TypeScript, Tailwind, Zustand, TanStack Query, Framer Motion, Recharts. Model: Google Gemma 3 12B on the free tier, deliberately, so running it costs nothing. Deployed with Docker Compose behind nginx.

github.com/Faheem8585/German_GPT_Tutor`,
    },
    {
        id: 'project-research-agent',
        title: 'Research Agent',
        keywords: ['research agent', 'agent', 'react agent', 'chromadb', 'citation', 'document qa', 'eval harness', 'langgraph'],
        content: `A document question-answering agent that cites its sources and falls back to web search when the local corpus cannot answer.

A LangGraph ReAct agent with three tools: retrieve_docs over ChromaDB, web_search via DuckDuckGo, and summarize_text. Conversation memory is kept per session through a LangGraph SQLite checkpointer, so a conversation survives a restart.

It includes an evaluation dataset and harness under pytest. This is the part most agent projects skip: without it, "the agent works" means only "it produced text once when I tried it".

Stack: LangChain, LangGraph, ChromaDB, FastAPI, Streamlit, Groq or Ollama, local HuggingFace embeddings, structured JSON logging, Docker, GitHub Actions CI/CD.

github.com/Faheem8585/research-agent`,
    },
    {
        id: 'project-cfd',
        title: 'CFD Assistant Suite',
        keywords: ['cfd assistant', 'openfoam', 'rag', 'chromadb', 'gemini', 'fluid dynamics', 'retrieval'],
        content: `Two RAG assistants in one application, one for CFD theory and one for OpenFOAM practice, switchable, each with its own vector store and system prompt.

Pipeline: scrape and parse online sources and local PDFs, chunk at around 1,000 characters, embed with all-MiniLM-L6-v2, store in ChromaDB, retrieve the top 5, build a context block, and pass it to Google Gemini with a prompt that forces use of the retrieved text rather than the model's own recall.

Users can upload PDFs or Word documents for immediate indexing.

Stack: Python 3.11, ChromaDB, HuggingFace embeddings, Google Gemini, Streamlit, optional Tesseract OCR.

github.com/Faheem8585/cfd-assistant-suite`,
    },
    {
        id: 'project-plant',
        title: 'Plant Disease Detection',
        keywords: ['plant', 'disease', 'crop', 'agriculture', 'plantvillage', 'mobilenet', 'transfer learning', 'classification'],
        content: `Classification of 38 plant diseases across 14 crops, trained on PlantVillage, 54,305 images with a 70/15/15 split.

MobileNetV2 with transfer learning then fine-tuning, 224x224 input, roughly 3.5 million parameters, 25 MB on disk. Adam at 1e-4, categorical crossentropy, batch 32, 20 epochs then 10, around 7 hours of training.

Results:

| Metric | Score |
|---|---|
| Training accuracy | 99.01% |
| Validation accuracy | 98.55% |
| **Test accuracy** | **94.88%** |
| Top-3 accuracy | 99.89% |

> The number that counts is 94.88% on the test set. The validation figure of 98.55% is what the model was tuned against, and quoting it as the headline would overstate performance on genuinely unseen images. The four-point gap between the two is exactly why validation scores should not be trusted as results.

Weakest classes are documented with reasons rather than averaged away. Potato-Healthy scores 60.87%, but on only 23 test images, which is too few to conclude anything from.

github.com/Faheem8585/plant_disease_detection`,
    },
    {
        id: 'project-tumor',
        title: 'Brain Tumour Detection with Grad-CAM',
        keywords: ['tumor', 'tumour', 'brain', 'grad-cam', 'explainability', 'interpretability', 'mri', 'mobilenet', 'confidence'],
        content: `Brain tumour classification from MRI with Grad-CAM heatmaps showing which region drove each decision. Built to run on CPU throughout.

MobileNetV2 at roughly 3.5 million parameters, chosen over ResNet50 and its 25 million-plus specifically for CPU throughput. A custom Grad-CAM implementation hooks the final Conv2dNormActivation block, intercepts backward gradients and global-average-pools them to weight the activation maps.

CPU optimisations: device locked to CPU with no silent GPU path; num_workers 0 and pin_memory false, because the multiprocessing machinery that speeds up GPU data loading actively slows CPU tensor loading; gradient accumulation emulating batch sizes of 16 or 32 from micro-batches of 4 or 8.

The safeguard that matters: any prediction below 60% confidence is flagged rather than reported as a result. In a medical context, a model that quietly returns its best guess on an image it does not understand is worse than one that admits it.

github.com/Faheem8585/tumor_detection_cpu`,
    },
    {
        id: 'project-healthcare-bi',
        title: 'Healthcare BI Dashboard',
        keywords: ['healthcare bi', 'business intelligence', 'dashboard', 'star schema', 'warehouse', 'sqlite', 'analyst', 'reporting', 'power bi'],
        content: `An interactive business intelligence dashboard for healthcare analytics, built on a properly modelled warehouse rather than a flat spreadsheet.

A Python generator produces synthetic healthcare data, 7 datasets and 108,000 records, loaded into a SQLite star schema with 4 dimension tables and 3 fact tables. A Streamlit dashboard serves over 10 interactive Plotly charts with dynamic filtering, automated report generation, and upload and download.

The data is entirely synthetic and the design is GDPR-conscious, with records anonymised by construction rather than after the fact.

Dimension and fact tables are the standard shape of a reporting warehouse, and they are what makes slicing by time, department and cohort fast. Building it that way rather than querying a wide flat table is the difference between a dashboard and a chart.

github.com/Faheem8585/healthcare-bi-project`,
    },
    {
        id: 'project-ai-detector',
        title: 'AI Text Detector',
        keywords: ['ai detector', 'text detector', 'ai generated', 'detection', 'sentence', 'ocr', 'signals', 'authenticity'],
        content: `Flags likely AI-generated writing and, more usefully, names the specific sentence that most influenced the verdict.

Seven weighted signals:

| Signal | Weight |
|---|---|
| Centroid tightness | 23% |
| Semantic drift | 22% |
| Hedge frequency | 15% |
| AI-phrase patterns | 12% |
| Structural symmetry | 12% |
| Linguistic predictability | 8% |
| Sentence variance | 8% |

OCR artefacts add a parallel boost for image inputs.

Verdict bands: below 28% likely human, 28 to 52% inconclusive, 52 to 82% likely AI, above 82% deeply synthesised. The inconclusive band exists deliberately, because a detector that always commits is lying about its certainty.

The README's own note on its benchmark is worth quoting: it scores 12 out of 12 with AUC 1.00 on its small test set, and the README says "That's a clean, easy benchmark. The numbers tell you the pipeline works end to end, not that the problem is solved."

Stack: React with Vite and Tailwind, FastAPI, sentence-transformers, Tesseract via pytesseract, pdfplumber, ReportLab.

github.com/Faheem8585/ai-text-detector`,
    },
    {
        id: 'project-others',
        title: 'Other projects',
        keywords: ['grocery', 'face emotion', 'emotion', 'docuflow', 'latex', 'construction', 'pak charity', 'college management', 'image processing', 'other projects', 'all projects', 'list'],
        content: `Grocery Vision System: YOLOv8 grocery detection with automatic pricing from a JSON config, in three deployment forms, namely a live webcam loop, a Flask API and a Streamlit browser app. A nice practical finding in the repository: cv2.VideoCapture does not work on a cloud server with no physical camera, so the hosted version uses Streamlit's camera input instead. No accuracy metrics are reported for this one.

Face Emotion Detection: MediaPipe detects and crops the face from a live webcam stream, a fine-tuned ResNet-18 classifies into 7 emotions. Modular layout with YAML config. No formally measured accuracy is published yet; an evaluation script exists but has not been run, and he would rather say that than quote a number he cannot back.

Construction Monitoring: YOLOv8 nano detecting workers, excavators, trucks and safety equipment in construction site video, writing an annotated output video.

DocuFlow: converts between images, PDFs and LaTeX while preserving academic layout. Four tools: images to PDF with reorder and rotate, PDF to LaTeX with automatic single and two-column detection, image to LaTeX via OCR with split left and right processing to preserve reading order, and a LaTeX editor with live MathJax preview. React, Vite, FastAPI, Pillow, PDFMiner, EasyOCR.

Classical Image Processing Pipeline: rule-based electrode degradation assessment with OpenCV and scikit-image, the classical counterpart to his thesis work.

Deep Learning Thesis: CT image analysis of Raney nickel-coated electrodes, detecting and quantifying cracks, coating coverage, uncovered areas and delamination, for material degradation in green hydrogen production.

Pak Charity: his bachelor's thesis, a Flutter and Firebase donation platform connecting donors and recipients, with admin review, push notifications and progress tracking.

College Management System: a console C++ application using linked lists for student and teacher records, from his data structures coursework.`,
    },
    {
        id: 'languages-visa',
        title: 'Languages, work permit and relocation',
        keywords: ['german', 'language', 'visa', 'permit', 'sponsorship', 'relocate', 'move', 'english', 'speak', 'authorisation', 'work permit'],
        content: `Faheem is based in Berlin and holds a valid German work permit, so no visa sponsorship is required.

English is at professional level. His entire master's degree was taught and examined in English, and all of his technical work and documentation is in English.

German is at A1. He is actively learning, and he states the level honestly rather than overstating it. He is open to relocating anywhere in Germany.

His first language background is Urdu and Punjabi, and he is originally from Pakistan.`,
    },
    {
        id: 'working-style',
        title: 'How he works',
        keywords: ['approach', 'philosophy', 'style', 'how do you work', 'strength', 'weakness', 'why hire', 'what makes', 'different', 'validation', 'honest'],
        content: `Three things characterise his work.

First, he reports the number that is true rather than the number that flatters. His plant disease model gets quoted at 94.88% test accuracy, not the 98.55% validation figure. His 3D segmentation Dice of 0.8493 comes with a written warning that it is a validation score. His AI detector's perfect benchmark result comes with a note saying the benchmark was easy.

Second, he builds a second way to check the first. His thesis ran a classical pipeline and a learned pipeline side by side so they could cross-check. His sperm tracker is validated against a simulator with known ground truth. CrashVLM's entire premise is a blind baseline that exposes whether a model is reading the data or a shortcut.

Third, he writes down what is broken. The tender extractor's README names the flaw that causes its missed merges. The quadruped model's headline experiment is one the model fails. These are in the repositories, not hidden.

He also works across the whole stack rather than only modelling: Docker, Kubernetes with Helm, CI pipelines, FastAPI services, test suites with real coverage numbers, and operations documentation.

Acknowledged gaps: no peer-reviewed publications yet, German at A1, modern C++ from C++11 onwards, and no competitive data science record.`,
    },
    {
        id: 'certifications',
        title: 'Certifications',
        keywords: ['certification', 'certificate', 'course', 'linkedin learning', 'coursera', 'aws', 'sysml', 'statistics', 'training'],
        content: `19 certifications. The most relevant:

Systems Engineering with SysML, LinkedIn, August 2026, directly relevant to model-based systems engineering.
Statistics Foundations 1, 2 and 3, LinkedIn and NASBA, April and May 2026.
Machine Learning with Python: Foundations, LinkedIn, April 2026.
Power BI: Dashboards for Beginners, LinkedIn, December 2023.
Machine Learning with Python: k-Means Clustering, LinkedIn, November 2023.
SQL Essential Training, LinkedIn and NASBA, September 2023.
JavaScript Essential Training, LinkedIn, September 2023.
AWS Cloud Practitioner Essentials and AWS Cloud Technical Essentials, Coursera, 2022.
Image Segmentation with Python and Unsupervised Learning, Coursera, January 2022.
Plus networking, UX design and earlier DigiSkills certificates.

He is straightforward about what these mean: certificates are weaker evidence than shipped projects. His AWS and Power BI knowledge is at certificate level rather than production experience, and he says so rather than letting it be assumed either way.`,
    },
];

/** Compact index for the system prompt when the full base would be too long. */
export function fullKnowledgeText(): string {
    return SECTIONS.map((s) => `## ${s.title}\n${s.content}`).join('\n\n');
}
