const express = require("express");
const app = express();
const path = require("path");

// Define the metadata for the poll
const pollMetadata = {
  frame: "vNext",
  image: "https://i.imgur.com/2T5DaQT.jpg",
  buttons: ["Green", "Purple", "Red", "Blue"],
};

// Route to handle GET requests and return the metadata
app.get("/poll-metadata", (req, res) => {
  const metadataTags = [
    `<meta property="fc:frame" content="${pollMetadata.frame}" />`,
    `<meta property="fc:frame:image" content="${pollMetadata.image}" />`,
    ...pollMetadata.buttons.map(
      (button, index) =>
        `<meta property="fc:frame:button:${index + 1}" content="${button}" />`
    ),
  ];

  // Set Content-Type header to text/html
  res.set("Content-Type", "text/html");

  // Send the metadata as response
  res.send(metadataTags.join("\n"));
});

// // Define the path to the image
// const imagePath = path.join(__dirname, "../../Downloads", "test_mark.png");

// // Define the route to serve the image
// app.get("/image", (req, res) => {
//   // Send the image file as a response
//   res.sendFile(imagePath);
// });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
