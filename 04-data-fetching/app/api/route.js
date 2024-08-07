/**
 * Accessing http://localhost:3000/api will return "Hello World!" as a response.
 *
 * @param {Request} request Request made from client.
 */
export function GET(request) {
  console.log(request);
  return new Response("Hello World!");
}
