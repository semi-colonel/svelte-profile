<script lang="ts">
  type Layer = 'All' | 'Networking' | 'Virtualization' | 'Applications' | 'Security';
  type Component = { id: string; title: string; layer: Exclude<Layer, 'All'>; subtitle: string; description: string; lessons: string; x: number; y: number; link?: string };
  const layers: Layer[] = ['All', 'Networking', 'Virtualization', 'Applications', 'Security'];
  const components: Component[] = [
    { id: 'cloudflare', title: 'Cloudflare', layer: 'Networking', subtitle: 'Public edge & tunnels', description: 'Cloudflare Pages hosts this portfolio. Cloudflare Tunnel is used in my homelab experiments to connect selected services without opening inbound ports.', lessons: 'Tunnel lifecycle, DNS configuration, deployment troubleshooting.', x: 50, y: 10, link: '/projects/this-site' },
    { id: 'openwrt', title: 'OpenWrt', layer: 'Networking', subtitle: 'Router & LAN', description: 'OpenWrt is my LAN router and the starting point for local network configuration and troubleshooting.', lessons: 'DHCP, local DNS, routing and service connectivity.', x: 50, y: 31, link: '/projects/dns-sinkhole' },
    { id: 'adguard', title: 'AdGuard Home', layer: 'Networking', subtitle: 'Local DNS filtering', description: 'AdGuard Home handles local DNS filtering and hostname rewrites in the homelab.', lessons: 'DNS rewrites, resolving local services, DNS versus HTTP ports.', x: 19, y: 52, link: '/projects/dns-sinkhole' },
    { id: 'proxmox', title: 'Proxmox', layer: 'Virtualization', subtitle: 'Virtualization platform', description: 'I use Proxmox for virtualization and have investigated host connectivity and cluster quorum behavior.', lessons: 'VM operations, cluster quorum, physical host and network diagnosis.', x: 50, y: 52 },
    { id: 'docker', title: 'Docker Compose', layer: 'Applications', subtitle: 'Containerized services', description: 'Docker Compose organizes self-hosted applications and their configuration, storage, networking and dependencies.', lessons: 'Service dependencies, persistent volumes, container networking.', x: 50, y: 74, link: '/projects/media-stack' },
    { id: 'immich', title: 'Immich', layer: 'Applications', subtitle: 'Photo management', description: 'A self-hosted photo management project in my application stack.', lessons: 'Application hosting, storage and maintenance.', x: 19, y: 92, link: '/projects/immich' },
    { id: 'gluetun', title: 'Gluetun / Mullvad', layer: 'Security', subtitle: 'VPN-bound workloads', description: 'I route selected container traffic through Gluetun using Mullvad WireGuard and have troubleshot tunnel health and DNS failures.', lessons: 'WireGuard, VPN kill-switch behavior, health checks, container routes.', x: 81, y: 92, link: '/projects/media-stack' }
  ];
  const connections: [string, string][] = [
    ['cloudflare','openwrt'], ['openwrt','adguard'], ['openwrt','proxmox'], ['proxmox','docker'], ['docker','immich'], ['docker','gluetun']
  ];
  let activeLayer = $state<Layer>('All');
  let selectedId = $state('openwrt');
  const selected = $derived(components.find((component) => component.id === selectedId) ?? components[0]);
  const byId = (id: string) => components.find((component) => component.id === id)!;
  const chooseLayer = (layer: Layer) => {
    activeLayer = layer;
    if (layer !== 'All' && selected.layer !== layer) {
      selectedId = components.find((component) => component.layer === layer)?.id ?? selectedId;
    }
  };
</script>

<svelte:head>
  <title>Interactive Homelab Architecture | Vaibhav Salunke</title>
  <meta name="description" content="Explore a documented homelab with OpenWrt, Proxmox, Docker, AdGuard Home, Cloudflare and VPN networking." />
</svelte:head>

