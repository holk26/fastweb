# FastWeb

Un sitio web moderno creado con Astro 5.17 y TailwindCSS.

## 🚀 Características

- ⚡ **Astro 5.17** - Framework web ultra rápido
- 🎨 **TailwindCSS 3** - Framework CSS utility-first
- 💎 **TypeScript** - Tipado estático para mejor desarrollo
- 📱 **Diseño Responsive** - Optimizado para todos los dispositivos
- 🔧 **Fácil de Personalizar** - Código limpio y modular

## 🛠️ Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Construye el sitio para producción en `./dist/`  |
| `npm run preview`         | Previsualiza el build de producción localmente   |

## 📁 Estructura del Proyecto

```
/
├── public/             # Archivos estáticos
│   └── favicon.svg
├── src/
│   ├── components/     # Componentes reutilizables
│   │   ├── Navigation.astro
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   └── Footer.astro
│   ├── layouts/        # Layouts de página
│   │   └── Layout.astro
│   └── pages/          # Páginas del sitio
│       └── index.astro
├── astro.config.mjs    # Configuración de Astro
├── tailwind.config.mjs # Configuración de TailwindCSS
└── package.json
```

## 🎨 Personalización

### Colores
Modifica los colores en `tailwind.config.mjs` para cambiar el esquema de colores del sitio.

### Contenido
Edita los archivos `.astro` en `src/pages/` y `src/components/` para personalizar el contenido.

### Estilos
TailwindCSS permite personalizar el diseño usando clases utility directamente en los componentes.

## 📚 Aprende Más

- [Documentación de Astro](https://docs.astro.build)
- [Documentación de TailwindCSS](https://tailwindcss.com/docs)

