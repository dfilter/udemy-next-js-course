# Server vs Client Components

## [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)

- In Next.js all components are React Server Components (RSC) by default.
- These components are only rendered on the server meaning they cannot be used
  to manage client side state or, for example, onclick events.
- The advantage of this are:
  - There is less JS that needs to be sent to the client.
  - The site has better SEO since HTML content will be provided to the client.
- Server components can be async while client components cannot be async.

## [Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components)

- These components are pre-rendered on the server but also potentially on the
  client side.
- Client components _must_ have the `"use client"` directive set at the top of
  the script or Errors will result. This is how Next.js knows that the component
  is to be used by the client.
- This kind of component provides client side interactivity such as `onclick`
  events.

### Important Notes about Client Components

- The `"use client"` directive should be used as far down the component tree as
  possible. This way the server takes care of as much of the rendering as
  possible. Components down the tree from the component using `"use client"`
  will be rendered on the client side.
