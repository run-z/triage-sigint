import { httpListener, Rendering } from '@hatsy/hatsy';
import { createServer, Server } from 'node:http';

export function createHelloServer(): Server {
  return createServer(
    httpListener(
      Rendering.for(({ renderHtml }) => {
        renderHtml(
          `<!DOCTYPE html>
<html lang="en">
<body>Hello, World!</body>
</html>
`,
        );
      }),
    ),
  );
}
