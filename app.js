document.getElementById("transferForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const amount = document.getElementById("amount").value;
    const recipient = document.getElementById("recipient").value;

    if(amount && recipient) {
        // Beispielhafte Transaktionslogik
        alert(`Überweisung von ${amount} CHF an ${recipient} wurde initiiert.`);

        // Beispiel: Kontostand nach der Überweisung anpassen
        const currentBalance = 0; // Dieser Wert wird später dynamisch aus der Datenbank geladen
        const newBalance = currentBalance - amount;
        document.getElementById("balanceAmount").textContent = `${newBalance} CHF`;

        // Beispielhafte Transaktionshistorie (wird später dynamisch hinzugefügt)
        addTransaction(amount, recipient);
    } else {
        alert("Bitte fülle alle Felder aus.");
    }
});

document.getElementById("historyBtn").addEventListener("click", function() {
    const historySection = document.getElementById("transactionHistory");
    const isVisible = !historySection.classList.contains("hidden");

    // History anzeigen oder ausblenden
    if (isVisible) {
        historySection.classList.add("hidden");
    } else {
        historySection.classList.remove("hidden");
    }
});

function addTransaction(amount, recipient) {
    const historyList = document.getElementById("historyList");
    const newTransaction = document.createElement("li");
    newTransaction.textContent = `Überweisung von ${amount} CHF an ${recipient}`;
    historyList.appendChild(newTransaction);
}
