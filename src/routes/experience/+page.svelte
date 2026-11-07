<svelte:head>
  <title>Professional Experience | Vaibhav Salunke</title>
  <meta name="description" content="Vaibhav Salunke's experience in Python infrastructure automation, Linux and AWS deployments, React development, and REST API integration." />
</svelte:head>

<section class="container experience">
  <p class="eyebrow">Professional background</p>
  <h1>Experience</h1>
  <p class="intro">My work spans Python-based infrastructure automation, Linux application deployment, production troubleshooting, and collaborative web development. Here is what I worked on and the technologies I used.</p>

  <article>
    <div class="heading"><h2>Aligned Automation</h2><span class="category">Infrastructure automation</span></div>
    <p class="role">Python · Enterprise hardware · Serial communication · JSON / YAML · GitHub / GitLab</p>
    <ul>
      <li>Worked on Python automation scripts for configuring enterprise infrastructure, including Dell PowerEdge servers, PowerScale storage, Data Domain systems, and Connectrix switches.</li>
      <li>Used structured configuration inputs in an automation workflow where JSON configuration was converted to YAML by a separate CLI tool.</li>
      <li>Worked with Python scripts that communicated with supported hardware over serial connections to apply configuration settings.</li>
      <li>Maintained and collaborated on source code using GitHub and later GitLab, as part of a wider application workflow involving a C# and Angular client application.</li>
    </ul>
  </article>

  <article>
    <div class="heading"><h2>YoZU</h2><span class="category">Web applications & operations</span></div>
    <p class="role">React · Node.js · Python APIs · REST · Linux · AWS EC2 · GitHub</p>
    <ul>
      <li>Developed frontend website features in React while collaborating with a backend engineer on REST API integration.</li>
      <li>Worked with applications that used Node.js and Python-backed APIs, focusing on the frontend and integration rather than independently owning the backend services.</li>
      <li>Deployed and maintained frontend applications on existing Linux-based AWS EC2 infrastructure.</li>
      <li>Investigated production issues and supported application maintenance using GitHub for source control.</li>
    </ul>
  </article>

  <article>
    <div class="heading"><h2>Full-stack development training</h2><span class="category">Technical foundation</span></div>
    <p class="role">ASP.NET · C# · SQL Server · MySQL · REST APIs · Authentication</p>
    <ul>
      <li>Trained under a senior full-stack developer on how application layers connect, from user authentication and REST APIs to database operations.</li>
      <li>Worked with ASP.NET and C# alongside SQL Server and MySQL while learning the integration between frontend, backend, and data storage.</li>
    </ul>
  </article>

  <div class="next-step">
    <h2>Interested in working together?</h2>
    <p>I'm especially interested in roles involving infrastructure, Linux systems, automation, and cloud operations.</p>
    <div class="actions">
      <a class="button primary" href="https://docs.google.com/document/d/1ElqFP7cjvZJlhA_f6EpY-MZGHZ_yRSs9DuAjOteiP1I/export?format=pdf" target="_blank" rel="noopener noreferrer">Download CV (PDF)</a>
      <a class="button" href="/#contact">Get in touch</a>
    </div>
  </div>
</section>

<style>
  .experience { padding-block: var(--space-24); max-width: 900px; }
  .eyebrow { color: var(--color-primary); font-weight: 600; letter-spacing: .06em; text-transform: uppercase; font-size: var(--text-xs); }
  h1 { font-size: var(--text-2xl); margin: var(--space-4) 0; }
  .intro { color: var(--color-text-muted); margin-bottom: var(--space-12); max-width: 72ch; line-height: 1.7; }
  article { padding: var(--space-8) 0; border-bottom: 1px solid var(--color-divider); }
  .heading { display: flex; align-items: baseline; justify-content: space-between; flex-wrap: wrap; gap: var(--space-3); }
  article h2 { font-size: var(--text-xl); margin-bottom: var(--space-3); }
  .category { color: var(--color-text-muted); font-size: var(--text-sm); }
  .role { color: var(--color-primary); font-weight: 600; margin-bottom: var(--space-4); line-height: 1.6; }
  ul { padding-left: var(--space-6); color: var(--color-text-muted); }
  li { line-height: 1.75; margin-bottom: var(--space-3); }
  li::marker { color: var(--color-primary); }
  .next-step { margin-top: var(--space-12); padding: var(--space-8); border: 1px solid var(--color-border); background: var(--color-surface); border-radius: var(--radius-lg); }
  .next-step h2 { font-size: var(--text-xl); margin-bottom: var(--space-3); }
  .next-step p { color: var(--color-text-muted); line-height: 1.7; }
  .actions { display: flex; flex-wrap: wrap; gap: var(--space-3); margin-top: var(--space-6); }
  .button { display: inline-block; padding: var(--space-3) var(--space-5); border: 1px solid var(--color-border); border-radius: var(--radius-md); font-weight: 600; }
  .button.primary { background: var(--color-primary); color: var(--color-text-inverse); border-color: var(--color-primary); }
</style>
