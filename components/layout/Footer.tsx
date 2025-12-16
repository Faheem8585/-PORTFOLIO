export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{
            borderTop: '1px solid var(--border)',
            padding: '2rem 0',
            marginTop: '3rem'
        }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                    © {currentYear} Faheem. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
