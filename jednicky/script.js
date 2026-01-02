const API_URL = "https://script.google.com/macros/library/d/1jYrK2pHsFiIoemnfWvIeeaxIxbUpYBP9kJyo3BknqL1rHxp7CyOFian3/1";

async function loadUsers() {
  const statusEl = document.getElementById("status");
  const startEl  = document.getElementById("startTime");
  const countEl  = document.getElementById("count");
  const listEl   = document.getElementById("list");

  try {
    statusEl.textContent = "Stav: načítám…";
    const res = await fetch(API_URL, { cache: "no-store" });
    const data = await res.json();
    const users = Array.isArray(data.users) ? data.users : [];
    const start = data.start || "";

    startEl.textContent = "Začátek sběru: " + (start ? new Date(start).toLocaleString("cs-CZ") : "—");
    countEl.textContent = "Počet: " + users.length;
    listEl.textContent  = users.length ? users.join(", ") : "Nikdo se nepřihlásil.";
    listEl.dataset.users = users.join(",");

    statusEl.textContent = "Stav: OK";
  } catch(err) {
    console.error(err);
    statusEl.textContent = "Stav: chyba načítání";
  }
}

function copyUsers() {
  const listEl = document.getElementById("list");
  const txt = listEl.dataset.users || "";
  if(!txt) return alert("Žádná data k zkopírování.");
  navigator.clipboard.writeText(txt).then(
    () => alert("Seznam zkopírován do schránky."),
    () => alert("Nepodařilo se zkopírovat.")
  );
}

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("copyBtn").addEventListener("click", copyUsers);
  document.getElementById("reloadBtn").addEventListener("click", loadUsers);
  loadUsers();
  setInterval(loadUsers, 5000); // aktualizace každých 5 sekund
});

