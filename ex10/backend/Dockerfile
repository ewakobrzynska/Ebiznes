# Używamy oficjalnego obrazu Maven do budowania aplikacji
FROM maven:3.8.4-openjdk-11 AS build

# Ustawiamy katalog roboczy w kontenerze
WORKDIR /app

# Kopiujemy plik pom.xml i pobieramy zależności
COPY pom.xml .
RUN mvn dependency:go-offline

# Kopiujemy resztę plików projektu i budujemy aplikację
COPY src ./src
RUN mvn package

# Używamy oficjalnego obrazu Javy do uruchomienia aplikacji
FROM openjdk:11-jre-slim

# Ustawiamy katalog roboczy w kontenerze
WORKDIR /app

# Kopiujemy zbudowany plik JAR z fazy budowania
COPY --from=build /app/target/backend-0.0.1-SNAPSHOT.jar app.jar

# Eksponujemy port 8080
EXPOSE 8080

# Uruchamiamy aplikację
CMD ["java", "-jar", "app.jar"]
