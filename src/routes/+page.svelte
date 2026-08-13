<!-- src/routes/+page.svelte -->
<script>
	import { projects } from '$lib/data/projects';
	import { resolve } from '$app/paths';

	const featured = projects.slice(0, 4);
</script>

<svelte:head>
	<title>Vaibhav Salunke — Developer Profile</title>
	<meta
		name="description"
		content="Vaibhav Salunke — developer and homelab enthusiast in Pune, India. Self-hosted infrastructure, tools, and projects."
	/>
</svelte:head>

<section class="hero">
	<div class="container hero-grid">
		<div>
			<p class="eyebrow">Pune, India · Homelab &amp; Systems</p>
			<h1>Building small, reliable things on hardware I own.</h1>
			<p class="lead">
				I'm Vaibhav — a developer who runs half my life off a homelab rack, ships self-hosted
				tools, and writes about what breaks along the way.
			</p>
			<div class="cta-row">
				<a href="#work" class="btn btn-primary">See my projects</a>
				<a href="#contact" class="btn btn-ghost">Get in touch</a>
			</div>
		</div>
		<!-- <div class="terminal" aria-hidden="true">
			<div class="terminal-bar"><span></span><span></span><span></span></div> -->
		<div class="hero-side">
			<div class="profile-card">
				<img
					src="/DSC00310.JPG"
					alt="Portrait of Vaibhav Salunke"
					width="320"
					height="320"
					loading="lazy"
				/>
				<div class="profile-meta">
					<p class="profile-name">Vaibhav Salunke</p>
					<p class="profile-tag">Developer · Homelab · Electronics</p>
				</div>
			</div>

			<div class="terminal" aria-hidden="true">
				<div class="terminal-bar"><span></span><span></span><span></span></div>
				<pre>$ whoami
		<span class="accent">vaibhav@homelab</span>

		$ uptime
		14 days, 6:32 -- all services nominal

		$ ls ~/projects
		media-stack/  dns-sinkhole/
		status-page/  this-site/</pre>
		</div>
			<pre>$ whoami
<span class="accent">vaibhav@homelab</span>

<!-- Says Uptime here, random comment -->
$ uptime
14 days, 6:32 — all services nominal


$ ls ~/projects
media-stack/  dns-sinkhole/
status-page/  this-site/</pre>
		</div>
	</div>
</section>

