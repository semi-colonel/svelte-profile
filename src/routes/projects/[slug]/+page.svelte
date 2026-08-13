<!-- src/routes/projects/[slug]/+page.svelte -->
<script>
	import { page } from '$app/stores';
	import { projects } from '$lib/data/projects';
    import { resolve } from 'path';

	const project = $derived(projects.find((p) => p.slug === $page.params.slug));
</script>

<svelte:head>
	<title>{project ? `${project.title} — Vaibhav Salunke` : 'Project not found'}</title>
	<meta name="description" content={project?.description ?? 'Project not found'} />
</svelte:head>

{#if project}
	<section class="detail">
		<div class="container">
			<a href={resolve("/projects")} class="back-link">&larr; All projects</a>
			<span class="card-tag">{project.tag}</span>
			<h1>{project.title}</h1>
			<p class="lead">{project.longDescription ?? project.description}</p>

			<div class="stack">
				<!-- {#each project.stack as tech}
					<span>{tech}</span>
				{/each} -->
			</div>

			{#if project.links?.length}
				<div class="links">
					{#each project.links as link (link)}
						<a href={resolve(link.href)} target="_blank" rel="noopener noreferrer" class="btn btn-ghost">
							{link.label}
						</a>
					{/each}
				</div>
			{/if}
		</div>
	</section>
{:else}
	<section class="detail">
		<div class="container empty-state">
			<h1>Project not found</h1>
			<p>That project doesn't exist yet — maybe it's still on the workbench.</p>
			<a href="/projects" class="btn btn-primary">Back to projects</a>
		</div>
	</section>
{/if}

<style>
	.detail {
		padding-block: var(--space-24) var(--space-20);
	}
	.back-link {
		display: inline-block;
		color: var(--color-text-muted);
		font-size: var(--text-sm);
		margin-bottom: var(--space-8);
	}
	.back-link:hover {
		color: var(--color-primary);
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
	h1 {
		font-size: var(--text-xl);
		margin-bottom: var(--space-5);
	}
	.lead {
		color: var(--color-text-muted);
		font-size: var(--text-lg);
		max-width: 65ch;
		margin-bottom: var(--space-8);
	}
	.stack {
		display: flex;
		gap: var(--space-2);
		flex-wrap: wrap;
		margin-bottom: var(--space-8);
	}
	.stack span {
		border: 1px solid var(--color-divider);
		padding: var(--space-2) var(--space-3);
		border-radius: var(--radius-sm);
		font-size: var(--text-sm);
		color: var(--color-text-faint);
	}
	.links {
		display: flex;
		gap: var(--space-4);
	}
	.btn {
		padding: var(--space-3) var(--space-6);
		border-radius: var(--radius-md);
		font-weight: 600;
		font-size: var(--text-sm);
		display: inline-flex;
		align-items: center;
	}
	.btn-primary {
		background: var(--color-primary);
		color: var(--color-text-inverse);
	}
	.btn-ghost {
		border: 1px solid var(--color-border);
		color: var(--color-text);
	}
	.btn-ghost:hover {
		background: var(--color-surface-offset);
	}
	.empty-state {
		text-align: left;
		color: var(--color-text-muted);
	}
	.empty-state h1 {
		color: var(--color-text);
	}
	.empty-state p {
		margin-bottom: var(--space-6);
	}
</style>
