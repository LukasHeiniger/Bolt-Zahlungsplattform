# Bolt-Zahlungsplattform

# Projekt-Dokumentation

Lukas Heiniger

## 1 Informieren

### 1.1 Ihr Projekt

Ich erstelle eine fiktive Zahlungsplattform wie Twint. Inhalt ist eine Frontend, Backend und eine Datenbankstruktur.

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ        | Beschreibung                                                                                                                                     |
| ---- | --------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1    | Muss            | Funktional | Als Benutzer möchte ich mich registrieren, damit ich ein Konto erstellen und die Anwendung nutzen kann.                                          |
| 2    | Muss            | Funktional | Als Benutzer möchte ich mich anmelden, damit ich Zugriff auf mein Konto und meine Transaktionen habe.                                            |
| 3    | Muss            | Funktional | Als Benutzer möchte ich mein Passwort zurücksetzen können, falls ich es vergessen habe, damit ich mein Konto weiterhin nutzen kann.              |
| 4    | Muss            | Funktional | Als Benutzer möchte ich andere Benutzer in der Anwendung finden können, damit ich ihnen Geld senden kann.                                        |
| 5    | Muss            | Funktional | Als Benutzer möchte ich einen Geldbetrag an einen anderen Benutzer senden können, damit ich Zahlungen tätigen kann.                              |
| 6    | Muss            | Funktional | Als Benutzer möchte ich meine Transaktionshistorie einsehen können, damit ich meine vergangenen Überweisungen nachvollziehen kann.               |
| 7    | Kann            | Qualität   | Als Benutzer möchte ich eine einfache und intuitive Benutzeroberfläche, damit ich die Anwendung problemlos nutzen kann.                          |
| 8    | Kann            | Qualität   | Als Benutzer möchte ich die Möglichkeit haben, Transaktionen mit einer Notiz zu versehen, damit ich den Grund der Überweisung angeben kann.      |
| 9    | Muss            | Technisch  | Als Entwickler möchte ich eine einfache API erstellen, damit das Frontend mit dem Backend kommunizieren kann.                                    |
| 10   | Muss            | Technisch  | Als Entwickler möchte ich sicherstellen, dass Passwörter sicher gespeichert werden, damit Benutzerdaten geschützt sind.                          |
| 10   | Muss            | Technisch  | Als Entwickler möchte ich eine Datenbank einrichten, damit die Benutzerdaten und Transaktionen gespeichert werden können.                        |
| 11   | Muss            | Technisch  | Als Entwickler möchte ich testen, ob die Funktionen wie Registrieren und Geld senden korrekt funktionieren, damit die Anwendung zuverlässig ist. |
| 12   | Kann            | Technisch  | Als Entwickler möchte ich die Anwendung so bauen, dass viele Leute sie gleichzeitig benutzen können, ohne dass sie langsam wird.                 |
| 13   | Muss            | Sicherheit | Als Betreiber möchte ich sicherstellen, dass nur der richtige Benutzer Zugriff auf sein Konto hat, damit niemand etwas stehlen kann.             |

### 1.3 Testfälle

