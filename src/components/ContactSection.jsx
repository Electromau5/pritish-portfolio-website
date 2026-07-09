import React from 'react';

const ContactSection = ({
    email = "pritish@example.com",
    linkedinUrl = "https://linkedin.com/in/pritishpatel",
    twitterUrl = "https://twitter.com",
    dribbbleUrl = "https://dribbble.com",
    readcvUrl = "https://read.cv",
}) => {
    const socialLinks = [
        { label: "LinkedIn", href: linkedinUrl },
        { label: "Twitter", href: twitterUrl },
        { label: "Dribbble", href: dribbbleUrl },
        { label: "Read.cv", href: readcvUrl },
    ];

    return (
        <footer
            id="section-4"
            style={{
                backgroundColor: 'var(--bg-inverse)',
                paddingTop: 100,
                paddingBottom: 40,
            }}
        >
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
                <p
                    className="uppercase mb-5"
                    style={{
                        fontSize: 13,
                        fontWeight: 500,
                        color: 'var(--text-tertiary)',
                        letterSpacing: '1.04px',
                        lineHeight: 1.2,
                    }}
                >
                    Get in touch
                </p>

                <a
                    href={`mailto:${email}`}
                    style={{ textDecoration: 'none', display: 'block' }}
                >
                    <h2
                        style={{
                            fontSize: 'clamp(40px, 5.5vw, 64px)',
                            fontWeight: 600,
                            color: 'var(--text-inverse)',
                            lineHeight: 1.05,
                            letterSpacing: '-1.28px',
                            marginBottom: 20,
                            transition: 'opacity 0.15s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
                        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                    >
                        Let's work<br />together.
                    </h2>
                </a>

                <p
                    style={{
                        fontSize: 20,
                        fontWeight: 400,
                        color: 'var(--text-inverse)',
                        lineHeight: 1.5,
                        marginBottom: 48,
                    }}
                >
                    {email}
                </p>

                {/* Spacer */}
                <div style={{ height: 48 }} />

                {/* Bottom bar */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                    <p
                        style={{
                            fontSize: 13,
                            fontWeight: 400,
                            color: 'var(--text-tertiary)',
                            lineHeight: 1.4,
                            margin: 0,
                        }}
                    >
                        © 2025 Pritish Sai — Product Designer
                    </p>

                    <div style={{ display: 'flex', gap: 24 }}>
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: 'var(--text-inverse)',
                                    textDecoration: 'none',
                                    lineHeight: 1.4,
                                    transition: 'opacity 0.15s',
                                }}
                                onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
                                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ContactSection;
