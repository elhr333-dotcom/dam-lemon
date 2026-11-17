# 🍋 DAM LEMON — Pasaporte Motriz

Web en español para el trabajo de Manifestaciones Básicas de la Motricidad (INEFC, 2026–2027).

## Archivos
- `index.html`: estructura de la página y textos fijos.
- `style.css`: diseño, colores, adaptación a móviles y animaciones.
- `content.js`: **editad aquí los nombres, el itinerario y el contenido de Equilibrio**.
- `script.js`: genera tarjetas y controla el menú móvil.

## Ver la web
Abrir `index.html` en Chrome o Firefox. La tipografía de Google Fonts necesita conexión.

## Editar contenido
1. Abrir `content.js` con Visual Studio Code o el editor de GitHub.
2. Sustituir los textos entre comillas sin borrar comas, llaves ni corchetes.
3. Para cambiar los textos generales, editar `index.html`.
4. Para cambiar colores, editar las variables `:root` en `style.css`.
5. Guardar y comprobar los cambios en el navegador.

## Publicar en GitHub Pages
1. Crear una cuenta en https://github.com.
2. Crear un repositorio público llamado `dam-lemon`.
3. Subir los cuatro archivos de la web a la **raíz del repositorio** (Add file > Upload files > Commit changes).
4. Ir a Settings > Pages > Build and deployment > Deploy from a branch.
5. Seleccionar `main` y `/ (root)` y guardar.
6. La dirección será similar a `https://USUARIO.github.io/dam-lemon/`.
7. Al confirmar nuevas ediciones, GitHub Pages volverá a publicar la web.

## Añadir fotos
Crear una carpeta `images` y subir fotografías autorizadas. En `index.html` insertar donde corresponda:

```html
<img src="images/actividad-equilibrio.jpg" alt="Descripción de la actividad" loading="lazy">
```

## Añadir vídeos
Subir el vídeo a YouTube con la privacidad adecuada e insertar el `iframe` proporcionado por YouTube. No publicar datos personales ni imágenes de menores sin permiso.

## Importante
La presentación del profesorado exige crear una web en equipo y aplicar criterios de seguridad, comunicación y participación. Todavía no tenemos la «Base de orientación» ni la «Ficha de tarea de habilidad motriz», por lo que esta estructura es provisional, no una rúbrica confirmada.
