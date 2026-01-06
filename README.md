## Advanced Data Fetching with Next.js App Router

This project demonstrates three rendering strategies supported by Next.js.

### Static Rendering (SSG)
- Page: /about
- Rendered at build time
- Fastest performance with no server cost
- Suitable for pages that rarely change

### Dynamic Rendering (SSR)
- Page: /dashboard
- Rendered on every request
- Always returns fresh data
- Suitable for dashboards and real-time content

### Hybrid Rendering (ISR)
- Page: /blog
- Uses Incremental Static Regeneration
- Served as static content with periodic background regeneration
- Balances performance and data freshness

### ISR Observation
The Hybrid page displays a generation timestamp including seconds.
This can make it appear as though the page is regenerating frequently.

However, the page is still served as static content.
Actual regeneration happens only after the revalidation interval and is triggered by a new request.
The change in seconds is due to the timestamp display, not because ISR runs on every request.

### Reflection
If the application scaled to 10x more users, using SSR everywhere would increase server cost.
Using Static and Hybrid rendering would improve scalability, reduce load, and enhance performance.
