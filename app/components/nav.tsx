"use client";

import { useEffect, useState } from "react";
import ISTClock from "./ist-clock";
import { config } from "../config/config";

export function Navbar() {
	const [activeSection, setActiveSection] = useState("home");

	useEffect(() => {
		const handleScroll = () => {
			const sections = config.navigation.map((n) =>
				n.path.replace("#", "")
			);
			const reversedSections = [...sections].reverse();
			for (const id of reversedSections) {
				const el = document.getElementById(id);
				if (el) {
					const rect = el.getBoundingClientRect();
					if (rect.top <= 100) {
						setActiveSection(id);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		path: string
	) => {
		e.preventDefault();
		const id = path.replace("#", "");
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<aside className="-ml-[8px] mb-8 tracking-tight">
			<div className="lg:sticky lg:top-20">
				<nav
					className="flex flex-col sm:flex-row relative px-0 pb-0 md:overflow-auto scroll-pr-6 md:relative gap-3 sm:gap-0 sm:items-center sm:justify-between"
					id="nav"
					aria-label="Main navigation"
				>
					<div className="flex flex-row flex-wrap space-x-0">
						{config.navigation.map(({ path, name }) => {
							const sectionId = path.replace("#", "");
							const isActive = activeSection === sectionId;
							return (
								<a
									key={path}
									href={path}
									onClick={(e) => handleClick(e, path)}
									aria-current={isActive ? "page" : undefined}
									className={`transition-all hover:text-neutral-900 dark:hover:text-neutral-100 flex align-middle relative py-2 px-2 text-sm tracking-tight ${
										isActive
											? "font-semibold text-neutral-900 dark:text-neutral-100"
											: "font-medium text-neutral-500 dark:text-neutral-400"
									}`}
								>
									{name}
								</a>
							);
						})}
					</div>
					<div className="flex items-center gap-3 flex-wrap">
						<ISTClock />
					</div>
				</nav>
			</div>
		</aside>
	);
}
