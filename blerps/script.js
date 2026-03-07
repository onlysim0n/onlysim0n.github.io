// --- KONFIGURACE ---
const channel = "TVŮJ_NICK_NA_TWITCHI"; // Sem napiš své jméno na Twitchi

// Funkce pro přehrávání zvuku
function playSound(file) {
    const audio = new Audio('sounds/' + file);
    audio.play().catch(err => {
        console.error("Chyba při přehrávání! Ujisti se, že soubor existuje v blerp/sounds/", err);
    });
}

// Reakce na odměny za kanálové body
ComfyJS.onReward = (user, reward, cost, message, extra) => {
    console.log(`Uživatel ${user} koupil odměnu: ${reward}`);

    // Logika pro konkrétní odměny (Název musí přesně sedět s Twitchem)
    if (reward === "KEKW") {
        playSound("kekw.mp3");
    } 
    else if (reward === "BRUH") {
        playSound("bruh.mp3");
    }
};

// Inicializace a připojení
ComfyJS.Init(channel);

ComfyJS.onConnected = () => {
    const statusEl = document.getElementById("status");
    if (statusEl) {
        statusEl.innerText = "Propojeno s kanálem: " + channel;
        statusEl.style.color = "#00ff00";
    }
};
