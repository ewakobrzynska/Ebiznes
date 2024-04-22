**Zadanie 1** [Docker](https://github.com/ewakobrzynska/Ebiznes/tree/main/Ex1)

:white_check_mark: 3.0 wymaganie 1 [Link do commita 1](https://github.com/ewakobrzynska/Ebiznes/commit/6d50b574b8d617dc16c6a3eed0dcc88f9399b271)

:white_check_mark: 3.5 wymaganie 2 [Link do commita2 ](https://github.com/ewakobrzynska/Ebiznes/commit/1f6092d52a8ebb602a6826a8512824272609c495)

:x: 4.0 wymaganie 3 [Link do commita 3]

:x: 4.5 wymaganie 4 [Link do commita 4]

:x: 5.0 wymaganie 5 [Link do commita 5]



**Zadanie 2** [Scala](https://github.com/ewakobrzynska/Ebiznes/tree/main/ex2)

:white_check_mark:  3.0 wymaganie 1 [Link do commita 1](https://github.com/ewakobrzynska/Ebiznes/commit/9b6983b8ffdd862aa16a5229d35ce2e039769d51)

:white_check_mark:  3.5 wymaganie 2 [Link do commita 2](https://github.com/ewakobrzynska/Ebiznes/commit/0232d39cf92a410053e0807ca46ab946d14570c1)

:x: 4.0 wymaganie 3 [Link do commita 3]

:x: 4.5 wymaganie 4 [Link do commita 4]

:x: 5.0 wymaganie 5 [Link do commita 5]



**Zadanie 3** [Kotlin](https://github.com/ewakobrzynska/Ebiznes/tree/main/ebiznes3)

:white_check_mark: 3.0 Należy stworzyć aplikację kliencką w Kotlinie we frameworku Ktor, która pozwala na przesyłanie wiadomości na platformę Discord [Link do commita 1](https://github.com/ewakobrzynska/Ebiznes/commit/4e3ca19c5e01c3d3503866427b9b083e57f8f7ec)

:x: 3.5 Aplikacja jest w stanie odbierać wiadomości użytkowników z platformy Discord skierowane do aplikacji (bota)

:x: 4.0 Zwróci listę kategorii na określone żądanie użytkownika

:x: 4.5 Zwróci listę produktów wg żądanej kategorii

:x: 5.0 Aplikacja obsłuży dodatkowo jedną z platform: Slack, Messenfer, Webex, Skype, Discrod



**Zadanie 4** [Go](https://github.com/ewakobrzynska/Ebiznes/tree/main/ex4)

:white_check_mark: 3.0 Należy stworzyć aplikację we frameworki echo w j. Go, która będzie miała kontroler Produktów zgodny z CRUD [Link do commita1](https://github.com/ewakobrzynska/Ebiznes/commit/7df271924ee932c7598b15e2742af622d19a1e1a)

:white_check_mark: 3.5 Należy stworzyć model Produktów wykorzystując gorm oraz wykorzystać model do obsługi produktów (CRUD) w kontrolerze (zamiast listy) [Link do commita2](https://github.com/ewakobrzynska/Ebiznes/commit/b75f46b20d78c061b7333bbd8ed7cc62c00c9635)

:white_check_mark: 4.0 Należy dodać model Koszyka oraz dodać odpowiedni endpoint 

:x: 4.5 Należy stworzyć model kategorii i dodać relację między kategorią, a produktem

:x: 5.0 pogrupować zapytania w gorm’owe scope'y



**Zadanie 5** [Frontend](https://github.com/ewakobrzynska/Ebiznes/tree/main/ex5/moja-aplikacja)

Należy stworzyć aplikację kliencką wykorzystując bibliotekę React.js. W ramach projektu należy stworzyć trzy komponenty: Produkty, Koszyk oraz Płatności. Koszyk oraz Płatności powinny wysyłać do aplikacji serwerowej dane, a w Produktach powinniśmy pobierać dane o produktach z aplikacji serwerowej. Aplikacja serwera w jednym z trzech języków: Kotlin, Scala, Go. Dane pomiędzy wszystkimi komponentami powinny być przesyłane za pomocą React hooks.

:white_check_mark: 3.0 W ramach projektu należy stworzyć dwa komponenty: Produkty oraz Płatności; Płatności powinny wysyłać do aplikacji serwerowej dane, a w Produktach powinniśmy pobierać dane o produktach z aplikacji serwerowej [Link do commita1](https://github.com/ewakobrzynska/Ebiznes/commit/1d0c4bab209c84a72eeefc73865a3cdd36c17e1c)


:white_check_mark: 3.5 Należy dodać Koszyk wraz z widokiem; należy wykorzystać routing [Link do commita2](https://github.com/ewakobrzynska/Ebiznes/commit/872c5c340f9cb794af209b8edd4be042fbec8e5b)


:x: 4.0 Dane pomiędzy wszystkimi komponentami powinny być przesyłane za pomocą React hooks

:x: 4.5 Należy dodać skrypt uruchamiający aplikację serwerową oraz kliencką na dockerze via docker-compose

:x: 5.0 Należy wykorzystać axios’a oraz dodać nagłówki pod CORS



**Zadanie 6** [Testy]

Należy stworzyć 20 przypadków testowych w jednym z rozwiązań:

- Cypress JS (JS)
- Selenium (Kotlin, Python, Java, JS, Go, Scala)

Testy mają w sumie zawierać minimum 50 asercji (3.5). Mają również uruchamiać się na platformie Browserstack (5.0). Proszę pamiętać o stworzeniu darmowego konta via https://education.github.com/pack.

:x: 3.0 Należy stworzyć 20 przypadków testowych w CypressJS lub Selenium (Kotlin, Python, Java, JS, Go, Scala)

:x: 3.5 Należy rozszerzyć testy funkcjonalne, aby zawierały minimum 50 asercji

:x: 4.0 Należy stworzyć testy jednostkowe do wybranego wcześniejszego projektu z minimum 50 asercjami

:x: 4.5 Należy dodać testy API, należy pokryć wszystkie endpointy z minimum jednym scenariuszem negatywnym per endpoint

:x: 5.0 Należy uruchomić testy funkcjonalne na Browserstacku

