# Catch All Routes

Catch-all Segments can be made optional by including the parameter in double
square brackets: [[...filter]].

For example, `app/archive/@archive/[[...filter]]/page.js` will also match
`/archive`, in addition to `/archive/thingy`, `/archive/thingy/stuff`,
`/archive/thingy/stuff/more-stuff`.

In the catch all page component param.filter will not contain just one variable
but one for each of the segments that follow it. `/archive` will have `{}`,
`/archive/thingy` will have `{slug: ['thingy']}` and
`/archive/thingy/stuff/more-stuff` will have
`{slug: ['thingy', 'stuff', 'more-stuff']}`

Note that `app/archive/@archive` has no `page.js` and this is because the catch
all route conflicts with it, so it has been removed.
