<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>A-Tým</title>
  <style>
    * { box-sizing: border-box; }
    body { margin:0; font-family:Arial,sans-serif; background:#0e0e0e; color:#fff; }

    /* Menu */
    nav { width:100%; background:#151515; border-bottom:1px solid #333; }
    .nav-inner { max-width:1200px; margin:0 auto; padding:15px 20px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; }
    .logo { display:flex; align-items:center; gap:10px; }
    .logo img { width:50px; border-radius:10px; }
    .menu { display:flex; gap:20px; flex-wrap:wrap; }
    .menu a { color:#ddd; text-decoration:none; font-size:18px; }
    .menu a:hover { color:#fff; }

    /* Tabulka */
    .container { max-width:1000px; margin:40px auto; padding:0 20px; }
    table { width:100%; border-collapse:collapse; border-radius:12px; overflow:hidden; background:#161616; }
    th, td { padding:15px; text-align:center; }
    th { background:#1f1f1f; }
    tr:nth-child(even) { background:#1b1b1b; }
    img.member-logo { width:32px; height:32px; border-radius:6px; vertical-align:middle; margin-right:10px; }

    /* Role barvy */
    .streamer { color: #ffd500; font-weight:bold; }
    .vedeni { color: #ff3b3b; font-weight:bold; }
    .mod { color: #3bff6f; font-weight:bold; }

    @media(max-width:768px){ table, th, td { font-size:14px; padding:10px; } }
  </style>
</head>
<body>

  <nav>
    <div class="nav-inner">
      <div class="logo">
        <img src="assets/logo.png" alt="Logo">
        <strong>OnlySim0n</strong>
      </div>
      <div class="menu">
        <a href="/about.html">About</a>
        <a href="/ateam.html">A-Team</a>
        <a href="/stream.html">Stream</a>
        <a href="/contact.html">Contact</a>
      </div>
    </div>
  </nav>

  <div class="container">
    <h1>Náš tým</h1>
    <table id="teamTable">
      <tr>
        <th>Nick</th>
        <th>Role</th>
        <th>Discord</th>
      </tr>
    </table>
  </div>

  <script>
    const teamData = [
      { nick: "Only_Sim0n", role: "Streamer", discord: "Only_Sim0n", logo: "assets/loga/Only_Simon_Main.png" },
      { nick: "Malej_Erik", role: "Vedení A-Týmu", discord: "Malej_Erik", logo: "assets/loga/bossa.png" },
      { nick: "Dominikhavelsky", role: "Vedení A-Týmu", discord: "dominikhavelsky", logo: "assets/loga/vedenib.png" },
      { nick: "Matyscs", role: "Mod Tým", discord: "matyscs", logo: "assets/loga/mod1.png" },
      { nick: "Fialkos", role: "Mod Tým", discord: "Fialovejj", logo: "assets/loga/mod2.png" }
    ];

    function renderTeamTable() {
      const table = document.getElementById('teamTable');
      teamData.forEach(member => {
        const row = document.createElement('tr');
        let roleClass = '';
        if(member.role === 'Streamer') roleClass='streamer';
        if(member.role === 'Vedení A-Týmu') roleClass='vedeni';
        if(member.role === 'Mod Tým') roleClass='mod';
        row.innerHTML = `
          <td><img src="${member.logo}" class="member-logo" alt="logo"> ${member.nick}</td>
          <td class="${roleClass}">${member.role}</td>
          <td>${member.discord}</td>
        `;
        table.appendChild(row);
      });
    }

    document.addEventListener('DOMContentLoaded', renderTeamTable);
  </script>

</body>
</html>
