# Bolt-Zahlungsplattform

# Projekt-Dokumentation

Lukas Heiniger

## 1 Informieren

### 1.1 Ihr Projekt

Ich erstelle in diesem Projekt eine Webseite, über mich auf welcher man meine Projekte etc. sehen kann und auch noch informationen über mich.

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

| AP-№ | Frist | Zuständig | Beschreibung                                                                                                                          | Geplante Zeit |
| ---- | ----- | --------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| 1.A  |       | Lukas     | Registrierung-Seite erstellen: HTML-Formular für Eingabe von Benutzerdaten (z. B. Name, E-Mail, Passwort).                            | 60 min        |
| 1.B  |       | Lukas     | Registrierung-Seite stylen: Einfache, benutzerfreundliche Gestaltung mit CSS.                                                         | 45 min        |
| 2.A  |       | Lukas     | Anmeldeseite erstellen: HTML-Formular für Eingabe von E-Mail und Passwort.                                                            | 45 min        |
| 2.B  |       | Lukas     | Anmeldeseite stylen: Einheitliches Design passend zur Registrierung-Seite.                                                            | 45 min        |
| 3.A  |       | Lukas     | Startseite erstellen: Begrüßungstext und Navigation zu wichtigen Funktionen (z. B. Registrieren, Anmelden).                           | 60 min        |
| 3.B  |       | Lukas     | Startseite stylen: Einheitliches Design mit responsivem Layout.                                                                       | 45 min        |
| 4.A  |       | Lukas     | Benutzeroberfläche für Geld senden erstellen: Eingabefelder für Empfänger und Betrag.                                                 | 60 min        |
| 4.B  |       | Lukas     | Gestaltung der Benutzeroberfläche für Geld senden: Klare und intuitive Darstellung.                                                   | 45 min        |
| 5.A  |       | Lukas     | Seite für Transaktionshistorie erstellen: Anzeige von Datum, Empfänger und Betrag.                                                    | 60 min        |
| 5.B  |       | Lukas     | Gestaltung der Transaktionshistorie: Übersichtliches und responsives Design.                                                          | 45 min        |
| 6.A  |       | Lukas     | Benutzeroberfläche für Passwort-Zurücksetzen erstellen: Formular für neue Passwort-Eingabe.                                           | 60 min        |
| 6.B  |       | Lukas     | Styling der Passwort-Zurücksetzen-Seite: Einheitliches Design.                                                                        | 45 min        |
| 7.A  |       | Lukas     | Benachrichtigungsanzeige (z. B. Modal oder Banner) für erfolgreiche Überweisungen erstellen.                                          | 60 min        |
| 8.A  |       | Lukas     | Navigationsleiste mit Links zu allen wichtigen Seiten erstellen und einbinden.                                                        | 60 min        |
| 8.B  |       | Lukas     | Styling der Navigationsleiste: Responsive Darstellung und aktiver Link-Indikator.                                                     | 45 min        |
| 9.A  |       | Lukas     | API-Endpoint für die Registrierung erstellen: Benutzer können ihre Daten speichern.                                                   | 90 min        |
| 9.B  |       | Lukas     | API-Endpoint für die Anmeldung erstellen: Benutzer können sich mit E-Mail und Passwort anmelden.                                      | 90 min        |
| 9.C  |       | Lukas     | API-Endpoint für das Zurücksetzen des Passworts erstellen: Benutzer können ihre Passwörter zurücksetzen.                              | 60 min        |
| 10.A |       | Lukas     | API-Endpoint für das Senden von Geld erstellen: Ermöglicht es einem Benutzer, einen Betrag an einen anderen zu senden.                | 120 min       |
| 10.B |       | Lukas     | API-Endpoint für die Transaktionshistorie erstellen: Gibt eine Liste der Transaktionen des Benutzers zurück.                          | 90 min        |
| 11.A |       | Lukas     | Datenbankstruktur für Benutzer erstellen: Tabellen für Benutzer, E-Mail, Passwort und Transaktionen anlegen.                          | 90 min        |
| 11.B |       | Lukas     | Datenbankstruktur für Transaktionen erstellen: Tabellen für gesendete Beträge, Empfänger, Datum und Status anlegen.                   | 90 min        |
| 12.A |       | Lukas     | Transaktionslogik implementieren: Beim Senden von Geld wird die Transaktion in der Datenbank gespeichert.                             | 120 min       |
| 13.A |       | Lukas     | Datenbankverbindung und -abfragen einrichten: Sicherstellen, dass das Frontend mit der Datenbank kommunizieren kann.                  | 90 min        |
| 14.A |       | Lukas     | Validierung und Sicherheit für Transaktionen einbauen: Prüfen, ob der Benutzer genug Guthaben hat und ob der Empfänger existiert.     | 120 min       |
| 15.A |       | Lukas     | API für Transaktionsstatus implementieren: Benutzer können den Status ihrer Überweisung abfragen.                                     | 90 min        |
| 16.A |       | Lukas     | Authentifizierung für Transaktionen sicherstellen: Nur authentifizierte Benutzer können Transaktionen durchführen.                    | 90 min        |
| 17.A |       | Lukas     | Fehlerbehandlung und Logging für Transaktionen einrichten: Bei Fehlern sollen informative Fehlernachrichten und Logs erstellt werden. | 90 min        |
| 18.A |       | Lukas     | Testen aller API-Endpoints: Sicherstellen, dass die APIs wie erwartet funktionieren (Unit-Tests).                                     | 90 min        |
| 19.A |       | Lukas     | Dokumentation der API und Datenbankstruktur: Beschreiben, wie man die API nutzt und welche Daten gespeichert werden.                  | 90 min        |
| 20.A |       | Lukas     | Sicherstellen, dass die Anwendung skalierbar ist und viele Benutzer gleichzeitig die Anwendung nutzen können.                         | 120 min       |
| 21.A |       | Lukas     | Sicherheit der Benutzerdaten und Transaktionen gewährleisten (z. B. HTTPS, sichere Passwörter).                                       | 90 min        |

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
