'use client';

import React from 'react';

/**
 * Small, safe markdown renderer for assistant replies.
 *
 * Supports: headings, bold, inline code, bullet and numbered lists, tables,
 * blockquotes, and automatic linking of URLs, GitHub repos and emails.
 * Nothing is rendered as raw HTML, so a reply can never inject markup.
 */

const ACCENT = 'var(--primary)';

/* ---------------------------------------------------------------- */
/* Inline formatting                                                  */
/* ---------------------------------------------------------------- */

const INLINE = /(\*\*[^*]+\*\*|`[^`]+`|\bhttps?:\/\/[^\s),]+|\bgithub\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+|\b[\w.+-]+@[\w-]+\.[\w.]+\b)/g;

function GithubPill({ href, label }: { href: string; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                background: '#0f172a',
                color: 'white',
                padding: '0.18rem 0.6rem',
                borderRadius: '999px',
                fontSize: '0.78em',
                fontWeight: 600,
                textDecoration: 'none',
                verticalAlign: 'baseline',
                lineHeight: 1.5,
            }}
        >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.834 2.81 1.304 3.5.997.107-.776.418-1.305.76-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.5 11.5 0 0112 5.8c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.806 5.625-5.479 5.922.43.37.814 1.102.814 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            {label}
        </a>
    );
}

function inlineNodes(text: string, keyPrefix: string): React.ReactNode[] {
    const out: React.ReactNode[] = [];
    let last = 0;
    let m: RegExpExecArray | null;
    let i = 0;
    INLINE.lastIndex = 0;

    while ((m = INLINE.exec(text)) !== null) {
        if (m.index > last) out.push(text.slice(last, m.index));
        const tok = m[0];
        const key = `${keyPrefix}-${i++}`;

        if (tok.startsWith('**')) {
            out.push(
                <strong key={key} style={{ color: 'var(--foreground)', fontWeight: 650 }}>
                    {tok.slice(2, -2)}
                </strong>,
            );
        } else if (tok.startsWith('`')) {
            out.push(
                <code
                    key={key}
                    style={{
                        background: 'rgba(99,102,241,0.11)',
                        color: ACCENT,
                        padding: '0.1em 0.38em',
                        borderRadius: '5px',
                        fontSize: '0.87em',
                        fontWeight: 500,
                    }}
                >
                    {tok.slice(1, -1)}
                </code>,
            );
        } else if (tok.includes('@') && !tok.startsWith('http')) {
            out.push(
                <a
                    key={key}
                    href={`mailto:${tok}`}
                    style={{ color: ACCENT, fontWeight: 600, textDecoration: 'none' }}
                >
                    {tok}
                </a>,
            );
        } else if (tok.startsWith('github.com/')) {
            out.push(
                <GithubPill
                    key={key}
                    href={`https://${tok}`}
                    label={tok.split('/').slice(-1)[0]}
                />,
            );
        } else {
            const isRepo = /^https:\/\/github\.com\/[^/]+\/[^/]+\/?$/.test(tok);
            if (isRepo) {
                out.push(
                    <GithubPill key={key} href={tok} label={tok.split('/').filter(Boolean).slice(-1)[0]} />,
                );
            } else {
                out.push(
                    <a
                        key={key}
                        href={tok}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: ACCENT, fontWeight: 600, wordBreak: 'break-all' }}
                    >
                        {tok.replace(/^https?:\/\//, '')}
                    </a>,
                );
            }
        }
        last = m.index + tok.length;
    }
    if (last < text.length) out.push(text.slice(last));
    return out;
}

/* ---------------------------------------------------------------- */
/* Block elements                                                     */
/* ---------------------------------------------------------------- */

