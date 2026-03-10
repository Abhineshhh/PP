"use client";

import { useEffect, useState } from "react";

export default function ISTClock() {
	const [time, setTime] = useState<string>("");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		const updateTime = () => {
			const now = new Date();
			const istTime = new Date(
				now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
			);
			const hours = istTime.getHours().toString().padStart(2, "0");
			const minutes = istTime.getMinutes().toString().padStart(2, "0");
			setTime(`${hours}:${minutes}`);
		};

		updateTime();

		// Align to the next minute boundary, then tick every 60s
		const now = new Date();
		const msUntilNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
		let interval: ReturnType<typeof setInterval>;
		const timeout = setTimeout(() => {
			updateTime();
			interval = setInterval(updateTime, 60000);
		}, msUntilNextMinute);

		return () => {
			clearTimeout(timeout);
			clearInterval(interval);
		};
	}, []);

	if (!mounted || !time) return null;

	return (
		<div className="flex items-center gap-2 px-2 py-2 text-sm font-medium tracking-tight text-neutral-500 dark:text-neutral-400 tabular-nums">
			<span className="relative flex h-2 w-2">
				<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
				<span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-400"></span>
			</span>
			<span>IST {time}</span>
		</div>
	);
}
