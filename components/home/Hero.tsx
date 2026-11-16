import Link from 'next/link';
import { getAllProjects } from '@/lib/projects';

export default async function Hero() {
    const projects = (await getAllProjects()).slice(0, 10);

    return (
        <section className="hero">
            <div className="container">
                <p className="byline">Muhammad Faheem Arshad / Berlin</p>

                <h1>I measure things in images, then check the measurement.</h1>

                <p className="lede">
                    Computer vision and machine learning, from electrode cross-sections at
                    Fraunhofer to EEG recordings at BTU to crash-test footage at 8 millisecond
                    frames. Most of what follows includes a second, independent way of testing
                    whether the number is real.
                </p>

                <div className="hero-actions">
                    <a href="#experience" className="btn">Read the work</a>
                    <a href="#contact" className="btn btn-outline">Get in touch</a>
                </div>
            </div>

            <div className="container">
                <div className="filmstrip">
                    {projects.map((p) => (
                        <Link key={p.slug} href={`/projects/${p.slug}`} className="frame">
                            <img src={p.image} alt="" loading="lazy" />
                            <div className="meta">
                                <strong>{p.title.split(':')[0]}</strong>
                                <span>{p.technologies.slice(0, 2).join(' / ')}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
