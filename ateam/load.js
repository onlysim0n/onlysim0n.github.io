document.addEventListener("DOMContentLoaded", () => {

  const team = [
    { nick: "OnlySim0n", role: "Streamer", discord: "onlysim0n", class: "streamer" },
    { nick: "AdminCZ", role: "Vedení A-Týmu", discord: "admincz", class: "vedeni" },
    { nick: "ModPlayer", role: "Mod Tým", discord: "modplayer", class: "mod" }
  ];

  const table = document.getElementById("teamTable");

  if (!table) {
    console.error("❌ teamTable nenalezen");
    return;
  }

  team.forEach(member => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${member.nick}</td>
      <td class="${member.class}">${member.role}</td>
      <td>${member.discord}</td>
    `;
    table.appendChild(row);
  });

});
