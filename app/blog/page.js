export const revalidate = 60

export default function Blog() {
  return (
    <div>
      <h1>Hybrid Page (ISR)</h1>
      <p>Generated at: {new Date().toLocaleTimeString()}</p>
    </div>
  );
}
