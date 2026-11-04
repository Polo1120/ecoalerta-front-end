# EcoAlerta

Plataforma web orientada al reporte y seguimiento de microbasureros, que busca facilitar la comunicación entre la comunidad y las entidades responsables de la gestión de residuos.

## Descripción

EcoAlerta permite plantear una solución digital para identificar, reportar y realizar seguimiento a puntos de acumulación inadecuada de residuos sólidos en espacios urbanos.

Este repositorio contiene el desarrollo del frontend de la plataforma.

## Tecnologías utilizadas

- React 19
- TypeScript
- Vite
- React Router DOM
- CSS
- pnpm

## Funcionalidades implementadas

- Pantalla de inicio de sesión.
- Registro de usuarios.
- Validación de formularios.
- Navegación entre pantallas.
- Protección de rutas.
- Simulación local del proceso de autenticación.

**Nota:** La autenticación y el registro funcionan localmente. Actualmente no existe conexión con un backend ni con una base de datos.

## Requisitos

Para ejecutar el proyecto se necesita:

- Node.js compatible con la versión de Vite utilizada.
- pnpm.
- Git.

## Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/Polo1120/ecoalerta-front-end.git
   ```

2. Ingresar a la carpeta del proyecto:

   ```bash
   cd ecoalerta-front
   ```

3. Instalar las dependencias:

   ```bash
   pnpm install
   ```

4. Ejecutar el entorno de desarrollo:

   ```bash
   pnpm dev
   ```

5. Abrir en el navegador la dirección local que muestra Vite en la terminal.

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `pnpm dev` | Inicia el servidor de desarrollo. |
| `pnpm build` | Genera la compilación de producción. |
| `pnpm lint` | Ejecuta el análisis estático del código. |
| `pnpm preview` | Permite visualizar la compilación localmente. |

## Estructura del proyecto

```text
public/
src/
├── assets/
│   ├── icons/
│   └── svg/
├── components/
├── context/
├── data/
├── pages/
├── routes/
├── types/
└── utils/
```

## Estado del desarrollo

El frontend cuenta con una primera versión funcional de las pantallas de autenticación y navegación. La integración con el backend se realizará en una etapa posterior.

## Repositorio

Este proyecto utiliza Git y GitHub para el control de versiones y la gestión del código fuente.