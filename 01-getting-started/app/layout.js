import "./globals.css"; // Makes the styles in globals.css available to underlying pages.
// Any file in the root of app called icon.* will be used as a favicon for the site.

/**
 * @var {object} metadata Used to populate the head section of the rendered page. NOTE: "metadata" is a reserved name.
 * @property {string} metadata.title - Will populate the title of the page in the head.
 * @property {string} metadata.description - Will populate a meta tag with name of "description" and content of "Your first NextJS app!"
 */
export const metadata = {
  title: "NextJS Course App",
  description: "Your first NextJS app!",
};

/**
 *
 * @param {*} param0
 * @property {object} param0.children - The content that gets rendered within the layout, since layout.js is a wrapper for page components.
 * @returns
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