| TC-№ | Ausgangslage                                                  | Eingabe                                         | Erwartete Ausgabe                                                                                           |
| ---- | ------------------------------------------------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| 1    | Der Benutzer hat noch kein Konto.                              | Benutzer gibt korrekte Daten für Registrierung ein. | Benutzer wird erfolgreich registriert und auf die Anmeldeseite weitergeleitet.                              |
| 2    | Der Benutzer hat ein Konto.                                    | Benutzer gibt gültige Anmeldedaten ein.         | Benutzer wird erfolgreich angemeldet und auf das Dashboard weitergeleitet.                                  |
| 3    | Der Benutzer hat sein Passwort vergessen.                      | Benutzer fordert Passwort zurücksetzen an und gibt seine E-Mail-Adresse ein. | Benutzer erhält eine E-Mail mit einem Link zur Passwortzurücksetzung.                                        |
| 4    | Der Benutzer ist angemeldet und möchte einen anderen Benutzer finden. | Benutzer gibt den Namen des anderen Benutzers ein. | Der andere Benutzer wird erfolgreich gefunden und angezeigt.                                               |
| 5    | Der Benutzer ist angemeldet und möchte eine Zahlung tätigen.   | Benutzer gibt den Betrag und den Empfänger an.   | Der Betrag wird erfolgreich an den Empfänger überwiesen und der Transaktionsstatus wird angezeigt.          |
| 6    | Der Benutzer hat mehrere Transaktionen durchgeführt.           | Benutzer fordert die Anzeige seiner Transaktionshistorie an. | Die Transaktionshistorie wird korrekt angezeigt, einschließlich aller vergangenen Überweisungen.            |
| 7    | Der Benutzer öffnet die Anwendung.                             | Keine Eingabe.                                  | Die Benutzeroberfläche lädt und ist einfach und intuitiv zu bedienen.                                       |
| 8    | Der Benutzer führt eine Transaktion durch.                     | Benutzer fügt eine Notiz zur Transaktion hinzu.   | Die Transaktion wird erfolgreich abgeschlossen und die Notiz wird angezeigt.                               |
| 9    | Der Entwickler hat eine API erstellt.                          | Das Frontend sendet eine Anfrage an die API.     | Die API gibt eine korrekte Antwort zurück und ermöglicht die Kommunikation zwischen Frontend und Backend.    |
| 10   | Der Benutzer registriert sich und gibt ein unsicheres Passwort ein. | Benutzer gibt ein unsicheres Passwort ein.       | Das System gibt eine Fehlermeldung aus, dass das Passwort nicht sicher genug ist.                          |
| 11   | Der Benutzer hat Daten und Transaktionen, die gespeichert werden müssen. | Daten werden in die Datenbank eingegeben.        | Die Benutzerdaten und Transaktionen werden korrekt in der Datenbank gespeichert.                             |
| 12   | Der Entwickler hat Tests für die Funktionen registrieren und Geld senden geschrieben. | Testfälle für Registrierung und Geld senden.     | Alle Tests bestehen, und die Funktionen funktionieren wie erwartet.                                         |
| 13   | Die Anwendung wird von vielen Benutzern gleichzeitig genutzt.  | Viele Benutzer tätigen gleichzeitig Transaktionen. | Die Anwendung bleibt stabil und langsam wird sie nicht.                                                     |
| 14   | Der Benutzer möchte sich anmelden.                             | Benutzer gibt falsche Anmeldedaten ein.          | Das System gibt eine Fehlermeldung aus, dass die Anmeldedaten ungültig sind.                                |


## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung                                                                                                                            | Geplante Zeit |
| ---- | ----- | --------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| 1    | -     | Lukas     | Entwicklung der Registrierungsfunktion: Implementierung der Möglichkeit für Benutzer, sich zu registrieren, um ein Konto zu erstellen.   | 60 Minuten    |
| 2    | -     | Lukas     | Entwicklung der Anmeldefunktion: Ermöglichen der Anmeldung, damit Benutzer Zugang zu ihrem Konto und ihren Transaktionen haben.        | 60 Minuten    |
| 3    | -     | Lukas     | Entwicklung der Passwort-zurücksetzen-Funktion: Implementierung einer Möglichkeit für Benutzer, ihr Passwort zurückzusetzen.            | 60 Minuten    |
| 4    | -     | Lukas     | Funktion zur Benutzersuche: Implementierung einer Funktion, mit der Benutzer andere finden und Geld senden können.                       | 60 Minuten    |
| 5    | -     | Lukas     | Überweisungsfunktion: Implementierung der Möglichkeit, einen Geldbetrag an andere Benutzer zu senden.                                   | 60 Minuten    |
| 6    | -     | Lukas     | Transaktionshistorie anzeigen: Ermöglichen der Einsichtnahme der Transaktionshistorie, damit Benutzer ihre vergangenen Überweisungen sehen können. | 60 Minuten    |
| 7    | -     | Lukas     | Benutzeroberfläche: Gestaltung einer einfachen und intuitiven Benutzeroberfläche, um eine benutzerfreundliche Anwendung zu gewährleisten.  | 60 Minuten    |
| 8    | -     | Lukas     | Notizfunktion für Transaktionen: Implementierung der Möglichkeit, Transaktionen mit einer Notiz zu versehen, um den Überweisungsgrund anzugeben. | 60 Minuten    |
| 9    | -     | Lukas     | API-Entwicklung: Erstellung einer API, die eine Verbindung zwischen Frontend und Backend ermöglicht.                                   | 60 Minuten    |
| 10   | -     | Lukas     | Sicherheitsmassnahme für Passwörter: Implementierung einer sicheren Speicherung von Passwörtern, um Benutzerdaten zu schützen.            | 60 Minuten    |
| 11   | -     | Lukas     | Datenbank einrichten: Einrichtung einer Datenbank zur Speicherung von Benutzerdaten und Transaktionen.                                  | 60 Minuten    |
| 12   | -     | Lukas     | Funktionstests: Durchführung von Tests, um sicherzustellen, dass Funktionen wie Registrierung und Geldsenden korrekt arbeiten.           | 60 Minuten    |
| 13   | -     | Lukas     | Lastenmanagement: Optimierung der Anwendung, damit sie bei hoher Benutzerzahl nicht langsamer wird.                                      | 60 Minuten    |
| 14   | -     | Lukas     | Sicherheit der Benutzerkonten: Implementierung von Sicherheitsmaßnahmen, um sicherzustellen, dass nur berechtigte Benutzer Zugriff auf ihr Konto haben. | 60 Minuten    |

