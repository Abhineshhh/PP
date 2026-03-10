import ArrowIcon from "./components/ArrowIcon";
import Separator from "./components/separator";
import ProjectCard from "./components/project-card";
import AnimateIn from "./components/animate-in";
import { config } from "./config/config";

export default function Page() {
    return (
        <section>
            {/* ===== HOME / HERO ===== */}
            <div id="home">
                <AnimateIn delay={0}>
                <header className="mb-6">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h1 className='font-medium text-2xl tracking-tight font-["monospace"]'>
                            Hey, I&apos;m {config.profile.name} 
                        </h1>
                    </div>
                    <p className="text-lg prose prose-neutral dark:prose-invert">
                        I&apos;m a <strong>Backend-focused developer</strong> and{" "}
                        <strong>open-source contributor</strong> from India. I build
                        scalable systems, developer tools, and
                        full-stack applications - always learning, always
                        shipping.
                    </p>
                </header>
                </AnimateIn>

                <Separator />

                <AnimateIn delay={0.12}>
                {/* What I Do */}
                <div className="mt-8 prose prose-neutral dark:prose-invert max-w-none">
                    <h2>What I Do</h2>
                    <div className="leading-relaxed space-y-4">
                        <p>
                            I design and build backend systems and full-stack
                            applications with a focus on scalability,
                            reliability, and clean architecture. My primary
                            stack revolves around <strong>Java</strong> and{" "}
                            <strong>Go</strong>, complemented by experience
                            across modern databases, containerization, and
                            CI/CD pipelines.
                        </p>
                        <p>
                            I&apos;m an active open-source contributor and
                            multi-time winner of competitive open-source
                            programs, with a strong track record of shipping
                            production-grade code across backend services,
                            developer tools, and AI-powered applications.
                        </p>
                    </div>
                </div>
                <div className="mt-6">
                    <a
                        href={config.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-neutral-900 dark:text-neutral-100 hover:opacity-70 transition-all font-medium"
                    >
                        <ArrowIcon />
                        See my resume
                    </a>
                </div>
                </AnimateIn>
            </div>

            <Separator />

            {/* ===== PROJECTS ===== */}
            <div id="projects" className="scroll-mt-16 mt-8">
                <AnimateIn>
                <h2 className="font-medium text-2xl mb-4 tracking-tighter text-neutral-900 dark:text-neutral-100">
                    Projects
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                    Things I&apos;ve built — from backend systems to full-stack
                    platforms.
                </p>

                <div>
                    {config.projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            website={project.website}
                            category={project.category}
                            workType={project.workType}
                        />
                    ))}
                </div>
                </AnimateIn>
            </div>

            {/* ===== BLOG ===== */}
            <div id="blog" className="scroll-mt-16 mt-8">
                <AnimateIn>
                <h2 className="font-medium text-2xl mb-4 tracking-tighter text-neutral-900 dark:text-neutral-100">
                    Blog
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                    I&apos;m working on some articles about backend
                    engineering, system design, and open-source development.
                    Stay tuned — first post coming soon.
                </p>
                <div className="flex items-center gap-2 mt-4 mb-6 px-4 py-8 rounded-lg border border-dashed border-neutral-300 dark:border-neutral-700 justify-center">
                    <p className="text-sm text-neutral-400 dark:text-neutral-500">
                        No posts yet — check back soon.
                    </p>
                </div>
                </AnimateIn>
            </div>

            {/* ===== CONTACT ===== */}
            <div id="contact" className="scroll-mt-16 mt-8 pb-16">
                <AnimateIn>
                <h2 className="font-medium text-2xl mb-6 tracking-tighter text-neutral-900 dark:text-neutral-100">
                    Contact
                </h2>

                <div className="relative z-10">
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                        Feel free to reach out to me via email:
                    </p>
                    <a
                        href={`mailto:${config.socials.email}`}
                        className="inline-flex items-center gap-2 text-neutral-900 dark:text-neutral-100 hover:opacity-70 transition-all font-medium text-lg"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        <span>{config.socials.email}</span>
                    </a>

                    <Separator />

                    <h3 className="font-medium text-xl tracking-tighter text-neutral-900 dark:text-neutral-100 mb-6">
                        Find me elsewhere
                    </h3>
                    <div className="flex flex-row items-center gap-6 mt-4">
                        <a
                            href={config.socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub
                        </a>
                        <a
                            href={config.socials.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                            Twitter
                        </a>
                        <a
                            href={config.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            LinkedIn
                        </a>
                    </div>
                </div>
                </AnimateIn>
            </div>
        </section>
    );
}
