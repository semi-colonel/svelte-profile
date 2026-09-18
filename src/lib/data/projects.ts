// src/lib/data/projects.ts
export type Project = {
	slug: string;
	title: string;
	tag: string;
	description: string;
	longDescription?: string;
	stack: string[];
	links?: { label: string; href: string }[];
	logo?: string;
};

export const projects: Project[] = [
	{
		slug: 'media-stack',
		title: 'Jellyfin: Self-hosted media stack',
		tag: 'Media Management',
		description:
			'Dockerized Jellyfin.',
		longDescription:
			'A fully self-hosted media stack running on a homelab server. Jellyfin handles playback, Sonarr and Radarr automate library management, and everything sits behind a Cloudflare Tunnel so no ports are exposed to the public internet.',
		stack: ['Docker', 'Nginx', 'Cloudflare Tunnel','Homelab'],
		links: [{ label: 'View the website!', href: 'https://jellyfin.vbvslnk.org/' }],
		logo:'https://raw.githubusercontent.com/jellyfin/jellyfin-ux/a40ffbcfd894fa2ceb7025286330b2c38e17f2c0/logos/SVG/jellyfin-icon--color-on-dark.svg',

	},
	{
		slug: 'immich',
		title: 'Immich - A Self Hosted Photo and Video Management solution',
		tag: 'Media Management',
		description: 'My own personal Google Photos, ',
		longDescription:
			'A minimal status dashboard that polls each self-hosted service on a 60-second interval and stores history in SQLite, with Grafana for longer-term trend charts.',
		stack: ['TypeScript','Homelab'],
		links: [{ label: 'View on GitHub', href: 'https://immich.vbvslnk.org/' }],
		logo: 'https://raw.githubusercontent.com/immich-app/immich/a939561e70f437dc7ab3ee2d8b859cc654d6cb3e/design/immich-logo.svg'
	},
	{
		slug: 'dns-sinkhole',
		title: 'Network-wide ad blocking',
		tag: 'Networking',
		description:
			'Pi-hole + Unbound running on a Raspberry Pi cluster with automatic failover between two nodes.',
		longDescription:
			'Two Raspberry Pis run Pi-hole with Unbound as a recursive resolver, load balanced with Keepalived so DNS keeps working even if one node goes down.',
		stack: ['Pi-hole', 'Unbound', 'Keepalived','Homelab'],
		links: [{ label: 'View on GitHub', href: 'https://github.com/yourusername/dns-sinkhole' }]
	},
	{
		slug: 'status-page',
		title: 'Status & uptime dashboard',
		tag: 'Monitoring',
		description: 'A lightweight status page for every homelab service, polling health checks every 60 seconds.',
		longDescription:
			'A minimal status dashboard that polls each self-hosted service on a 60-second interval and stores history in SQLite, with Grafana for longer-term trend charts.',
		stack: ['SvelteKit', 'SQLite', 'Grafana'],
		links: [{ label: 'View on GitHub', href: 'https://github.com/yourusername/status-page' }]
	},
	{
		slug: 'this-site',
		title: 'This site',
		tag: 'Web',
		description: 'A SvelteKit portfolio deployed on Cloudflare Pages, connected to my own domain.',
		longDescription:
			'This profile site itself — built with SvelteKit, statically prerendered, and deployed to Cloudflare Pages under profile.vbvslnk.org.',
		stack: ['SvelteKit', 'Cloudflare Pages'],
		links: [{ label: 'View on GitHub', href: 'https://github.com/yourusername/profile-site' }]
	}
];
