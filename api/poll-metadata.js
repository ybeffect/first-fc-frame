// api/poll-metadata.js
const express = require('express');

const app = express();

// Define the route to generate and serve the poll metadata
app.get('/api/poll-metadata', (req, res) => {
    // Generate the metadata
    const metadata = `
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="http://...image-question.png" />
        <meta property="fc:frame:button:1" content="Green" />
        <meta property="fc:frame:button:2" content="Purple" />
        <meta property="fc:frame:button:3" content="Red" />
        <meta property="fc:frame:button:4" content="Blue" />
    `;

    // Send the metadata as a response
    res.setHeader('Content-Type', 'text/html');
    res.send(metadata);
});

// Export the express app for Vercel
module.exports = app;
