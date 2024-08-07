# Parallel routes

Parallel Routes allows you to simultaneously or conditionally render one or
more pages within the same layout. They are useful for highly dynamic sections
of an app, such as dashboards and feeds on social sites.

In this case we have

- archive
  - @archive &larr; "@" symbol is used to define a parallel route.
    - page.js
  - @latest
    - page.js
  - layout.js &larr; parallel routes require their own layout file.
