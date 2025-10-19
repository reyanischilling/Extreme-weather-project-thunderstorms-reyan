import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the Vite build output directory (dist/public)
app.use(express.static(path.join(__dirname, '..', 'dist', 'public')));

// All other routes return index.html (for client-side routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Production server running at http://localhost:${port}`);
});