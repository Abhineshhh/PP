import Chip from "./chip";
import Separator from "./separator";
import ArrowIcon from "./ArrowIcon";

interface ProjectCardProps {
	title: string;
	description: string;
	technologies: string[];
	website: string;
	category?: string;
	workType?: string;
}

export default function ProjectCard({
	title,
	description,
	technologies,
	website,
	category,
	workType,
}: ProjectCardProps) {
	return (
		<div>
			<div className="flex items-center justify-between">
				<a
					href={website}
					target="_blank"
					rel="noopener noreferrer"
					className="group flex items-center gap-2"
				>
					<h3 className="font-medium text-lg tracking-tight group-hover:underline underline-offset-4 decoration-neutral-400 dark:decoration-neutral-600">
						{title}
					</h3>
					<div className="text-neutral-400 dark:text-neutral-500">
						<ArrowIcon />
					</div>
				</a>
			</div>
			{(category || workType) && (
				<p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
					{category && workType
						? `${category} | ${workType}`
						: category || workType}
				</p>
			)}
			<p className="text-base text-neutral-800 dark:text-neutral-200 mt-2 leading-relaxed">
				{description}
			</p>
			<div className="flex flex-wrap gap-2 mt-3">
				{technologies.map((tech) => (
					<Chip key={tech} tech={tech} />
				))}
			</div>
			<Separator />
		</div>
	);
}
