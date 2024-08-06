# Server vs Client Components

## Server Components

- In Next.js all components are React Server Components (RSC) by default.
- These components are only rendered on the server meaning they cannot be used
  to manage client side state or, for example, onclick events.
- The advantage of this are:
  - There is less JS that needs to be sent to the client.
  - The site has better SEO since HTML content will be provided to the client.

## Client Components

- These components are pre-rendered on the server but also potentially on the
  client side.
- Client components _must_ have the `"use client"` directive set at the top of
  the script or Errors will result. This is how Next.js knows that the component
  is to be used by the client.
- This kind of component provides client side interactivity such as `onclick`
  events.
