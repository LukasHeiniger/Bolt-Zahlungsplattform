const apiUrl = "https://localhost:7102/api/User"; // Anpassen falls Port anders

let currentUser = null;

async function registerUser() {
  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;

  const response = await fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (response.ok) {
    alert("Registrierung erfolgreich!");
  } else {
    const error = await response.text();
    alert("Fehler: " + error);
  }
}

async function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const response = await fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (response.ok) {
    const data = await response.json();
    currentUser = data;

    // Hier wird überprüft, ob die ID und andere Daten korrekt zurückgegeben werden
    if (currentUser && currentUser.id) {
      localStorage.setItem("jwtToken", data.token); // JWT speichern
      document.getElementById("loggedInUser").innerText = currentUser.username;
      loadUserBalance(currentUser.id); // ID hier korrekt nutzen
      showDashboard();
    } else {
      alert("Benutzer-ID fehlt.");
    }
  } else {
    const error = await response.text();
    alert("Fehler: " + error);
  }
}

function logout() {
  currentUser = null;
  localStorage.removeItem("jwtToken"); // Token löschen
  document.getElementById("login").style.display = "block";
  document.getElementById("register").style.display = "block";
  document.getElementById("dashboard").style.display = "none";
  clearInputs();
}

async function loadUserBalance(userId) {
  const token = localStorage.getItem("jwtToken");
  const response = await fetch(`${apiUrl}/${userId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`, // Token hinzufügen
    },
  });
  if (response.ok) {
    const user = await response.json();
    document.getElementById("userBalance").innerText = user.balance.toFixed(2);
  } else {
    alert("Fehler beim Laden des Kontos.");
  }
}

async function searchUsers() {
  const query = document.getElementById("searchQuery").value;

  const response = await fetch(
    `${apiUrl}/search?query=${encodeURIComponent(query)}`
  );
  const userList = document.getElementById("userList");
  userList.innerHTML = "";

  if (response.ok) {
    const users = await response.json();
    users.forEach((user) => {
      const li = document.createElement("li");
      li.innerText = `${user.username} (ID: ${user.id})`;
      li.onclick = () => selectUserForTransfer(user.id);
      userList.appendChild(li);
    });
  } else {
    alert("Keine Benutzer gefunden.");
  }
}

function selectUserForTransfer(userId) {
  document.getElementById("receiverId").value = userId;
  alert("Empfänger-ID übernommen!");
}

async function transferMoney() {
  const receiverId = parseInt(document.getElementById("receiverId").value);
  const amount = parseFloat(document.getElementById("transferAmount").value);

  if (isNaN(receiverId) || isNaN(amount) || amount <= 0) {
    alert("Bitte gültige Daten eingeben.");
    return;
  }

  const token = localStorage.getItem("jwtToken"); // Token aus localStorage holen

  const response = await fetch(`${apiUrl}/transfer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Token in Header einfügen
    },
    body: JSON.stringify({
      senderId: currentUser.id,
      receiverId,
      amount,
    }),
  });

  if (response.ok) {
    alert("Überweisung erfolgreich!");
    loadUserBalance(currentUser.id);
  } else {
    const error = await response.text();
    alert("Fehler: " + error);
  }
}

function showDashboard() {
  document.getElementById("login").style.display = "none";
  document.getElementById("register").style.display = "none";
  document.getElementById("dashboard").style.display = "block";
}

function clearInputs() {
  document.querySelectorAll("input").forEach((input) => (input.value = ""));
  document.getElementById("userList").innerHTML = "";
}

async function loadTransactionHistory() {
  const response = await fetch(`${apiUrl}/${currentUser.id}/transactions`);
  const historyList = document.getElementById("transactionHistory");
  historyList.innerHTML = "";

  if (response.ok) {
    const transactions = await response.json();
    if (transactions.length === 0) {
      historyList.innerHTML = "<li>Noch keine Überweisungen.</li>";
    } else {
      transactions.forEach((tx) => {
        const li = document.createElement("li");
        li.innerText = `An ${tx.username}: ${tx.amount.toFixed(
          2
        )} € am ${new Date(tx.timestamp).toLocaleString()}`;
        historyList.appendChild(li);
      });
    }
  } else {
    alert("Fehler beim Laden der Transaktionen.");
  }
}
