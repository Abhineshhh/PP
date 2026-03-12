"use client";

import { useEffect, useState } from "react";
import { config } from "../config/config";

export default function Footer() {
	const [visitor, setVisitor] = useState<string | null>(null);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);

		// Visitor geolocation with fallback
		const controller = new AbortController();
		fetch("https://ipapi.co/json/", { signal: controller.signal })
			.then((r) => r.json())
			.then((d) => {
				if (d.city && d.country_name) {
					setVisitor(`${d.city}, ${d.country_name}`);
				}
			})
			.catch((err) => {
				if (err?.name === "AbortError") return;
				fetch("https://ipwho.is/", { signal: controller.signal })
					.then((r) => r.json())
					.then((d) => {
						if (d.success && d.city && d.country) {
							setVisitor(`${d.city}, ${d.country}`);
						}
					})
					.catch(() => {});
			});

		return () => {
			controller.abort();
		};
	}, []);

	return (
		<footer className="mt-6 mb-4 border-t border-neutral-200 dark:border-neutral-800 pt-3">
			<div className="flex justify-between items-center text-xs text-neutral-400 dark:text-neutral-500">
				<div>
					{mounted && visitor ? (
						<p>
							Visiting from:{" "}
							<span className="font-semibold text-neutral-700 dark:text-neutral-300">
								{visitor}
							</span>
						</p>
					) : (
						<p className="invisible">Loading...</p>
					)}
				</div>
				<p>
					crafted by:{" "}
					<span className="font-semibold text-neutral-700 dark:text-neutral-300">
						{config.profile.firstName}
					</span>
				</p>
			</div>
		</footer>
	);
}

