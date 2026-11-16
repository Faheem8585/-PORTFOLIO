'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const GREETING =
    "Hi. I'm Faheem's portfolio assistant. Ask me about his projects, his experience, how he works, or whether he fits a role you have in mind.";

const SUGGESTIONS = [
    'What did he do at Fraunhofer?',
    'What is his strongest project?',
    'Does he have production experience?',
    'What are his weaknesses?',
    'Can he work in Germany?',
];

const FOLLOW_UPS = [
    'Tell me about CrashVLM',
    'How does he handle class imbalance?',
    'What is his Kubernetes experience?',
    'Does he have publications?',
    'How do I contact him?',
    'What does he know about RAG?',
    'Is he a good fit for a computer vision role?',
];

/** Minimal, safe markdown: bold, inline code, bullets, paragraphs. No HTML passthrough. */
function renderText(text: string) {
    const blocks = text.split(/\n{2,}/);

    const inline = (s: string, keyPrefix: string) => {
        const parts: React.ReactNode[] = [];
        const regex = /(\*\*[^*]+\*\*|`[^`]+`)/g;
        let last = 0;
        let m: RegExpExecArray | null;
        let i = 0;
        while ((m = regex.exec(s)) !== null) {
            if (m.index > last) parts.push(s.slice(last, m.index));
            const tok = m[0];
            if (tok.startsWith('**')) {
                parts.push(<strong key={`${keyPrefix}-b${i}`}>{tok.slice(2, -2)}</strong>);
            } else {
                parts.push(
                    <code
                        key={`${keyPrefix}-c${i}`}
                        style={{
                            background: 'rgba(100,116,139,0.14)',
                            padding: '0.1em 0.35em',
                            borderRadius: '4px',
                            fontSize: '0.88em',
                        }}
                    >
                        {tok.slice(1, -1)}
                    </code>,
                );
            }
            last = m.index + tok.length;
            i++;
        }
        if (last < s.length) parts.push(s.slice(last));
        return parts;
    };

    return blocks.map((block, bi) => {
        const lines = block.split('\n');
        const isList = lines.every((l) => /^\s*[-*•]\s+/.test(l) || !l.trim());
        if (isList && lines.some((l) => l.trim())) {
            return (
                <ul key={bi} style={{ margin: '0 0 0.6rem', paddingLeft: '1.1rem' }}>
                    {lines
                        .filter((l) => l.trim())
                        .map((l, li) => (
                            <li key={li} style={{ marginBottom: '0.25rem' }}>
                                {inline(l.replace(/^\s*[-*•]\s+/, ''), `${bi}-${li}`)}
                            </li>
                        ))}
                </ul>
            );
        }
        return (
            <p key={bi} style={{ margin: '0 0 0.6rem' }}>
                {lines.map((l, li) => (
                    <span key={li}>
                        {inline(l, `${bi}-${li}`)}
                        {li < lines.length - 1 && <br />}
                    </span>
                ))}
            </p>
        );
    });
}

export default function AIAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: GREETING },
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [chips, setChips] = useState<string[]>(SUGGESTIONS);

    const endRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    useEffect(() => {
        if (isOpen) setTimeout(() => inputRef.current?.focus(), 250);
    }, [isOpen]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    const send = useCallback(
        async (text: string) => {
            const msg = text.trim();
            if (!msg || isLoading) return;

            const history = messages;
            setMessages((prev) => [...prev, { role: 'user', content: msg }]);
            setInput('');
            setIsLoading(true);
            setChips([]);

            try {
                const res = await fetch('/api/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: msg, history }),
                });
                const data = await res.json();
                setMessages((prev) => [
                    ...prev,
                    { role: 'assistant', content: data.message || 'No response.' },
                ]);
            } catch {
                setMessages((prev) => [
                    ...prev,
                    {
                        role: 'assistant',
                        content:
                            'I could not reach the server. Please try again, or email Faheem at faheemarshad381999@icloud.com.',
                    },
                ]);
            } finally {
                setIsLoading(false);
                // offer three fresh follow-ups, chosen without repeating what was asked
                const asked = new Set(
                    [...messages, { role: 'user', content: msg }]
                        .filter((m) => m.role === 'user')
                        .map((m) => m.content.toLowerCase()),
                );
                setChips(FOLLOW_UPS.filter((f) => !asked.has(f.toLowerCase())).slice(0, 3));
                setTimeout(() => inputRef.current?.focus(), 80);
            }
        },
        [isLoading, messages],
    );

    const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            send(input);
        }
    };

    const reset = () => {
        setMessages([{ role: 'assistant', content: GREETING }]);
        setChips(SUGGESTIONS);
        setInput('');
    };

    return (
        <>
            <button
                onClick={() => setIsOpen((v) => !v)}
                aria-label={isOpen ? 'Close assistant' : 'Ask about Faheem'}
                style={{
                    position: 'fixed',
                    bottom: '1.5rem',
                    right: '1.5rem',
                    width: '58px',
                    height: '58px',
                    borderRadius: '50%',
                    background:
                        'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                    border: 'none',
                    color: 'white',
                    fontSize: '1.4rem',
                    cursor: 'pointer',
                    boxShadow: '0 8px 28px rgba(0,0,0,0.22)',
                    zIndex: 1001,
                    transition: 'transform 0.25s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
                {isOpen ? '✕' : '💬'}
            </button>

            {isOpen && (
                <div
                    role="dialog"
                    aria-label="Portfolio assistant"
                    style={{
                        position: 'fixed',
                        bottom: 'calc(1.5rem + 70px)',
                        right: '1.5rem',
                        left: 'auto',
                        width: 'min(420px, calc(100vw - 3rem))',
                        height: 'min(600px, calc(100vh - 8rem))',
                        background: 'white',
                        borderRadius: '16px',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.26)',
                        border: '1px solid var(--border)',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        zIndex: 1000,
                    }}
                >
                    {/* Header */}
                    <div
                        style={{
                            padding: '0.9rem 1rem',
                            background:
                                'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '0.5rem',
                            flexShrink: 0,
                        }}
                    >
                        <div>
                            <div style={{ fontWeight: 700, fontSize: '0.98rem' }}>
                                Ask about Faheem
                            </div>
                            <div style={{ fontSize: '0.76rem', opacity: 0.85 }}>
                                Answers come from his verified CV and repositories
                            </div>
                        </div>
                        <button
                            onClick={reset}
                            title="Start over"
                            style={{
                                background: 'rgba(255,255,255,0.18)',
                                border: 'none',
                                color: 'white',
                                borderRadius: '8px',
                                padding: '0.3rem 0.6rem',
                                fontSize: '0.75rem',
                                cursor: 'pointer',
                                flexShrink: 0,
                            }}
                        >
                            Reset
                        </button>
                    </div>

                    {/* Messages */}
                    <div
                        style={{
                            flex: 1,
                            overflowY: 'auto',
                            padding: '1rem',
                            background: '#f8fafc',
                        }}
                    >
                        {messages.map((m, i) => (
                            <div
                                key={i}
                                style={{
                                    display: 'flex',
                                    justifyContent:
                                        m.role === 'user' ? 'flex-end' : 'flex-start',
                                    marginBottom: '0.75rem',
                                }}
                            >
                                <div
                                    style={{
                                        maxWidth: '88%',
                                        padding: '0.7rem 0.9rem',
                                        borderRadius: '14px',
                                        borderBottomRightRadius:
                                            m.role === 'user' ? '4px' : '14px',
                                        borderBottomLeftRadius:
                                            m.role === 'user' ? '14px' : '4px',
                                        background:
                                            m.role === 'user'
                                                ? 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)'
                                                : 'white',
                                        color: m.role === 'user' ? 'white' : 'var(--foreground)',
                                        border:
                                            m.role === 'user'
                                                ? 'none'
                                                : '1px solid var(--border)',
                                        fontSize: '0.9rem',
                                        lineHeight: 1.6,
                                        wordBreak: 'break-word',
                                    }}
                                >
                                    {m.role === 'assistant'
                                        ? renderText(m.content)
                                        : m.content}
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div style={{ display: 'flex', marginBottom: '0.75rem' }}>
                                <div
                                    style={{
                                        padding: '0.75rem 1rem',
                                        borderRadius: '14px',
                                        borderBottomLeftRadius: '4px',
                                        background: 'white',
                                        border: '1px solid var(--border)',
                                        display: 'flex',
                                        gap: '5px',
                                    }}
                                >
                                    {[0, 1, 2].map((d) => (
                                        <span
                                            key={d}
                                            style={{
                                                width: '7px',
                                                height: '7px',
                                                borderRadius: '50%',
                                                background: 'var(--primary)',
                                                display: 'inline-block',
                                                animation: `chatDot 1.2s ${d * 0.18}s infinite ease-in-out`,
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {!isLoading && chips.length > 0 && (
                            <div
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.4rem',
                                    marginTop: '0.4rem',
                                }}
                            >
                                {chips.map((c) => (
                                    <button
                                        key={c}
                                        onClick={() => send(c)}
                                        style={{
                                            background: 'white',
                                            border: '1px solid var(--border)',
                                            color: 'var(--primary)',
                                            borderRadius: '999px',
                                            padding: '0.35rem 0.75rem',
                                            fontSize: '0.78rem',
                                            cursor: 'pointer',
                                            lineHeight: 1.3,
                                            textAlign: 'left',
                                        }}
                                    >
                                        {c}
                                    </button>
                                ))}
                            </div>
                        )}

                        <div ref={endRef} />
                    </div>

                    {/* Composer */}
                    <div
                        style={{
                            padding: '0.7rem',
                            borderTop: '1px solid var(--border)',
                            background: 'white',
                            display: 'flex',
                            gap: '0.5rem',
                            alignItems: 'flex-end',
                            flexShrink: 0,
                        }}
                    >
                        <textarea
                            ref={inputRef}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={onKeyDown}
                            rows={1}
                            placeholder="Ask anything about his work"
                            disabled={isLoading}
                            style={{
                                flex: 1,
                                resize: 'none',
                                maxHeight: '110px',
                                padding: '0.6rem 0.8rem',
                                border: '1px solid var(--border)',
                                borderRadius: '12px',
                                fontSize: '0.9rem',
                                fontFamily: 'inherit',
                                outline: 'none',
                                lineHeight: 1.5,
                            }}
                            onInput={(e) => {
                                const el = e.currentTarget;
                                el.style.height = 'auto';
                                el.style.height = Math.min(el.scrollHeight, 110) + 'px';
                            }}
                        />
                        <button
                            onClick={() => send(input)}
                            disabled={isLoading || !input.trim()}
                            aria-label="Send"
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                border: 'none',
                                flexShrink: 0,
                                cursor:
                                    isLoading || !input.trim() ? 'not-allowed' : 'pointer',
                                opacity: isLoading || !input.trim() ? 0.45 : 1,
                                background:
                                    'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                                color: 'white',
                                fontSize: '1rem',
                            }}
                        >
                            ↑
                        </button>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes chatDot {
                    0%, 60%, 100% { transform: translateY(0); opacity: 0.45; }
                    30% { transform: translateY(-5px); opacity: 1; }
                }
            `}</style>
        </>
    );
}
