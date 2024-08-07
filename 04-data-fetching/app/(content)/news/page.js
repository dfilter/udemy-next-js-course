"use client";

import NewsList from "@/components/news-list";
import { useEffect, useState } from "react";

export default function NewsPages() {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  const [news, setNews] = useState();

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/news");

      if (!response.ok) {
        setError("Failed to fetch news.");
        setIsLoading(false);
        return;
      }
      const news = await response.json();
      setNews(news);
      setIsLoading(false);
    }

    fetchNews();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  let newsContent;
  if (news) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <main>
      <h1>News Page</h1>
      {newsContent}
    </main>
  );
}
