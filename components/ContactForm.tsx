'use client';

import { useState } from 'react';
import Button from './ui/Button';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'opened'>('idle');

    const ADDRESS = 'faheemarshad381999@icloud.com';

    // No backend here, so the form composes the message and hands it to the
    // sender's own mail client. That genuinely delivers, and the button says
    // exactly what it does rather than claiming a send that never happened.
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = formData.subject.trim() || `Message from ${formData.name || 'your portfolio'}`;
        const body = [
            formData.message.trim(),
            '',
            '---',
            `From: ${formData.name}`,
            formData.email ? `Reply to: ${formData.email}` : '',
            'Sent from portfolio-five-rouge-60.vercel.app',
        ]
            .filter(Boolean)
            .join('\n');

        window.location.href =
            `mailto:${ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        setStatus('opened');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-card-bg focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-card-bg focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>

            <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-card-bg focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-card-bg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full">
                Open in your email app
            </Button>

            <p className="text-muted" style={{ fontSize: '0.84rem', textAlign: 'center', margin: 0 }}>
                This opens your own email app with the message ready to send, so nothing is
                stored here. You can also write to{' '}
                <a href={`mailto:${ADDRESS}`}>{ADDRESS}</a> directly.
            </p>

            {status === 'opened' && (
                <p style={{ textAlign: 'center', color: 'var(--signal-dim)', fontSize: '0.88rem', margin: 0 }}>
                    Your email app should have opened. If nothing happened, write to{' '}
                    <a href={`mailto:${ADDRESS}`}>{ADDRESS}</a> instead.
                </p>
            )}
        </form>
    );
}