Total:

## 3 Entscheiden

Ich habe realisiert, dass ich das nächste Mal die Planung besser gestalten soll.

## 4 Realisieren

## 4 Realisieren

| AP-№ | Datum                  | Zuständig | geplante Zeit        | tatsächliche Zeit |
| ---- | ---------------------- | --------- | -------------------- | ----------------- |
| 1    | 17.01                      | Lukas     | 60 Minuten           | 90 Minuten        |
| 2    |17.01                        | Lukas     | 60 Minuten           | 75 Minuten        |
| 3    | 24.01                      | Lukas     | 60 Minuten           | Nicht erledigt    |
| 4    | 24.01                      | Lukas     | 60 Minuten           | 80 Minuten        |
| 5    | 24.01                      | Lukas     | 60 Minuten           | 85 Minuten        |
| 6    | 14.02                      | Lukas     | 60 Minuten           | 70 Minuten        |
| 7    | 14.02                       | Lukas     | 60 Minuten           | 100 Minuten       |
| 8    | 14.02                       | Lukas     | 60 Minuten           | Nicht erledigt    |
| 9    | 20.02                      | Lukas     | 60 Minuten           | 120 Minuten       |
| 10   | 20.02                       | Lukas     | 60 Minuten           | 90 Minuten        |
| 11   | 28.02                      | Lukas     | 60 Minuten           | 95 Minuten        |
| 12   | 07.03                      | Lukas     | 60 Minuten           | 110 Minuten       |
| 13   | 07.03                      | Lukas     | 60 Minuten           | 130 Minuten       |


## 5 Kontrollieren

### 5.1 Testprotokoll

| TC-№ | Datum    | Resultat        | Tester         |
| ---- | -------- | --------------- | -------------- |
| 1.1  | 07.03.25 | Funktioniert    | Lukas Heiniger |
| 1.2  | 07.03.25 | Funktioniert    | Lukas Heiniger |
| 1.3  | 07.03.25 | Nicht umgesetzt | Lukas Heiniger |
| 1.4  | 07.03.25 | Funktioniert    | Lukas Heiniger |
| 1.5  | 07.03.25 | Funktioniert    | Lukas Heiniger |
| 1.6  | 07.03.25 | Nicht umgesetzt | Lukas Heiniger |
| 1.7  | 07.03.25 | Nicht umgesetzt | Lukas Heiniger |
| 1.8  | 07.03.25 | Funktioniert    | Lukas Heiniger |
| 1.9  | 07.03.25 | Funktioniert    | Lukas Heiniger |
| 1.10 | 07.03.25 | Funktioniert    | Lukas Heiniger |
| 1.11 | 07.03.25 | Funktioniert    | Lukas Heiniger |
| 1.12 | 07.03.25 | Funktioniert    | Lukas Heiniger |
| 1.13 | 07.03.25 | Funktioniert    | Lukas Heiniger |
| 1.14 | 07.03.25 | Funktioniert    | Lukas Heiniger |


Fazit:

Ich bin wirklich zufrieden mit meinem Projekt. Ich konnte einiges neues lernen.
## 6 Auswerten

Link zum Portfoliobeitrag: https://portfolio.bbbaden.ch/view/view.php?t=0055a491798c7a14b92f
