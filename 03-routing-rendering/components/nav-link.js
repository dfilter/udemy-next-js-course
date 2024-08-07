"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ children, href }) {
  const path = usePathname(); // requires "use client" directive to function.

  return (
    <Link href={href} className={path.startsWith(href) ? "active" : undefined}>
      {children}
    </Link>
  );
}
