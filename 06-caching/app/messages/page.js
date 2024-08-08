import { unstable_noStore } from "next/cache";

import Messages from "@/components/messages";

// configures requests to this route/component be cached for 5 seconds.
// export const revalidate = 5;

// default is 'auto' 'force-dynamic' will disable caching for this component.
// next recommends using unstable_noStore instead of dynamic export.
// export const dynamic = "force-dynamic";

export default async function MessagesPage() {
  /**
   * Disables cache for only the component in which it is called.
   * @see https://nextjs.org/docs/app/api-reference/functions/unstable_noStore
   */
  // unstable_noStore();
  /**
   * @see https://nextjs.org/docs/app/api-reference/functions/fetch
   */
  const response = await fetch("http://localhost:8080/messages");
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
