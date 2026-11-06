
const express = require("express");
const path = require("path");

const app = express();

// Use the port provided by the hosting platform.
// Fall back to port 3000 for local development.
const PORT = process.env.PORT || 3000;

// Import routes
const pagesRouter = require("./routes/pages");

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Register routes
app.use("/", pagesRouter);

// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});
