import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverable?: boolean;
}

export default function Card({ children, className = '', hoverable = false }: CardProps) {
    return (
        <div
            className={`${hoverable ? 'project-card' : ''} ${className}`}
            style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                padding: '1.1rem',
            }}
        >
            {children}
        </div>
    );
}
