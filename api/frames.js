const express = require("express");
const app = express();

image_url =
  "https://raw.githubusercontent.com/mbiss10/first-fc-frame/main/assets/image.jpeg";

app.get("/api/frames", (req, res) => {
  const body = `
  <!DOCTYPE html>
  <html>
    <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width"/>
        <meta property="og:title" content="Frame" />
        <meta property='og:image' content=${image_url} />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${image_url}" />
        <meta property="fc:frame:button:1" content="Play!" />
        <meta property="fc:frame:post_url" content="./post"} />
    </head>
    </html>
    `;

  res.status(200).setHeader("Content-Type", "text/html").send(body);
});

// Export the express app for Vercel
module.exports = app;
