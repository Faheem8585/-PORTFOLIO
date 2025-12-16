import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverable?: boolean;
}

export default function Card({ children, className = '', hoverable = false }: CardProps) {
    const hoverStyles = hoverable ? 'hover:shadow-lg hover:border-primary/20 transition-all duration-200' : '';

    return (
        <div className={`bg-card-bg border border-card-border rounded-lg p-6 ${hoverStyles} ${className}`}>
            {children}
        </div>
    );
}
