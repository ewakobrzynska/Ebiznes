#E-biznes

---
---
**Zadanie 1** [Docker](https://github.com/ewakobrzynska/Ebiznes/tree/main/Ex1)

:white_check_mark: 3.0 wymaganie 1 [Link do commita 1](https://github.com/ewakobrzynska/Ebiznes/commit/6d50b574b8d617dc16c6a3eed0dcc88f9399b271)

:white_check_mark: 3.5 wymaganie 2 [Link do commita2 ](https://github.com/ewakobrzynska/Ebiznes/commit/1f6092d52a8ebb602a6826a8512824272609c495)

4.0 Do powyższego należy dodać najnowszego Gradle’a oraz paczkę JDBC SQLite w ramach projektu na Gradle (build.gradle)

4.5 Należy stworzyć przykład typu HelloWorld oraz uruchomienie aplikacji przez CMD oraz gradle

5.0 Należy dodać konfigurację docker-compose

---

**Zadanie 2** [Scala](https://github.com/ewakobrzynska/Ebiznes/tree/main/ex2)

:white_check_mark:  3.0 wymaganie 1 [Link do commita 1](https://github.com/ewakobrzynska/Ebiznes/commit/9b6983b8ffdd862aa16a5229d35ce2e039769d51)

:white_check_mark:  3.5 wymaganie 2 [Link do commita 2](https://github.com/ewakobrzynska/Ebiznes/commit/0232d39cf92a410053e0807ca46ab946d14570c1)

4.0 Należy stworzyć kontrolery do Kategorii oraz Koszyka + endpointy zgodnie z CRUD

4.5 Należy aplikację uruchomić na dockerze (stworzyć obraz) oraz dodać skrypt uruchamiający aplikację via ngrok

5.0 Należy dodać konfigurację CORS dla dwóch hostów dla metod CRUD

Kontrolery mogą bazować na listach zamiast baz danych. CRUD: show all, show by id (get), update (put), delete (delete), add (post).

---

**Zadanie 3** [Kotlin](https://github.com/ewakobrzynska/Ebiznes/tree/main/ebiznes3)

:white_check_mark: 3.0 Należy stworzyć aplikację kliencką w Kotlinie we frameworku Ktor, która pozwala na przesyłanie wiadomości na platformę Discord [Link do commita 1](https://github.com/ewakobrzynska/Ebiznes/commit/4e3ca19c5e01c3d3503866427b9b083e57f8f7ec)

3.5 Aplikacja jest w stanie odbierać wiadomości użytkowników z platformy Discord skierowane do aplikacji (bota)

4.0 Zwróci listę kategorii na określone żądanie użytkownika

4.5 Zwróci listę produktów wg żądanej kategorii

5.0 Aplikacja obsłuży dodatkowo jedną z platform: Slack, Messenfer, Webex, Skype, Discrod

---

**Zadanie 4** [Go](https://github.com/ewakobrzynska/Ebiznes/tree/main/ex4)

:white_check_mark: 3.0 Należy stworzyć aplikację we frameworki echo w j. Go, która będzie miała kontroler Produktów zgodny z CRUD [Link do commita1](https://github.com/ewakobrzynska/Ebiznes/commit/7df271924ee932c7598b15e2742af622d19a1e1a)

:white_check_mark: 3.5 Należy stworzyć model Produktów wykorzystując gorm oraz wykorzystać model do obsługi produktów (CRUD) w kontrolerze (zamiast listy) [Link do commita2](https://github.com/ewakobrzynska/Ebiznes/commit/b75f46b20d78c061b7333bbd8ed7cc62c00c9635)

:white_check_mark: 4.0 Należy dodać model Koszyka oraz dodać odpowiedni endpoint 

4.5 Należy stworzyć model kategorii i dodać relację między kategorią, a produktem

5.0 pogrupować zapytania w gorm’owe scope'y

---

**Zadanie 5** [Frontend](https://github.com/ewakobrzynska/Ebiznes/tree/main/ex5/moja-aplikacja)

Należy stworzyć aplikację kliencką wykorzystując bibliotekę React.js. W ramach projektu należy stworzyć trzy komponenty: Produkty, Koszyk oraz Płatności. Koszyk oraz Płatności powinny wysyłać do aplikacji serwerowej dane, a w Produktach powinniśmy pobierać dane o produktach z aplikacji serwerowej. Aplikacja serwera w jednym z trzech języków: Kotlin, Scala, Go. Dane pomiędzy wszystkimi komponentami powinny być przesyłane za pomocą React hooks.

:white_check_mark: 3.0 W ramach projektu należy stworzyć dwa komponenty: Produkty oraz Płatności; Płatności powinny wysyłać do aplikacji serwerowej dane, a w Produktach powinniśmy pobierać dane o produktach z aplikacji serwerowej [Commit](https://github.com/ewakobrzynska/Ebiznes/commit/1d0c4bab209c84a72eeefc73865a3cdd36c17e1c)


:white_check_mark: 3.5 Należy dodać Koszyk wraz z widokiem; należy wykorzystać routing [Commit](https://github.com/ewakobrzynska/Ebiznes/commit/872c5c340f9cb794af209b8edd4be042fbec8e5b)


4.0 Dane pomiędzy wszystkimi komponentami powinny być przesyłane za pomocą React hooks

4.5 Należy dodać skrypt uruchamiający aplikację serwerową oraz kliencką na dockerze via docker-compose

5.0 Należy wykorzystać axios’a oraz dodać nagłówki pod CORS

---

**Zadanie 6** [Testy](https://github.com/ewakobrzynska/Ebiznes/tree/main/ex6)

Należy stworzyć 20 przypadków testowych w jednym z rozwiązań:

- Cypress JS (JS)
- Selenium (Kotlin, Python, Java, JS, Go, Scala)

Testy mają w sumie zawierać minimum 50 asercji (3.5). Mają również uruchamiać się na platformie Browserstack (5.0). Proszę pamiętać o stworzeniu darmowego konta via https://education.github.com/pack.

:white_check_mark: 3.0 Należy stworzyć 20 przypadków testowych w CypressJS lub Selenium (Kotlin, Python, Java, JS, Go, Scala) [Commit](https://github.com/ewakobrzynska/Ebiznes/commit/0e5b94e0980ce95925ac7cd3d83a308315367f96)

:white_check_mark: 3.5 Należy rozszerzyć testy funkcjonalne, aby zawierały minimum 50 asercji [Commit](https://github.com/ewakobrzynska/Ebiznes/commit/afc18c1ceefaf9fd2c41b8c23986136bd0558d0e)

:white_check_mark: 4.0 Należy stworzyć testy jednostkowe do wybranego wcześniejszego projektu z minimum 50 asercjami [Commit](https://github.com/ewakobrzynska/Ebiznes/commit/fa134b118b73d360859fe4584666c5222fbcf1e8)

:white_check_mark: 4.5 Należy dodać testy API, należy pokryć wszystkie endpointy z minimum jednym scenariuszem negatywnym per endpoint [Commit](https://github.com/ewakobrzynska/Ebiznes/commit/c1317f1744c237942b61c883b66d8c7e683794ae)

5.0 Należy uruchomić testy funkcjonalne na Browserstacku

---

**Zadanie 7** [Sonar](https://github.com/ewakobrzynska/Ebiznes/tree/main/ex7/ex8)

Należy dodać projekt aplikacji klienckiej oraz serwerowej (jeden branch, dwa repozytoria) do Sonara w wersji chmurowej (https://sonarcloud.io/). Należy poprawić aplikacje uzyskując 0 bugów, 0 zapaszków, 0 podatności, 0 błędów bezpieczeństwa. Dodatkowo należy dodać widżety sonarowe do README w repozytorium dane projektu z wynikami.

:white_check_mark: 3.0 Należy dodać litera do odpowiedniego kodu aplikacji serwerowej w hookach gita [Commit](https://github.com/ewakobrzynska/Ebiznes/commit/39e96a3875fe0370a20f8293d2a1b4c6c6e57fd9)

:white_check_mark: 3.5 Należy wyeliminować wszystkie bugi w kodzie w Sonarze (kod aplikacji serwerowej) [Commit](https://github.com/ewakobrzynska/Ebiznes/commit/b7f69d75c285258d99802ed889b1aa3da0892718)

[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=ewakobrzynska_Ebiznes&metric=bugs)](https://sonarcloud.io/summary/new_code?id=ewakobrzynska_Ebiznes)

:white_check_mark: 4.0 Należy wyeliminować wszystkie zapaszki w kodzie w Sonarze (kod aplikacji serwerowej) [Commit](https://github.com/ewakobrzynska/Ebiznes/commit/bb547400251d97a099ba8b8cdcb58cdde86b9b0e)

[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=ewakobrzynska_Ebiznes&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=ewakobrzynska_Ebiznes)

:white_check_mark: 4.5 Należy wyeliminować wszystkie podatności oraz błędy bezpieczeństwa w kodzie w Sonarze (kod aplikacji serwerowej) [Commit](https://github.com/ewakobrzynska/Ebiznes/commit/bb547400251d97a099ba8b8cdcb58cdde86b9b0e)

[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=ewakobrzynska_Ebiznes&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=ewakobrzynska_Ebiznes)

[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=ewakobrzynska_Ebiznes&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=ewakobrzynska_Ebiznes)

5.0 Należy wyeliminować wszystkie błędy oraz zapaszki w kodzie aplikacji klienckiej

---

**Zadanie 8** [Oauth2](https://github.com/ewakobrzynska/Ebiznes/tree/main/ex8)

Należy skonfigurować klienta Oauth2 (4.0). Dane o użytkowniku wraz z tokenem powinny być przechowywane po stronie bazy serwera, a nowy token (inny niż ten od dostawcy) powinien zostać wysłany do klienta (React). Można zastosować mechanizm sesji lub inny dowolny (5.0). Zabronione jest tworzenie klientów bezpośrednio po stronie React'a wyłączając z komunikacji aplikację serwerową, np. wykorzystując auth0.

Prawidłowa komunikacja: react-sewer-dostawca-serwer(via return uri)-react.

:white_check_mark: 3.0 logowanie przez aplikację serwerową (bez Oauth2) [Commit](https://github.com/ewakobrzynska/Ebiznes/commit/cc9d49a4c75374f6a7b9cab522c58d4c27812002)

:white_check_mark: 3.5 rejestracja przez aplikację serwerową (bez Oauth2) [Commit](https://github.com/ewakobrzynska/Ebiznes/commit/cc9d49a4c75374f6a7b9cab522c58d4c27812002)

:white_check_mark: 4.0 logowanie via Google OAuth2 [Commit](https://github.com/ewakobrzynska/Ebiznes/commit/c8c73a7b8e0b3e8e74f53e7e0aca05c08951320e)


4.5 logowanie via Facebook lub Github OAuth2

5.0 zapisywanie danych logowania OAuth2 po stronie serwera

---

**Zadanie 9** [ChatGPT bot](https://github.com/ewakobrzynska/Ebiznes/tree/main/ex9/bot)

Należy rozszerzyć funkcjonalność wcześniej stworzonego bota. Do niego należy stworzyć aplikajcę frontendową, która połączy się z osobnym serwisem, który przeanalizuje tekst od użytkownika i prześle zapytanie do GPT, a następnie prześle odpowiedź do użytkownika. Cały projekt należy stworzyć w Pythonie.

Dla studentów, którzy nie chcą lub nie mogą korzystać z GPT, zamiast GPT należy wykorzystać LLAMA2 za pomocą narzędzi do wykorzystania LLM lokalnie: https://ollama.com/download/windows

:white_check_mark: 3.0 należy stworzyć po stronie serwerowej osobny serwis do łącznia z chatGPT do usługi chat [Commit](https://github.com/ewakobrzynska/Ebiznes/commit/740661507124fee297d5d07a943d1bb8ac1ec8e6)

:white_check_mark: 3.5 należy stworzyć interfejs frontowy dla użytkownika, który komunikuje się z serwisem; odpowiedzi powinny być wysyałen do frontendowego interfejsu [Commit](https://github.com/ewakobrzynska/Ebiznes/commit/b5ba8b5875f55da6c7d9161ffb7abc66f87a5080)

:white_check_mark: 4.0 stworzyć listę 5 różnych otwarć oraz zamknięć rozmowy [Commit](https://github.com/ewakobrzynska/Ebiznes/commit/8034119a7ab308b2ff886366e3946d68c4017bde)

4.5 filtrowanie po zagadnieniach związanych ze sklepem (np. ograniczenie się jedynie do ubrań oraz samego sklepu) do GPT

5.0 filtrowanie odpowiedzi po sentymencie

---

**Zadanie 10** [Chmura/CI]()

Należy wykorzystać GitHub Actions (dopuszczalne są inne rozwiązania CI) oraz chmurę Azure (dopuszczalne inne chmury), aby zbudować oraz zdeployować aplikację kliencką (frontend) oraz serwerową (backend) jako osobne dwie aplikacje. Należy do tego wykorzystać obrazy dockerowe, a aplikacje powinny działać na kontenerach. Dopuszczalne jest zbudowanie wcześniej aplikacji (jar package) oraz budowanie aplikacji via Github Actions. Należy zwrócić uwagę na zasoby dostępne na chmurze.

3.0 Należy stworzyć odpowiednie instancje po stronie chmury na dockerze

3.5 Stworzyć odpowiedni pipeline w Github Actions do budowania aplikacji (np. via fatjar)

4.0 Dodać notyfikację mailową o zbudowaniu aplikacji

4.5 Dodać krok z deploymentem aplikacji serwerowej oraz klienckiej na chmurę

5.0 Dodać uruchomienie regresyjnych testów automatycznych (funkcjonalnych) jako krok w Actions