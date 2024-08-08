# [Caching](https://nextjs.org/docs/app/building-your-application/caching)

## [Request Memoization](https://nextjs.org/docs/app/building-your-application/caching#request-memoization)

- Next.js stores data requests with the same configuration.
  - This avoids unnecessary duplicate data fetches.
- Cache only persists during request duration.

## [Data Cache](https://nextjs.org/docs/app/building-your-application/caching#data-cache)

- Next.js stores & reuses fetched data until it's revalidated
  - This avoids unnecessary requests to the data source & speeds up the
    application.
- The Cache persists until it's revalidated (manually or after a set time).

## [Full Route Cache](https://nextjs.org/docs/app/building-your-application/caching#full-route-cache)

- Next.js stores the rendered HTML & RSC (React Server Component) at build
  time.
  - This avoids unnecessary HTML render cycles & data fetches.
- The cache persists until the related data cache is revalidated.

## [Router Cache](https://nextjs.org/docs/app/building-your-application/caching#router-cache)

- Next.js stores the RSC (React Server Component) payload in the memory of the
  browser.
- This ensures extremely fast page transitions since no server requests are
  needed.
