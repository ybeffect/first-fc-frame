// api/poll-metadata.js
const express = require("express");

const app = express();

image_url =
  "https://raw.githubusercontent.com/mbiss10/first-fc-frame/main/assets/image.jpeg";
// "https://raw.githubusercontent.com/mbiss10/first-fc-frame/main/assets/image.jpeg";

// Define the route to generate and serve the poll metadata
app.get("/api/poll-metadata", (req, res) => {
  // Generate the metadata
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
        <meta property="fc:frame:button:1" content="Green" />
        <meta property="fc:frame:button:2" content="Purple" />
    </head>
    </html>
    `;

  // Send the metadata as a response
  res.status(200).setHeader("Content-Type", "text/html").send(body);
});

// Export the express app for Vercel
module.exports = app;
