export default function NewsPage({ params }) {
  return (
    <main>
      <h1>News Details</h1>
      {params.details}
    </main>
  );
}
