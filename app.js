document.getElementById("registerForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;

    if (username) {
        // Benutzer-Objekt
        const user = {
            username: username,
            balance: 1000 // Der Standardbetrag wird direkt gesetzt
        };

        try {
            const response = await fetch("https://localhost:7015/api/User/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });

            if (response.ok) {
                const result = await response.json();
                alert(`Benutzer registriert: ${result.username} mit ID: ${result.id}`);
                // Kontostand anzeigen
                document.getElementById("balanceAmount").textContent = `${result.balance} CHF`;
            } else {
                const errorData = await response.json();
                alert(errorData);
            }
        } catch (error) {
            alert("Fehler bei der Registrierung.");
        }
    } else {
        alert("Bitte Benutzername eingeben.");
    }
});

document.getElementById("transferForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const amount = document.getElementById("amount").value;
    const recipientId = document.getElementById("recipient").value;
    const message = document.getElementById("message").value;

    if (amount && recipientId) {
        // Transfer-Request-Objekt
        const transferRequest = {
            senderId: 1, // Dies wird normalerweise vom eingeloggten Benutzer genommen
            receiverId: recipientId,
            amount: parseFloat(amount),
            message: message // Nachricht hinzufügen
        };

        try {
            const response = await fetch("https://localhost:7015/api/User/transfer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(transferRequest)
            });

            if (response.ok) {
                alert("Überweisung erfolgreich.");
            } else {
                const errorData = await response.json();
                alert(errorData);
            }
        } catch (error) {
            alert("Fehler bei der Überweisung.");
        }
    } else {
        alert("Bitte Betrag und Empfänger-ID eingeben.");
    }
});
