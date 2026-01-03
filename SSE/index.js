import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Public directory
const publicDirectory = path.join(__dirname, "public");

// Serve static files
app.use(express.static(publicDirectory));

// Root route
app.get("/sse", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  res.write(`data: Welcome to SSE\n\n`);

  const intervalId = setInterval(() => {
    res.write(`data: Update SSE ${new Date().toLocaleTimeString()}\n\n`);
  }, 3000);

  req.on("close", () => {
    clearInterval(intervalId);
    res.end();
  });
});


app.get("/", (req, res) => {
  res.sendFile(path.join(publicDirectory, "index.html"));
});

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(publicDirectory, "404.html"));
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("500 - Server Error");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
