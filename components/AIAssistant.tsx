'use client';

import { useState, useRef, useEffect } from 'react';

export default function AIAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: "Hi! I'm Faheem's AI assistant. Ask me anything about his projects, skills, experience, or background!"
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage, history: messages })
            });

            const data = await response.json();
            setMessages(prev => [...prev, { role: 'assistant', content: data.message }]);
        } catch (error) {
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: 'Sorry, I encountered an error. Please try again.'
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Floating Chat Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    position: 'fixed',
                    bottom: '2rem',
                    right: '2rem',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                    border: 'none',
                    color: 'white',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-lg)',
                    zIndex: 1000,
                    transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
                {isOpen ? '✕' : '💬'}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div style={{
                    position: 'fixed',
                    bottom: '5rem',
                    right: '2rem',
                    width: '400px',
                    maxWidth: 'calc(100vw - 4rem)',
                    height: '600px',
                    maxHeight: 'calc(100vh - 10rem)',
                    background: 'white',
                    borderRadius: '16px',
                    boxShadow: 'var(--shadow-xl)',
                    zIndex: 1000,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    border: '1px solid var(--border)'
                }}>
                    {/* Header */}
                    <div style={{
                        padding: '1.5rem',
                        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                        color: 'white'
                    }}>
                        <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Ask About Faheem</h3>
                        <p style={{ margin: '0.25rem 0 0', fontSize: '0.85rem', opacity: 0.9 }}>
                            AI-powered portfolio assistant
                        </p>
                    </div>

                    {/* Messages */}
                    <div style={{
                        flex: 1,
                        overflowY: 'auto',
                        padding: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    }}>
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                style={{
                                    alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                                    maxWidth: '80%'
                                }}
                            >
                                <div style={{
                                    padding: '0.75rem 1rem',
                                    borderRadius: '12px',
                                    background: msg.role === 'user'
                                        ? 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)'
                                        : 'var(--hover-bg)',
                                    color: msg.role === 'user' ? 'white' : 'var(--foreground)',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.5'
                                }}>
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div style={{ alignSelf: 'flex-start', maxWidth: '80%' }}>
                                <div style={{
                                    padding: '0.75rem 1rem',
                                    borderRadius: '12px',
                                    background: 'var(--hover-bg)',
                                    color: 'var(--muted)',
                                    fontSize: '0.95rem'
                                }}>
                                    Thinking...
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSubmit} style={{
                        padding: '1rem',
                        borderTop: '1px solid var(--border)',
                        display: 'flex',
                        gap: '0.5rem'
                    }}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask me anything..."
                            disabled={isLoading}
                            style={{
                                flex: 1,
                                padding: '0.75rem',
                                border: '1px solid var(--border)',
                                borderRadius: '8px',
                                fontSize: '0.95rem',
                                outline: 'none'
                            }}
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            style={{
                                padding: '0.75rem 1.5rem',
                                background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: isLoading ? 'not-allowed' : 'pointer',
                                fontSize: '0.95rem',
                                fontWeight: 500,
                                opacity: isLoading || !input.trim() ? 0.5 : 1
                            }}
                        >
                            Send
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}
