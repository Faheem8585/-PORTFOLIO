'use client';

export default function Hero() {
    return (
        <section style={{
            padding: '6rem 0 4rem',
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.05) 50%, rgba(20, 184, 166, 0.08) 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Animated background circles */}
            <div style={{
                position: 'absolute',
                width: '500px',
                height: '500px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%)',
                top: '-250px',
                right: '-100px',
                animation: 'float 8s ease-in-out infinite'
            }} />
            <div style={{
                position: 'absolute',
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(20, 184, 166, 0.12) 0%, transparent 70%)',
                bottom: '-200px',
                left: '-100px',
                animation: 'float 10s ease-in-out infinite reverse'
            }} />

            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{
                    marginBottom: '0.5rem',
                    fontSize: '0.95rem',
                    textTransform: 'uppercase',
                    letterSpacing: '3px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontWeight: 700,
                    animation: 'pulse 2s ease-in-out infinite'
                }}>
                    Welcome to my portfolio
                </div>
                <h2 style={{
                    fontSize: '1.25rem',
                    fontWeight: 400,
                    marginBottom: '1rem',
                    color: 'var(--muted)'
                }}>
                    Data Scientist & AI Engineer
                </h2>
                <h1 style={{
                    marginBottom: '1.5rem',
                    fontSize: '4.5rem',
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'gradientShift 3s ease infinite',
                    letterSpacing: '2px',
                    textShadow: '0 4px 20px rgba(102, 126, 234, 0.3)'
                }}>
                    Faheem
                </h1>
                <p style={{
                    fontSize: '1.15rem',
                    color: 'var(--muted)',
                    maxWidth: '650px',
                    margin: '0 auto 2.5rem',
                    lineHeight: '1.8',
                    animation: 'fadeInUp 0.8s ease-out'
                }}>
                    Building intelligent systems with Machine Learning, Computer Vision, and Data Science.
                    Transforming complex problems into elegant solutions.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="#projects" className="btn" style={{ animation: 'fadeInUp 1s ease-out' }}>
                        View Projects
                    </a>
                    <a href="#contact" className="btn btn-outline" style={{ animation: 'fadeInUp 1.2s ease-out' }}>
                        Get in touch
                    </a>
                </div>

                {/* Stats - Enhanced with gradients */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '2rem',
                    marginTop: '4rem',
                    maxWidth: '600px',
                    margin: '4rem auto 0'
                }}>
                    <div style={{ animation: 'fadeInUp 1.4s ease-out' }}>
                        <div style={{
                            fontSize: '3rem',
                            fontWeight: 800,
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            animation: 'pulse 2s ease-in-out infinite'
                        }}>
                            12+
                        </div>
                        <div style={{ color: 'var(--muted)', fontSize: '0.9rem', fontWeight: 600 }}>Projects</div>
                    </div>
                    <div style={{ animation: 'fadeInUp 1.6s ease-out' }}>
                        <div style={{
                            fontSize: '3rem',
                            fontWeight: 800,
                            background: 'linear-gradient(135deg, #14b8a6 0%, #0066cc 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            animation: 'pulse 2s ease-in-out infinite 0.5s'
                        }}>
                            24+
                        </div>
                        <div style={{ color: 'var(--muted)', fontSize: '0.9rem', fontWeight: 600 }}>Skills</div>
                    </div>
                    <div style={{ animation: 'fadeInUp 1.8s ease-out' }}>
                        <div style={{
                            fontSize: '3rem',
                            fontWeight: 800,
                            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            animation: 'pulse 2s ease-in-out infinite 1s'
                        }}>
                            ∞
                        </div>
                        <div style={{ color: 'var(--muted)', fontSize: '0.9rem', fontWeight: 600 }}>Learning</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
