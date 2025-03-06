const apiUrl = "https://localhost:7102/api/user";  // Verwendet HTTPS

 // Setze die API URL auf den richtigen Wert

let loggedInUserId = localStorage.getItem("userId");  // Hole die Benutzer-ID aus localStorage, falls vorhanden
let loggedInUsername = localStorage.getItem("username");  // Hole den Benutzernamen aus localStorage, falls vorhanden

// Überprüfen, ob der Benutzer bereits eingeloggt ist (localStorage)
if (loggedInUserId !== null) {
    document.getElementById("userInfo").style.display = "block";
    document.getElementById("userDetails").innerHTML = `ID: ${loggedInUserId}, Benutzername: ${loggedInUsername}`;
    getUserBalance();  // Zeige den Kontostand an, wenn der Benutzer eingeloggt ist
}

// Registrieren eines Benutzers
async function registerUser() {
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;

    const response = await fetch(`${apiUrl}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        alert("Benutzer erfolgreich registriert!");
    } else {
        const error = await response.text();
        alert(`Fehler: ${error}`);
    }
}

async function loginUser() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const response = await fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        const data = await response.json();
        loggedInUserId = data.id;  // Benutzer-ID speichern
        loggedInUsername = data.username;  // Benutzername speichern
        localStorage.setItem("userId", data.id);  // Speichern der ID im localStorage
        localStorage.setItem("username", data.username);  // Speichern des Benutzernamens
        document.getElementById("userInfo").style.display = "block";
        document.getElementById("userDetails").innerHTML = `ID: ${data.id}, Benutzername: ${data.username}`;
        getUserBalance();  // Zeige den Kontostand an
    } else {
        const error = await response.text();
        alert(`Fehler: ${error}`);
    }
}


// Benutzer suchen (nach ID oder Username)
async function searchUser() {
    const query = prompt("Geben Sie den Benutzernamen oder die ID ein:");
    const response = await fetch(`${apiUrl}/search?query=${query}`);

    if (response.ok) {
        const users = await response.json();
        alert("Benutzer gefunden: " + users.map(user => user.username).join(", "));
    } else {
        alert("Benutzer nicht gefunden.");
    }
}

// Kontostand des Benutzers anzeigen
async function getUserBalance() {
    const response = await fetch(`${apiUrl}/${loggedInUserId}`);
    if (response.ok) {
        const user = await response.json();
        document.getElementById("userBalance").innerHTML = `Kontostand: ${user.balance} €`;
    } else {
        alert("Fehler beim Abrufen des Kontostands.");
    }
}

// Geldüberweisung
async function transferMoney() {
    if (loggedInUserId === null) {
        alert("Bitte melden Sie sich zuerst an.");
        return;
    }

    const receiverQuery = document.getElementById("receiverInput").value; // Benutzername oder ID des Empfängers
    const amount = document.getElementById("transferAmount").value;

    // Überprüfen, ob der Empfänger eine ID oder ein Username ist
    let receiverId = null;
    const response = await fetch(`${apiUrl}/search?query=${receiverQuery}`);

    if (response.ok) {
        const users = await response.json();
        if (users.length > 0) {
            // Prüfen, ob es einen Benutzer mit diesem Namen oder dieser ID gibt
            receiverId = users[0].id;
        } else {
            alert("Empfänger nicht gefunden.");
            return;
        }
    }

    const transferResponse = await fetch(`${apiUrl}/transfer`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ senderId: loggedInUserId, receiverId: receiverId, amount: parseFloat(amount) })
    });

    if (transferResponse.ok) {
        alert("Überweisung erfolgreich.");
        getUserBalance();  // Kontostand nach der Überweisung aktualisieren
    } else {
        const error = await transferResponse.text();
        alert(`Fehler: ${error}`);
    }
}
