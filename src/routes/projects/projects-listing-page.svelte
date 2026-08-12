<!-- src/routes/projects/+page.svelte -->
<script>
	import { projects } from '$lib/data/projects';
</script>

<svelte:head>
	<title>Projects — Vaibhav Salunke</title>
	<meta name="description" content="Homelab, networking, and web projects by Vaibhav Salunke." />
</svelte:head>

<section class="page-header">
	<div class="container">
		<p class="eyebrow">All work</p>
		<h1>Projects</h1>
		<p class="lead">Homelab infrastructure, self-hosted tools, and the odd weekend build.</p>
	</div>
</section>

<section>
	<div class="container">
		<div class="projects-grid">
			{#each projects as project}
				<a class="card" href={`/projects/${project.slug}`}>
					<span class="card-tag">{project.tag}</span>
					<h2>{project.title}</h2>
					<p>{project.description}</p>
					<div class="stack">
						{#each project.stack as tech}
							<span>{tech}</span>
						{/each}
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	.page-header {
		padding-block: var(--space-24) var(--space-12);
	}
	.eyebrow {
		color: var(--color-primary);
		font-size: var(--text-xs);
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		margin-bottom: var(--space-4);
	}
	.page-header h1 {
		font-size: var(--text-xl);
		margin-bottom: var(--space-4);
	}
	.lead {
		color: var(--color-text-muted);
		max-width: 50ch;
	}
	section {
		padding-block: var(--space-8) var(--space-20);
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
	.card h2 {
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
</style>
