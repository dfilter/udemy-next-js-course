export default function NewsPage({ params }) {
  return (
    <main>
      <h1>News Details</h1>
      <p>News ID: {params.id}</p>
    </main>
  );
}
