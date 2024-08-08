# [Next.js Udemy Course](https://www.udemy.com/course/nextjs-react-the-complete-guide/)

## Setup

1. `pnpm i -w`
2. `cd` to a section eg. `cd 01-getting-started`
3. `pnpm run dev`

## Notes

### [Section 1: Getting started](./01-getting-started/)

- [Reserved Filenames](./01-getting-started/notes/reserved-filenames.md)
- [Routing Files](./01-getting-started/app/routing-files.md)
- [Dynamic Routes](./01-getting-started/app/blog/[slug]/dynamic-routes.md)
  - [More on dynamic routing](./01-getting-started/notes/dynamic-routes.md)

### [Section 2: Next.js Essentials](./02-nextjs-essentials/)

- [Client vs Server Components](./02-nextjs-essentials/notes/client-vs-server-components.md)

### [Section 3: Route Rending](./03-routing-rendering/)

- [Catch all routes](./03-routing-rendering/notes/catch-all-routes.md)
  - [Catch all segments](<./03-routing-rendering/app/(content)/archive/@archive/[[...filter]]/catch-all-segments.md>)
- [Parallel Routes](./03-routing-rendering/notes/parallel-routes.md)
  - [More](<./03-routing-rendering/app/(content)/archive/parallel-routes.md>)
- [Intercepting Routes](<./03-routing-rendering/app/(content)/news/[slug]/@modal/(.)image/intercepting-routes.md>)
- [Middleware](./03-routing-rendering/middleware.md)
- [Route Groups](./03-routing-rendering/app/route-groups.md)
- [Route Handlers](./03-routing-rendering/app/api/route-handlers.md)

### [Section 4: Data Fetching](./04-data-fetching/)

### [Section 5: Data Mutation](./05-data-mutation/)

- [revalidatePath](https://nextjs.org/docs/app/api-reference/functions/revalidatePath)
- [useOptimistic](https://react.dev/reference/react/useOptimistic)

### [Section 6: Caching](https://nextjs.org/docs/app/building-your-application/caching)

- [Caching notes](./06-caching/notes/caching.md)
