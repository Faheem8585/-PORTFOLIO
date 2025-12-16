export default function Header() {
    return (
        <nav>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#education">Education</a>
                    <a href="#certifications">Certifications</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
}
