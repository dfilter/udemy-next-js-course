import NewsList from "@/components/news-list";
import { getAllNews, getAllNewsAsync } from "@/lib/news";

export default async function NewsPages() {
  const news = await getAllNewsAsync();

  return (
    <main>
      <h1>News Page</h1>
      <NewsList news={news} />
    </main>
  );
}
