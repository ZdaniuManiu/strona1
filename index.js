const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serwowanie statycznych plików z folderu "public"
app.use(express.static(path.join(__dirname, 'public')));

// Strona główna
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'glowna.html'));
});

app.listen(PORT, () => {
  console.log(`Serwer leci na http://localhost:${PORT}`);
});
