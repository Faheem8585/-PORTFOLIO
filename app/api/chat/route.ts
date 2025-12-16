import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { message, history } = await req.json();

        // Knowledge base about Faheem
        const systemPrompt = `You are Faheem's AI portfolio assistant. You help visitors learn about Faheem, an AI Engineer and Data Scientist.

BACKGROUND:
- AI Engineer & Data Scientist specializing in Machine Learning, Computer Vision, and Data Science
- Currently pursuing Master of Science in Artificial Intelligence at BTU Cottbus-Senftenberg
- Passionate about building intelligent systems that transform complex problems into elegant solutions
- Experience in deep learning, computer vision, and statistical modeling

EDUCATION:
- Master of Science in Artificial Intelligence - Brandenburgische Technische Universität Cottbus-Senftenberg (2023 - Nov 2025) - Grade: 2.3
- Bachelor of Science in Computer Science - Riphah International University, Pakistan (Sep 2018 - Aug 2022) - Grade: A+

PROFESSIONAL EXPERIENCE:
- Teaching Assistant at BTU Cottbus-Senftenberg (Oct 2023 - Present): Data collection and analysis of egg data, preprocessing, applying analytical techniques
- Master Thesis at Fraunhofer IFAM Dresden (Apr 2024 - Nov 2024): Electrode Surface Analysis for Coating & Delamination Detection using Python, OpenCV, TensorFlow/Keras, U-Net
- Working Student at Fraunhofer IFAM Dresden (Jun 2024 - May 2025): Software development in Python, outlier detection modules, data analysis with Streamlit

SKILLS:
- Programming: Python (90%), JavaScript (75%), C++ (70%), Dart (70%)
- ML/AI: TensorFlow (85%), PyTorch (80%), Scikit-learn (90%), YOLOv8 (85%)
- Computer Vision: OpenCV (85%), Deep Learning (85%), Object Detection (90%)
- Data Science: Pandas (90%), NumPy (90%), Data Analysis (85%), Power BI (75%)
- Web Dev: React/Next.js (80%), Flutter (70%), Node.js (75%)
- DevOps: Docker (70%), Git (85%), GitHub (85%), CI/CD (75%)
- Cloud: AWS (70%), Firebase (75%)
- Tools: SQL (80%)

PROJECTS:
1. Sperm Quantification Pipeline - Python pipeline for sperm motility analysis with YOLOv8 and Kalman tracking, WHO 2021 metrics compliance
2. Pak Charity - Mobile app (Flutter/Firebase) connecting donors and recipients, Bachelor's thesis project
3. Grocery Vision System - Real-time computer vision for grocery item detection, deployed on Streamlit Cloud
4. Credit Card Fraud Detection - ML system with SMOTE for class imbalance, high accuracy fraud detection
5. Face Emotion Detection - CNN-based emotion recognition on FER2013 dataset with real-time webcam processing
6. Drone Segmentation - U-Net architecture for aerial image semantic segmentation
7. CFD Assistant Suite - Streamlit app with OpenAI API for computational fluid dynamics assistance
8. Deep Learning Thesis - Advanced neural network research
9. College Management System - C++ application with linked lists for student/teacher records
10. Classical Image Processing Pipeline - Electrode degradation assessment using OpenCV
11. Construction Monitoring - Computer vision for construction site monitoring
12. DocuFlow - Document management system with JavaScript/Node.js

EXPERIENCE:
- 2024-Present: Independent AI/ML projects (sperm quantification, grocery vision, fraud detection, face emotion)
- 2023-2024: Computer Vision Engineer on research projects (drone segmentation, CFD assistant, construction monitoring)
- 2022-2023: Full-Stack Developer on academic projects (Pak Charity, college management, deep learning)

Answer questions concisely and professionally. If asked about specific projects, provide details. If you don't know something, say so honestly. Be friendly and helpful.`;

        // Simulate LLM response (you would replace this with actual API call)
        // For now, we'll use a simple rule-based system
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
    // Simple keyword-based responses (replace with actual LLM API call)
    if (message.includes('project') || message.includes('work')) {
        return "Faheem has worked on 12+ impressive projects! Some highlights include:\n\n• Sperm Quantification Pipeline using YOLOv8 and Kalman tracking\n• Pak Charity mobile app (Bachelor's thesis)\n• Grocery Vision System with cloud deployment\n• Credit Card Fraud Detection with ML\n• Face Emotion Detection using CNN\n\nWhich project would you like to know more about?";
    }

    if (message.includes('skill') || message.includes('technology')) {
        return "Faheem is highly skilled in:\n\n• Python (90%), TensorFlow, PyTorch, Scikit-learn\n• Computer Vision with OpenCV and YOLOv8\n• Data Science with Pandas and NumPy\n• Web Development with React/Next.js and Flutter\n• Deep Learning and Machine Learning\n\nHe's particularly strong in building end-to-end AI solutions!";
    }

    if (message.includes('experience') || message.includes('background')) {
        return "Faheem is an AI Engineer & Data Scientist with extensive experience:\n\n• 10+ AI/ML projects across healthcare, retail, and finance\n• Expertise in Computer Vision and Deep Learning\n• Full-stack development with Flutter, React, and Next.js\n• Research in advanced neural architectures\n\nHe specializes in transforming complex problems into elegant, scalable AI solutions.";
    }

    if (message.includes('contact') || message.includes('reach') || message.includes('email')) {
        return "You can reach Faheem through:\n\n• Email: your.email@example.com\n• GitHub: github.com/Faheem8585\n• LinkedIn: linkedin.com/in/yourprofile\n\nClick the 'Get in touch' button on the portfolio to send a message!";
    }

    if (message.includes('education') || message.includes('degree')) {
        return "Faheem has a strong educational background with a Bachelor's degree in Computer Science. His Bachelor's thesis was the Pak Charity mobile application. He has also completed advanced research in deep learning and neural networks.";
    }

    if (message.includes('pak charity') || message.includes('thesis')) {
        return "Pak Charity is Faheem's Bachelor's thesis project - a mobile donation platform built with Flutter and Firebase. It connects recipients and donors, featuring:\n\n• Admin review system\n• Push notifications\n• Secure payment processing\n• Real-time progress tracking\n\nIt demonstrates full-stack mobile development and addresses real-world social impact needs.";
    }

    if (message.includes('sperm') || message.includes('quantification')) {
        return "The Sperm Quantification Pipeline is a research-grade Python tool for sperm motility analysis:\n\n• Uses YOLOv8 for detection\n• Kalman filtering for tracking\n• WHO 2021 metrics compliance\n• Streamlit UI for interaction\n• Applications in fertility diagnostics and research\n\nIt automates manual analysis, reducing human error and enabling high-throughput processing!";
    }

    if (message.includes('fraud') || message.includes('detection')) {
        return "The Credit Card Fraud Detection system uses machine learning to detect fraudulent transactions:\n\n• Handles extreme class imbalance with SMOTE\n• Multiple classifier comparison\n• High detection accuracy\n• Minimizes false positives\n\nBuilt with Scikit-learn, Pandas, and advanced ML techniques!";
    }


    if (message.includes('education') || message.includes('degree') || message.includes('university')) {
        return "Faheem's educational background:\n\n• Master of Science in Artificial Intelligence\n  - Brandenburgische Technische Universität Cottbus-Senftenberg\n  - 2023 - Nov 2025\n  - Grade: 2.3\n\n• Bachelor of Science in Computer Science\n  - Riphah International University, Pakistan\n  - Sep 2018 - Aug 2022\n  - Grade: A+\n\nHis education combines strong theoretical foundations with practical research experience!";
    }

    // Default response
    return "I'm Faheem's AI assistant! I can tell you about:\n\n• His 12+ projects in AI, ML, and Computer Vision\n• Technical skills and expertise\n• Experience and background\n• Specific project details\n• How to contact him\n\nWhat would you like to know?";
}