<section class="container showcase">
  <p class="eyebrow">Infrastructure / Homelab</p>
  <h1>Inside my homelab</h1>
  <p class="intro">A guided tour of the technologies I use to learn infrastructure engineering. Choose a layer, then select a component to explore its purpose and the problems I've worked through.</p>
  <p class="disclaimer">Conceptual architecture, not a live network map. Connections are simplified and do not imply every service runs on the same host. No private network details or real-time service status are exposed.</p>

  <div class="filters" role="group" aria-label="Filter architecture components">
    {#each layers as layer}
      <button type="button" class:active={activeLayer === layer} aria-pressed={activeLayer === layer} onclick={() => chooseLayer(layer)}>{layer}</button>
    {/each}
  </div>

  <div class="legend" aria-label="Diagram legend"><span><i class="key key-node"></i> Select a component for details</span><span><i class="key key-line"></i> Conceptual relationship, not a physical cable</span></div>

  <div class="explorer">
    <div class="diagram" aria-label="Conceptual homelab architecture">
      <svg viewBox="0 0 100 105" preserveAspectRatio="none" aria-hidden="true">
        {#each connections as [from, to]}
          <line x1={byId(from).x} y1={byId(from).y} x2={byId(to).x} y2={byId(to).y} class:dimmed={activeLayer !== 'All' && byId(from).layer !== activeLayer && byId(to).layer !== activeLayer} />
        {/each}
      </svg>
      {#each components as component (component.id)}
        <button
          type="button"
          class="node"
          class:selected={selectedId === component.id}
          class:dimmed={activeLayer !== 'All' && component.layer !== activeLayer}
          style:left={component.x + '%'}
          style:top={(component.y / 105) * 100 + '%'}
          aria-pressed={selectedId === component.id}
          onclick={() => { selectedId = component.id; }}
        >
          <span class="node-title">{component.title}</span>
          <span class="node-subtitle">{component.subtitle}</span>
        </button>
      {/each}
    </div>

    <aside class="details" aria-live="polite">
      <p class="eyebrow">{selected.layer}</p>
      <h2>{selected.title}</h2>
      <p class="subtitle">{selected.subtitle}</p>
      <h3>What it does</h3>
      <p>{selected.description}</p>
      <h3>What I've worked on</h3>
      <p>{selected.lessons}</p>
      {#if selected.link}
        <a class="project-link" href={selected.link}>Explore related project →</a>
      {/if}
    </aside>
  </div>

  <div class="mobile-picker"><label for="component-select">Jump to a component</label><select id="component-select" value={selectedId} onchange={(event) => selectedId = event.currentTarget.value}>{#each components.filter((component) => activeLayer === 'All' || component.layer === activeLayer) as component}<option value={component.id}>{component.title}</option>{/each}</select></div>

  <div class="notes">
    <h2>How I approach the lab</h2>
    <div class="note-grid">
      <article><h3>Networking first</h3><p>Understand DNS, routing and reachability before debugging applications.</p></article>
      <article><h3>Reproducible services</h3><p>Use Compose files and persistent storage to make services easier to maintain.</p></article>
      <article><h3>Learn by troubleshooting</h3><p>Investigate real issues, from Proxmox quorum to VPN health checks and Cloudflare deployments.</p></article>
    </div>
  </div>
</section>

<style>
  .showcase{padding-block:var(--space-20);max-width:1200px}
  .eyebrow{color:var(--color-primary);font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:.09em}
  h1{font-size:clamp(2rem,5vw,3.5rem);margin:var(--space-3) 0 var(--space-5)}
  .intro{color:var(--color-text-muted);max-width:75ch;line-height:1.7}
  .disclaimer{font-size:var(--text-sm);color:var(--color-text-muted);margin:var(--space-5) 0 var(--space-8);padding:var(--space-4);border-left:3px solid var(--color-primary);background:var(--color-surface)}
  .filters{display:flex;gap:var(--space-2);flex-wrap:wrap;margin-bottom:var(--space-6)}
  .filters button{border:1px solid var(--color-border);border-radius:var(--radius-full);padding:var(--space-2) var(--space-4);background:var(--color-surface);color:var(--color-text);font-weight:600;font-size:var(--text-sm);cursor:pointer}
  .filters button.active{background:var(--color-primary);color:var(--color-text-inverse);border-color:var(--color-primary)}
  .legend{display:flex;flex-wrap:wrap;gap:var(--space-4);margin-bottom:var(--space-4);font-size:var(--text-xs);color:var(--color-text-muted)}
  .legend span{display:inline-flex;align-items:center;gap:8px}
  .key{display:inline-block;width:14px;height:12px;border:2px solid var(--color-primary);border-radius:3px}
  .key-line{height:0;border:0;border-top:2px solid var(--color-primary);border-radius:0}
  .mobile-picker{display:none}
  .explorer{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(260px,1fr);gap:var(--space-5);align-items:stretch}
  .diagram{position:relative;min-height:570px;background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-lg);overflow:hidden;background-image:radial-gradient(var(--color-divider) 1px,transparent 1px);background-size:18px 18px}
  .diagram svg{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
  .diagram line{stroke:var(--color-primary);stroke-width:.35;opacity:.6;vector-effect:non-scaling-stroke;stroke-width:2}
  .diagram line.dimmed{opacity:.12}
  .node{position:absolute;transform:translate(-50%,-50%);width:clamp(95px,25%,155px);padding:var(--space-3) var(--space-2);border:1px solid var(--color-border);border-radius:var(--radius-md);background:var(--color-bg);color:var(--color-text);box-shadow:var(--shadow-sm);cursor:pointer;display:flex;flex-direction:column;gap:3px;align-items:center;text-align:center}
  .node:hover,.node.selected{border-color:var(--color-primary);box-shadow:0 0 0 2px var(--color-primary-highlight)}
  .node:focus-visible,.filters button:focus-visible{outline:3px solid var(--color-primary);outline-offset:3px}
  .node.dimmed{opacity:.32}
  .node-title{font-size:clamp(.7rem,1.4vw,.95rem);font-weight:700}
  .node-subtitle{font-size:.67rem;color:var(--color-text-muted);line-height:1.3}
  .details{border:1px solid var(--color-border);background:var(--color-surface);border-radius:var(--radius-lg);padding:var(--space-7)}
  .details h2{font-size:var(--text-xl);margin:var(--space-3) 0}
  .details .subtitle{color:var(--color-text-muted);margin-bottom:var(--space-8)}
  .details h3{font-size:var(--text-sm);margin:var(--space-6) 0 var(--space-2)}
  .details p{line-height:1.7;color:var(--color-text-muted)}
  .project-link{display:inline-block;margin-top:var(--space-7);color:var(--color-primary);font-weight:700}
  .notes{margin-top:var(--space-16)}
  .notes h2{font-size:var(--text-xl);margin-bottom:var(--space-6)}
  .note-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:var(--space-5)}
  .note-grid article{background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-lg);padding:var(--space-6)}
  .note-grid h3{font-size:var(--text-lg);margin-bottom:var(--space-3)}
  .note-grid p{color:var(--color-text-muted);line-height:1.6}
  @media(max-width:800px){.mobile-picker{display:flex;flex-direction:column;gap:var(--space-2);margin-top:var(--space-5)}.mobile-picker select{padding:var(--space-3);border:1px solid var(--color-border);border-radius:var(--radius-md);background:var(--color-surface);color:var(--color-text)}.explorer{grid-template-columns:1fr}.diagram{min-height:510px}.note-grid{grid-template-columns:1fr}.node{width:29%;padding:8px 3px}.node-subtitle{font-size:.59rem}}
</style>
