# Simple API

API REST sencilla creada con Express para practicar operaciones basicas sobre una lista en memoria.

## Tecnologias

- Node.js
- Express

## Como ejecutar

1. Instalar dependencias:

```bash
npm install
```

2. Iniciar el servidor:

```bash
npm run dev
```

3. Probar la API en:

```text
http://localhost:3000
```

## Endpoints

- `GET /`: lista los registros en memoria.
- `POST /`: agrega un registro enviado en JSON.
- `PUT /`: actualiza un registro por `id`.

## Nota

Los datos se guardan en memoria, por lo que se reinician al detener el servidor.