<section id="work">
	<div class="container">
		<div class="section-head">
			<h2>Selected projects</h2>
			<p class="muted">A mix of homelab infrastructure, self-hosted tools, and the odd weekend build.</p>
		</div>
		<div class="projects-grid">
			{#each featured as project (project.slug)}
				<a class="card" href={resolve('/projects/[slug]', { slug: project.slug })}>					
					<span class="card-tag">{project.tag}</span>
					<h3>{project.title}</h3>
					<p>{project.description}</p>
					<div class="stack">
						{#each project.stack as tech (tech)}
							<span>{tech}</span>
						{/each}
					</div>
				</a>
			{/each}
		</div>
		<div class="view-all">
			<a href={resolve('/projects')} class="btn btn-ghost">View all projects</a>
		</div>
	</div>
</section>

<section id="electronics">
	<div class="container electronics-grid">
		<div>
			<p class="eyebrow">Hardware</p>
			<h2>Electronics tinkering</h2>
			<p class="muted">
				When I’m not breaking Docker, I’m usually burning fingers on soldering irons –
				building small boards, fixing random gear, or wiring up sensors to talk to my
				homelab.
			</p>
		</div>

		<div class="electronics-cards">
			<div class="electronics-card">
				<h3>Microcontrollers & sensors</h3>
				<p>
					ESP32 / Arduino projects that bridge the physical world to my network –
					temperature sensors, presence detectors, and little status LEDs driven over
					MQTT.
				</p>
				<ul>
					<li>ESP32 / ESP8266</li>
					<li>MQTT, Wi‑Fi</li>
					<li>Home‑rolled PCB prototypes</li>
				</ul>
			</div>

			<div class="electronics-card">
				<h3>Repair & teardown</h3>
				<p>
					I like opening up old hardware, tracing faults, and bringing devices back to
					life instead of throwing them away.
				</p>
				<ul>
					<li>Basic diagnostics with a multimeter</li>
					<li>Reflowing and re‑soldering components</li>
					<li>Documenting what I find as notes</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<section id="about">
	<div class="container about-grid">
		<div>
			<h2>About</h2>
			<p>
				I like taking things off the cloud and running them myself — partly for the cost savings,
				mostly because I enjoy understanding how the whole stack fits together.
			</p>
			<p>Based in Pune, India. When I'm not tuning a Docker Compose file, I'm probably breaking it.</p>
		</div>
		<div>
			<h3 class="toolbox-title">Toolbox</h3>
			<div class="skills">
				<span>Docker</span><span>SvelteKit</span><span>Cloudflare</span><span>Linux</span>
				<span>Python</span><span>Networking</span><span>Self-hosting</span>
			</div>
		</div>
	</div>
</section>

<style>
	.electronics-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.3fr);
		gap: var(--space-12);
		align-items: start;
	}

	.electronics-cards {
		display: grid;
		gap: var(--space-6);
	}

	.electronics-card {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		padding: var(--space-6);
		box-shadow: var(--shadow-sm);
	}

	.electronics-card h3 {
		font-size: var(--text-lg);
		margin-bottom: var(--space-3);
	}

	.electronics-card p {
		color: var(--color-text-muted);
		font-size: var(--text-sm);
		margin-bottom: var(--space-3);
	}

	.electronics-card ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
		font-size: var(--text-xs);
		color: var(--color-text-faint);
	}

	.electronics-card li {
		border: 1px solid var(--color-divider);
		border-radius: var(--radius-full);
		padding: var(--space-1) var(--space-3);
	}

	@media (max-width: 768px) {
		.electronics-grid {
			grid-template-columns: 1fr;
		}
	}
	.hero {
		padding-block: var(--space-32) var(--space-20);
		position: relative;
		overflow: hidden;
	}
	.hero-grid {
		display: grid;
		grid-template-columns: 1.2fr 0.8fr;
		gap: var(--space-12);
		align-items: center;
	}
	.hero-side {
	display: flex;
	flex-direction: column;
	gap: var(--space-6);
	align-items: stretch;
	}

	.profile-card {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		padding: var(--space-4);
		display: flex;
		align-items: center;
		gap: var(--space-4);
		box-shadow: var(--shadow-sm);
	}

	.profile-card img {
		border-radius: var(--radius-full);
		object-fit: cover;
		width: 96px;
		height: 96px;
	}

	.profile-meta {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
	}

	.profile-name {
		font-weight: 600;
		font-size: var(--text-lg);
	}

	.profile-tag {
		color: var(--color-text-muted);
		font-size: var(--text-sm);
	}

	@media (max-width: 768px) {
		.hero-side {
			order: -1; /* show photo above text on mobile, optional */
		}
	}
	.eyebrow {
		color: var(--color-primary);
		font-size: var(--text-xs);
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		margin-bottom: var(--space-4);
	}
	.hero h1 {
		font-size: var(--text-2xl);
		font-weight: 700;
		margin-bottom: var(--space-5);
	}
	.lead {
		color: var(--color-text-muted);
		font-size: var(--text-lg);
		max-width: 46ch;
		margin-bottom: var(--space-8);
	}
	.cta-row {
		display: flex;
		gap: var(--space-4);
		flex-wrap: wrap;
	}
	.btn {
		padding: var(--space-3) var(--space-6);
		border-radius: var(--radius-md);
		font-weight: 600;
		font-size: var(--text-sm);
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
	}
	.btn-primary {
		background: var(--color-primary);
		color: var(--color-text-inverse);
	}
	.btn-primary:hover {
		background: var(--color-primary-hover);
		box-shadow: var(--shadow-md);
		transform: translateY(-1px);
	}
	.btn-ghost {
		border: 1px solid var(--color-border);
		color: var(--color-text);
	}
	.btn-ghost:hover {
		background: var(--color-surface-offset);
	}
	.terminal {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-lg);
		overflow: hidden;
	}
	.terminal-bar {
		display: flex;
		gap: var(--space-2);
		padding: var(--space-3);
		background: var(--color-surface-offset);
		border-bottom: 1px solid var(--color-divider);
	}
	.terminal-bar span {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: var(--color-text-faint);
	}
	.terminal pre {
		padding: var(--space-5);
		font-family: monospace;
		font-size: var(--text-sm);
		color: var(--color-text-muted);
		white-space: pre-wrap;
	}
	.terminal .accent {
		color: var(--color-primary);
	}
	section {
		padding-block: var(--space-20);
	}
	.section-head {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		margin-bottom: var(--space-10);
		flex-wrap: wrap;
		gap: var(--space-4);
	}
	.section-head h2 {
		font-size: var(--text-xl);
	}
	.muted {
		color: var(--color-text-muted);
		max-width: 40ch;
	}
	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(320px, 100%), 1fr));
		gap: var(--space-6);
	}
	.card {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		padding: var(--space-6);
		display: block;
	}
	.card:hover {
		box-shadow: var(--shadow-md);
		transform: translateY(-2px);
	}
	.card-tag {
		display: inline-block;
		font-size: var(--text-xs);
		font-weight: 600;
		color: var(--color-primary);
		background: var(--color-primary-highlight);
		padding: var(--space-1) var(--space-3);
		border-radius: var(--radius-full);
		margin-bottom: var(--space-4);
	}
	.card h3 {
		font-size: var(--text-lg);
		margin-bottom: var(--space-2);
	}
	.card p {
		color: var(--color-text-muted);
		font-size: var(--text-sm);
		margin-bottom: var(--space-5);
	}
	.stack {
		display: flex;
		gap: var(--space-2);
		flex-wrap: wrap;
		font-size: var(--text-xs);
		color: var(--color-text-faint);
	}
	.stack span {
		border: 1px solid var(--color-divider);
		padding: var(--space-1) var(--space-2);
		border-radius: var(--radius-sm);
	}
	.view-all {
		margin-top: var(--space-10);
	}
	.about-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-12);
		align-items: start;
	}
	.about-grid p {
		color: var(--color-text-muted);
		margin-bottom: var(--space-4);
		max-width: 60ch;
	}
	.toolbox-title {
		font-size: var(--text-lg);
		margin-bottom: var(--space-3);
	}
	.skills {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		margin-top: var(--space-4);
	}
	.skills span {
		border: 1px solid var(--color-border);
		background: var(--color-surface);
		padding: var(--space-2) var(--space-4);
		border-radius: var(--radius-full);
		font-size: var(--text-sm);
	}
	@media (max-width: 768px) {
		.hero-grid,
		.about-grid {
			grid-template-columns: 1fr;
		}
	}
</style>