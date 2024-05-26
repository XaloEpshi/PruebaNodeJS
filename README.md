# User Management API

Esta es una API para la gestión de usuarios que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) y manejar la subida de fotos de usuarios. La API está construida utilizando Node.js, Express, Mongoose y Multer.

## Funcionalidades

- Crear un nuevo usuario
- Obtener la lista de usuarios
- Obtener un usuario por su ID
- Actualizar un usuario por su ID
- Eliminar un usuario por su ID
- Buscar usuarios por nombre completo o email
- Subir y obtener fotos de usuarios

## Tecnologías Utilizadas

- Node.js
- Express
- Mongoose
- Multer
- MongoDB

## Requisitos Previos

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [MongoDB](https://www.mongodb.com/) (versión 4 o superior)

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/XaloEpshi/PruebaNodeJS.git
    cd tu-repositorio
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Configura tu base de datos MongoDB. Puedes usar una base de datos local o un servicio en la nube como [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

4. Crea un archivo `.env` en la raíz del proyecto y configura tu URI de MongoDB:

    ```env
    MONGODB_URI=mongodb://localhost:27017/tu_base_de_datos
    ```

5. Ejecuta la aplicación:

    ```bash
    npm start
    ```

## Uso

La API estará disponible en `http://localhost:3000/api`.

### Rutas Disponibles

- **Ruta de Prueba**
  - `GET /api/` - Verificar que el servidor está funcionando.

- **Operaciones CRUD de Usuarios**
  - `POST /api/user` - Crear un nuevo usuario.
  - `GET /api/users/:last?` - Obtener la lista de usuarios. Si se pasa el parámetro `last`, se limita a los últimos 5 usuarios.
  - `GET /api/user/:id` - Obtener un usuario por su ID.
  - `PUT /api/user/:id` - Actualizar un usuario por su ID.
  - `DELETE /api/user/:id` - Eliminar un usuario por su ID.
  - `GET /api/user/search/:search` - Buscar usuarios por nombre completo o email.

- **Gestión de Fotos de Usuarios**
  - `POST /api/users/photo/:id?` - Subir una foto de usuario. Si se proporciona un ID, se actualiza la foto del usuario existente.
  - `GET /api/user/photo/:filename` - Obtener una foto de usuario por su nombre de archivo.

### Ejemplos de Solicitudes

#### Crear un Usuario

```bash
curl -X POST http://localhost:3000/api/user \
  -H "Content-Type: application/json" \
  -d '{"fullname": "John Doe", "email": "john.doe@example.com"}'
