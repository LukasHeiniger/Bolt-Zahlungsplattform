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
| 1.1  | Benutzer besucht die Startseite                               | Startseite laden                                | Die Startseite zeigt eine Übersicht aller wichtigen Inhalte in einem ansprechenden Layout                   |
| 1.2  | Benutzer öffnet das Portfolio                                 | Portfolio-Seite öffnen                          | Eine Übersicht aller Projekte wird angezeigt, inkl. Design und Layout gemäß den definierten Spezifikationen |
| 1.3  | Portfolio-Seite ist geladen                                   | Ein Projekt auswählen                           | Detailseite des Projekts wird geöffnet und zeigt Projektbeschreibung und statische Inhalte                  |
| 1.4  | Benutzer verwendet verschiedene Bildschirmgrößen              | Fenstergröße ändern                             | Layout passt sich dynamisch an, alle Inhalte bleiben gut lesbar                                             |
| 1.5  | Benutzer füllt das Kontaktformular aus                        | Kontaktformular ausfüllen und absenden          | Formular wird abgesendet, und E-Mail-Link oder Nachricht wird generiert                                     |
| 1.6  | Benutzer sucht nach einem bestimmten Projekt                  | Suchfunktion nutzen, z. B. Projektname eingeben | Suchergebnisse filtern die Projekte, und relevante Projekte werden angezeigt                                |
| 1.7  | Benutzer verwendet die Filteroptionen auf der Portfolio-Seite | Filteroption (z. B. Kategorie) auswählen        | Projekte werden gemäß der gewählten Filterkategorie gefiltert und angezeigt                                 |
| 1.8  | Benutzer wählt zwischen hellem und dunklem Modus              | Umschaltfunktion für Modus aktivieren           | Die Website wechselt zum ausgewählten Modus, und Farben passen sich dem gewählten Modus an                  |
| 1.9  | Benutzer navigiert durch die Seiten oder Abschnitte           | Seite oder Abschnitt wechseln                   | Animierte Übergänge zwischen den Seiten oder Abschnitten sind sichtbar und verbessern die Benutzererfahrung |

## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung                                                                                                                            | Geplante Zeit |
| ---- | ----- | --------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| 1    | -     | -         | Entwicklung der Registrierungsfunktion: Implementierung der Möglichkeit für Benutzer, sich zu registrieren, um ein Konto zu erstellen.   | -             |
| 2    | -     | -         | Entwicklung der Anmeldefunktion: Ermöglichen der Anmeldung, damit Benutzer Zugang zu ihrem Konto und ihren Transaktionen haben.        | -             |
| 3    | -     | -         | Entwicklung der Passwort-zurücksetzen-Funktion: Implementierung einer Möglichkeit für Benutzer, ihr Passwort zurückzusetzen.            | -             |
| 4    | -     | -         | Funktion zur Benutzersuche: Implementierung einer Funktion, mit der Benutzer andere finden und Geld senden können.                       | -             |
| 5    | -     | -         | Überweisungsfunktion: Implementierung der Möglichkeit, einen Geldbetrag an andere Benutzer zu senden.                                   | -             |
| 6    | -     | -         | Transaktionshistorie anzeigen: Ermöglichen der Einsichtnahme der Transaktionshistorie, damit Benutzer ihre vergangenen Überweisungen sehen können. | -             |
| 7    | -     | -         | Benutzeroberfläche: Gestaltung einer einfachen und intuitiven Benutzeroberfläche, um eine benutzerfreundliche Anwendung zu gewährleisten.  | -             |
| 8    | -     | -         | Notizfunktion für Transaktionen: Implementierung der Möglichkeit, Transaktionen mit einer Notiz zu versehen, um den Überweisungsgrund anzugeben. | -             |
| 9    | -     | -         | API-Entwicklung: Erstellung einer API, die eine Verbindung zwischen Frontend und Backend ermöglicht.                                   | -             |
| 10   | -     | -         | Sicherheitsmaßnahme für Passwörter: Implementierung einer sicheren Speicherung von Passwörtern, um Benutzerdaten zu schützen.            | -             |
| 11   | -     | -         | Datenbank einrichten: Einrichtung einer Datenbank zur Speicherung von Benutzerdaten und Transaktionen.                                  | -             |
| 12   | -     | -         | Funktionstests: Durchführung von Tests, um sicherzustellen, dass Funktionen wie Registrierung und Geldsenden korrekt arbeiten.           | -             |
| 13   | -     | -         | Lastenmanagement: Optimierung der Anwendung, damit sie bei hoher Benutzerzahl nicht langsamer wird.                                      | -             |
| 14   | -     | -         | Sicherheit der Benutzerkonten: Implementierung von Sicherheitsmaßnahmen, um sicherzustellen, dass nur berechtigte Benutzer Zugriff auf ihr Konto haben. | -             |

