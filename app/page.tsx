export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>Next.js Rendering Modes Demo</h1>

      <p>
        This application demonstrates Static Rendering (SSG),
        Dynamic Rendering (SSR), and Hybrid Rendering (ISR)
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

      <p>
        Each page uses a different rendering strategy to improve
        performance, scalability, and user experience.
      </p>
    </main>
  );
}
