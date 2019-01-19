import { serve } from "https://deno.land/x/net/http.ts";
const addr = '127.0.0.1:8080';
const s = serve(addr);

const html =
`
<h1>Hello World</h1>
`;

async function main() {
  for await (const req of s) {
    req.respond({ body: new TextEncoder().encode(html) });
  }
}

main();
console.log(`Server is running. Access to http://${addr}`);