Total:

## 3 Entscheiden

Ich habe realisiert, dass ich das nächste Mal die Planung besser gestalten soll.

## 4 Realisieren

| AP-№ | Datum                  | Zuständig | geplante Zeit        | tatsächliche Zeit |
| ---- | ---------------------- | --------- | -------------------- | ----------------- |
| 1.A  | 30.08.24               | Lukas     | 45 min               | 45 min            |
| 1.B  | 30.08.24               | Lukas     | 45 min               | 45 min            |
| 2.A  | 30.08.24               | Lukas     | 45 min               | 45 min            |
| 2.B  | 30.08.24               | Lukas     | 45 min               | 45 min            |
| 2.C  | 30.08.24               | Lukas     | 45 min               | 45 min            |
| 3.A  | 06.09.24               | Lukas     | 45 min               | 45 min            |
| 4.A  | 06.09.24               | Lukas     | 45 min               | 45 min            |
| 5.A  | 06.09.24               | Lukas     | 45 min               | 45 min            |
| 7.A  |                        | Lukas     | 45 min               | Nicht umgesetzt   |
| 8.A  | 13.09.24               | Lukas     | 45 min               | 45 min            |
| 9.A  | 13.09.24               | Lukas     | 45 min               | 45 min            |
| 10.A | 13.09.24               | Lukas     | 45 min               | 45 min            |
| 11.A | 14.10.24               | Lukas     | 45 min               | 45 min            |
| 12.A | 14.10.24               | Lukas     | 45 min               | 45 min            |
| 13.A |                        | Lukas     | 45 min               | Nicht umgesetzt   |
| 14.A | 14.10.24               | Lukas     | 45 min               | 45 min            |
| 15.A |                        | Lukas     | 45 min               | Nicht umesetzt    |
| 16.A | 25.10.24               | Lukas     | 45 min               | 45 min            |
| 16.B | 25.10.24               | Lukas     | 45 min               | 45 min            |
| 17.A | 25.10.24 Abgeschlossen | Lukas     | Projektdokumentation | 2 Lektionen       |
| 17.B | 25.10.24               | Lukas     | Portfoliobeitrag     | 3 lektionen       |

## 5 Kontrollieren

### 5.1 Testprotokoll

| TC-№ | Datum    | Resultat        | Tester         |
| ---- | -------- | --------------- | -------------- |
| 1.1  | 25.10.24 | Funktioniert    | Lukas Heiniger |
| 1.2  | 25.10.24 | Funktioniert    | Lukas Heiniger |
| 1.3  | 25.10.24 | Nicht umgesetzt | Lukas Heiniger |
| 1.4  | 25.10.24 | Funktioniert    | Lukas Heiniger |
| 1.5  | 25.10.24 | Funktioniert    | Lukas Heiniger |
| 1.6  | 25.10.24 | Nicht umgesetzt | Lukas Heiniger |
| 1.7  | 25.10.24 | Nicht umgesetzt | Lukas Heiniger |
| 1.8  | 25.10.24 | Funktioniert    | Lukas Heiniger |
| 1.9  | 25.10.24 | Funktioniert    | Lukas Heiniger |

Fazit:

Ich bin nicht wirklich zufrieden mit meinem Projekt, ich hätte mehr machen müssen, damit ich zufrieden gewesen wäre. Ich denke aber, dass das, was ich gemacht habe, ist einigermassen gut.

## 6 Auswerten

Link zum Portfoliobeitrag: https://portfolio.bbbaden.ch/view/view.php?t=0055a491798c7a14b92f
