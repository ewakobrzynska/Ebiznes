# Używamy oficjalnego obrazu Node.js jako podstawy
FROM node:16-alpine

# Ustawiamy katalog roboczy w kontenerze
WORKDIR /app

# Kopiujemy pliki package.json i package-lock.json
COPY package*.json ./

# Instalujemy zależności
RUN npm install

# Kopiujemy resztę plików projektu do katalogu roboczego
COPY . .

# Budujemy aplikację na produkcję
RUN npm run build

# Używamy obrazu serwera nginx do serwowania plików statycznych
FROM nginx:alpine

# Kopiujemy zbudowane pliki aplikacji do katalogu nginx
COPY --from=0 /app/build /usr/share/nginx/html

# Eksponujemy port 80
EXPOSE 80

# Uruchamiamy nginx
CMD ["nginx", "-g", "daemon off;"]
