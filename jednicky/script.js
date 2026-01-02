<!DOCTYPE html>
<html lang="cs">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sběr "1" – Overlay</title>
<style>
  body { background: transparent; color: white; font-family: sans-serif; text-align:center; }
  #overlay { padding: 10px; }
  #count { font-size: 3em; margin: 10px 0; }
  #list { font-size: 1.2em; white-space: pre-wrap; }
</style>
</head>
<body>
  <div id="overlay">
    <h1>Počet zapojených: <span id="count">0</span></h1>
    <pre id="list">Nikdo se nepřihlásil.</pre>
  </div>

  <script src="overlay.js"></script>
</body>
</html>
