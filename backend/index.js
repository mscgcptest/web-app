const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Serve frontend build folder
app.use(express.static(path.join(__dirname, '../frontend/build')));

// ✅ API endpoint for Code Subscript
app.get('/api/codesubscript', (req, res) => {
  res.json({ message: '🔔 Code Subscript button was clicked!' });
});

// ✅ Serve index.html for all unknown routes (must come last)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`✅ Backend + frontend running on http://localhost:${PORT}`);
});