function Chips({ raw, k }: { raw: string; k: string }) {
    const items = raw
        .split(/[,;]/)
        .map((s) => s.trim().replace(/\.$/, ''))
        .filter((s) => s.length > 0 && s.length < 42);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', margin: '0 0 0.7rem' }}>
            {items.map((t, i) => (
                <span
                    key={`${k}-${i}`}
                    style={{
                        background: 'rgba(99,102,241,0.09)',
                        border: '1px solid rgba(99,102,241,0.22)',
                        color: ACCENT,
                        borderRadius: '6px',
                        padding: '0.16rem 0.5rem',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        lineHeight: 1.5,
                    }}
                >
                    {t}
                </span>
            ))}
        </div>
    );
}

function Table({ lines, k }: { lines: string[]; k: string }) {
    const cells = (row: string) =>
        row.split('|').slice(1, -1).map((c) => c.trim());
    const header = cells(lines[0]);
    const rows = lines.slice(2).map(cells);

    return (
        <div style={{ overflowX: 'auto', margin: '0 0 0.75rem' }}>
            <table
                style={{
                    borderCollapse: 'collapse',
                    width: '100%',
                    fontSize: '0.82rem',
                    background: 'white',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: '1px solid var(--border)',
                }}
            >
                <thead>
                    <tr style={{ background: 'rgba(99,102,241,0.07)' }}>
                        {header.map((h, i) => (
                            <th
                                key={i}
                                style={{
                                    textAlign: i === 0 ? 'left' : 'right',
                                    padding: '0.42rem 0.6rem',
                                    fontWeight: 650,
                                    color: ACCENT,
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((r, ri) => (
                        <tr key={ri} style={{ borderTop: '1px solid var(--border)' }}>
                            {r.map((c, ci) => (
                                <td
                                    key={ci}
                                    style={{
                                        padding: '0.4rem 0.6rem',
                                        textAlign: ci === 0 ? 'left' : 'right',
                                        fontVariantNumeric: 'tabular-nums',
                                        whiteSpace: ci === 0 ? 'normal' : 'nowrap',
                                    }}
                                >
                                    {inlineNodes(c, `${k}-${ri}-${ci}`)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default function RichMessage({ text }: { text: string }) {
    const blocks = text.trim().split(/\n{2,}/);

    return (
        <div style={{ fontSize: '0.9rem', lineHeight: 1.65 }}>
            {blocks.map((block, bi) => {
                const lines = block.split('\n').filter((l) => l.trim() !== '');
                if (lines.length === 0) return null;
                const first = lines[0].trim();

                // Table
                if (
                    lines.length >= 2 &&
                    first.startsWith('|') &&
                    /^\|[\s:|-]+\|$/.test(lines[1].trim())
                ) {
                    return <Table key={bi} lines={lines} k={`t${bi}`} />;
                }

                // Heading
                const h = first.match(/^(#{1,4})\s+(.*)$/);
                if (h && lines.length === 1) {
                    return (
                        <div
                            key={bi}
                            style={{
                                fontWeight: 700,
                                fontSize: '0.86rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.6px',
                                color: ACCENT,
                                margin: bi === 0 ? '0 0 0.5rem' : '0.9rem 0 0.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.45rem',
                            }}
                        >
                            <span
                                style={{
                                    width: '3px',
                                    height: '13px',
                                    borderRadius: '2px',
                                    background: `linear-gradient(180deg, ${ACCENT}, var(--primary-dark))`,
                                    display: 'inline-block',
                                }}
                            />
                            {h[2]}
                        </div>
                    );
                }

                // Blockquote: the honest caveats
                if (lines.every((l) => l.trim().startsWith('>'))) {
                    return (
                        <div
                            key={bi}
                            style={{
                                borderLeft: `3px solid ${ACCENT}`,
                                background: 'rgba(99,102,241,0.06)',
                                padding: '0.55rem 0.75rem',
                                borderRadius: '0 8px 8px 0',
                                margin: '0 0 0.7rem',
                                fontSize: '0.86rem',
                            }}
                        >
                            {inlineNodes(
                                lines.map((l) => l.replace(/^>\s?/, '')).join(' '),
                                `q${bi}`,
                            )}
                        </div>
                    );
                }

                // Stack / technologies line, rendered as chips
                const stack = first.match(/^(?:\*\*)?(Stack|Technologies|Tech)(?:\*\*)?:\s*(.+)$/i);
                if (stack && lines.length === 1 && stack[2].includes(',')) {
                    return (
                        <div key={bi}>
                            <div
                                style={{
                                    fontSize: '0.74rem',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                    color: 'var(--muted)',
                                    marginBottom: '0.3rem',
                                }}
                            >
                                {stack[1]}
                            </div>
                            <Chips raw={stack[2]} k={`s${bi}`} />
                        </div>
                    );
                }

                // Numbered list
                if (lines.every((l) => /^\s*\d+[.)]\s+/.test(l))) {
                    return (
                        <ol
                            key={bi}
                            style={{
                                margin: '0 0 0.7rem',
                                paddingLeft: 0,
                                listStyle: 'none',
                                counterReset: 'ci',
                            }}
                        >
                            {lines.map((l, li) => (
                                <li
                                    key={li}
                                    style={{
                                        display: 'flex',
                                        gap: '0.55rem',
                                        marginBottom: '0.4rem',
                                        alignItems: 'flex-start',
                                    }}
                                >
                                    <span
                                        style={{
                                            flexShrink: 0,
                                            width: '19px',
                                            height: '19px',
                                            borderRadius: '50%',
                                            background: `linear-gradient(135deg, ${ACCENT}, var(--primary-dark))`,
                                            color: 'white',
                                            fontSize: '0.68rem',
                                            fontWeight: 700,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginTop: '2px',
                                        }}
                                    >
                                        {li + 1}
                                    </span>
                                    <span>{inlineNodes(l.replace(/^\s*\d+[.)]\s+/, ''), `n${bi}-${li}`)}</span>
                                </li>
                            ))}
                        </ol>
                    );
                }

                // Bullet list
                if (lines.every((l) => /^\s*[-*•]\s+/.test(l))) {
                    return (
                        <ul key={bi} style={{ margin: '0 0 0.7rem', paddingLeft: 0, listStyle: 'none' }}>
                            {lines.map((l, li) => (
                                <li
                                    key={li}
                                    style={{
                                        display: 'flex',
                                        gap: '0.5rem',
                                        marginBottom: '0.3rem',
                                        alignItems: 'flex-start',
                                    }}
                                >
                                    <span
                                        style={{
                                            flexShrink: 0,
                                            width: '5px',
                                            height: '5px',
                                            borderRadius: '50%',
                                            background: ACCENT,
                                            marginTop: '9px',
                                        }}
                                    />
                                    <span>{inlineNodes(l.replace(/^\s*[-*•]\s+/, ''), `b${bi}-${li}`)}</span>
                                </li>
                            ))}
                        </ul>
                    );
                }

                // Label: value, where the label is short (Results:, Model:, Data:)
                const label = first.match(/^([A-Z][A-Za-z .]{2,26}):\s+(.*)$/);
                if (label && lines.length === 1) {
                    return (
                        <p key={bi} style={{ margin: '0 0 0.6rem' }}>
                            <span
                                style={{
                                    fontWeight: 700,
                                    color: ACCENT,
                                    fontSize: '0.82rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.4px',
                                    marginRight: '0.4rem',
                                }}
                            >
                                {label[1]}
                            </span>
                            {inlineNodes(label[2], `l${bi}`)}
                        </p>
                    );
                }

                // Paragraph
                return (
                    <p key={bi} style={{ margin: '0 0 0.6rem' }}>
                        {lines.map((l, li) => (
                            <span key={li}>
                                {inlineNodes(l, `p${bi}-${li}`)}
                                {li < lines.length - 1 && <br />}
                            </span>
                        ))}
                    </p>
                );
            })}
        </div>
    );
}
