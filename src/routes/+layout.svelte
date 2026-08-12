<!-- src/routes/+layout.svelte -->
<script>
	import '$lib/styles/tokens.css';
	import '$lib/styles/base.css';


	let { children } = $props();

	let theme = $state('light');

	function toggleTheme() {
		theme = theme === 'dark' ? 'light' : 'dark';
		document.documentElement.setAttribute('data-theme', theme);
	}

	$effect(() => {
		const current = document.documentElement.getAttribute('data-theme');
		if (current) theme = current;
	});

	const navLinks = [
		{ href: '/#work', label: 'Work' },
		{ href: '/#about', label: 'About' },
		{ href: '/#contact', label: 'Contact' }
	];
</script>

<header>
	<div class="nav container">
		<a href="/" class="logo" aria-label="Home">
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
				<path d="M8 4L2 12l6 8M16 4l6 8-6 8" />
			</svg>
			vbvslnk
		</a>
		<nav aria-label="Primary">
			<ul>
				{#each navLinks as link (link.href)}
					<li><a href={link.href}>{link.label}</a></li>
				{/each}
				<li><a href="/projects">Projects</a></li>
			</ul>
		</nav>
		<button class="theme-toggle" onclick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
			{#if theme === 'dark'}
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
					<circle cx="12" cy="12" r="5" />
					<path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
				</svg>
			{:else}
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
					<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
				</svg>
			{/if}
		</button>
	</div>
</header>

<main>
	{@render children()}
</main>

<footer id="contact">
	<div class="container footer-row">
		<div>
			<h3>Let's talk.</h3>
			<p class="muted">vaibhav [at] vbvslnk.org</p>
		</div>
		<div class="socials">
			<a href="https://github.com/semi-colonel" target="_blank" rel="noopener noreferrer">GitHub</a>
			<a href="https://www.linkedin.com/in/vaibhav--salunke/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
			<a href="https://twitter.com/vbvslnk" target="_blank" rel="noopener noreferrer">Twitter</a>
		</div>
	</div>
</footer>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 50;
		background: color-mix(in oklab, var(--color-bg) 85%, transparent);
		backdrop-filter: blur(10px);
		border-bottom: 1px solid var(--color-divider);
	}
	.nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-block: var(--space-4);
	}
	.logo {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		font-family: var(--font-display);
		font-weight: 700;
		font-size: var(--text-lg);
	}
	.logo svg {
		width: 28px;
		height: 28px;
		color: var(--color-primary);
	}
	nav ul {
		display: flex;
		gap: var(--space-8);
		list-style: none;
		font-size: var(--text-sm);
		color: var(--color-text-muted);
	}
	nav ul a:hover {
		color: var(--color-primary);
	}
	.theme-toggle {
		width: 36px;
		height: 36px;
		border-radius: var(--radius-full);
		border: 1px solid var(--color-border);
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--color-surface);
	}
	.theme-toggle svg {
		width: 18px;
		height: 18px;
		color: var(--color-text);
	}
	footer {
		border-top: 1px solid var(--color-divider);
		padding-block: var(--space-12);
	}
	.footer-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: var(--space-4);
	}
	.footer-row h3 {
		font-size: var(--text-lg);
	}
	.muted {
		color: var(--color-text-muted);
	}
	.socials {
		display: flex;
		gap: var(--space-6);
	}
	.socials a {
		color: var(--color-text-muted);
		font-size: var(--text-sm);
	}
	.socials a:hover {
		color: var(--color-primary);
	}
	@media (max-width: 768px) {
		nav ul {
			display: none;
		}
	}
</style>
