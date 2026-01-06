export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>Next.js Rendering Modes Demo</h1>

      <p>
        This application demonstrates <b>Static Rendering (SSG)</b>,{" "}
        <b>Dynamic Rendering (SSR)</b>, and <b>Hybrid Rendering (ISR)</b>{" "}
        using the Next.js App Router.
      </p>

      <hr />

      <h2>Available Pages</h2>

      <ul>
        <li>
          <a href="/about">About Page – Static Rendering (SSG)</a>
        </li>
        <li>
          <a href="/dashboard">Dashboard Page – Dynamic Rendering (SSR)</a>
        </li>
        <li>
          <a href="/blog">Blog Page – Hybrid Rendering (ISR)</a>
        </li>
      </ul>

      <hr />

      <h2>Environment Information (Concept-2)</h2>

      <p>
        <b>Environment:</b>{" "}
        {process.env.ENV_NAME ?? "Not defined"}
      </p>

      <p>
        <b>API URL:</b>{" "}
        {process.env.NEXT_PUBLIC_API_URL ?? "Not defined"}
      </p>

      <hr />

      <p>
        Each page uses a different rendering strategy to improve
        performance, scalability, and user experience.
      </p>

      <p>
        Environment-aware builds ensure the same application behaves
        correctly across development, staging, and production.
      </p>
    </main>
  );
}
