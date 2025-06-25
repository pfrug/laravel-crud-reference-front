# Sidetours Front

Este proyecto es una demo básica de frontend en Vue 3, desacoplada y conectada a una API REST.

## Requisitos

- Node.js >= 18
- npm >= 9
- Docker y Docker Compose (para entorno local)

## Instalación

1. Clonar el proyecto:

```bash
git clone https://github.com/pfrug/sidetours_front.git
cd sidetours_front
```

2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno:

Renombrar `.env.example` a `.env` y ajustar variables

```env
VITE_API_URL=http://localhost:8000/api
```

## Desarrollo

Para levantar el entorno de desarrollo:

```bash
npm run dev
```

La app estará disponible en `http://localhost:5173`.

## Compilar para producción

```bash
npm run build
```

Esto generará los archivos listos para producción en la carpeta `dist/`.

## Docker 

Docker para entorno local

```bash
docker-compose -f docker-compose.dev.yml up --build
```
