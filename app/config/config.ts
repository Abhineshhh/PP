export const config = {
	resumeUrl: "https://resume.abhineshhh.me",
	profile: {
		name: "Abhinesh Jha",
	},
	navigation: [
		{ path: "#home", name: "Home" },
		{ path: "#projects", name: "Projects" },
		{ path: "#blog", name: "Blog" },
		{ path: "#contact", name: "Contact" },
	],
	projects: [
		{
			title: "Caching Proxy",
			description:
				"Built an HTTP caching proxy using Spring Boot that caches GET requests with Redis, includes TTL support, X-Cache headers, invalidation endpoints, and Dockerized Redis.",
			technologies: ["Java", "Spring Boot", "Spring Data Redis", "Redis", "Docker"],
			website: "https://github.com/Abhineshhh/caching-proxy",
			category: "Backend",
			workType: "Personal",
		},
		{
			title: "PeerLink — Secure P2P File Sharing Platform",
			description:
				"Built a peer-to-peer file transfer system using socket programming supporting 500MB+ transfers. Includes PIN authentication, rate limiting, auto-delete, concurrent handling of 50+ transfers, and a custom HTTP parser for faster uploads.",
			technologies: ["Java", "Next.js", "TypeScript", "Socket Programming"],
			website: "https://github.com/Abhineshhh/Peerlink",
			category: "Full Stack",
			workType: "Personal",
		},
	],
	socials: {
		email: "jhaabhinesh977@gmail.com",
		github: "https://github.com/Abhineshhh",
		twitter: "https://x.com/Abhineshhh",
		linkedin: "https://www.linkedin.com/in/abhineshhh/",
	},
};
