export const dynamic = "force-dynamic";

async function getUsers() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    { cache: "no-store" }
  );
  return res.json();
}

export default async function Dashboard() {
  const users = await getUsers();

  return (
    <div>
      <h1>DYNAMIC page (SSR)</h1>
      {users.map(u => (
        <p key={u.id}>{u.name}</p>
      ))}
    </div>
  );
}
