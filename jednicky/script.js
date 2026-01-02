// → sem vlož URL svého Web App z Google Apps Script
const API_URL = "https://script.google.com/macros/s/AKfycbxcQbYrWbBgq5PlTCvou7SlJmErxkEyk8V8_exw0zMAfFPgCM8dwVL1b0ihdeWhpTEnUw/exec"; 

// Načtení dat z Sheet
async function loadUsers(){
  const countEl = document.getElementById("count");
  const listEl  = document.getElementById("list");

  try{
    const res = await fetch(API_URL, {cache:"no-store"});
    if(!res.ok) throw new Error("HTTP " + res.status);

    const data = await res.json();
    const users = Array.isArray(data.users) ? data.users : [];
    countEl.textContent = "Počet: " + users.length;
    listEl.textContent  = users.length ? users.join(", ") : "Nikdo se nepřihlásil.";
  } catch(err){
    console.error(err);
    countEl.textContent = "Počet: 0";
    listEl.textContent = "Chyba načítání dat";
  }
}

// Kopírování seznamu
function copyUsers(){
  const listEl = document.getElementById("list");
  const txt = listEl.textContent.trim();
  if(!txt || txt==="Nikdo se nepřihlásil."){
    alert("Žádná data k zkopírování.");
    return;
  }
  navigator.clipboard.writeText(txt)
    .then(()=>alert("Seznam zkopírován do schránky."))
    .catch(()=>alert("Nepodařilo se zkopírovat."));
}

// Eventy tlačítek
window.addEventListener("DOMContentLoaded", ()=>{
  document.getElementById("copyBtn").addEventListener("click", copyUsers);
  document.getElementById("reloadBtn").addEventListener("click", loadUsers);
  loadUsers();
});
