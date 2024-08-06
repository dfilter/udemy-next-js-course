import Link from "next/link";

import Header from "@/components/header"; // "@" is an alias for the root folder

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        {/* <a href="/about">About Us</a> using regular anchor tag will request a new page from the server. */}
        {/* <Link> is best used for internal links. */}
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
}
