# Usa una imagen base de Node.js para construir la aplicación
FROM node:20 AS build

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código de la aplicación al contenedor
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Usa una imagen base de Nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos construidos de la etapa anterior al directorio de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expone el puerto 80 para el servidor Nginx
EXPOSE 80

# Comando para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
