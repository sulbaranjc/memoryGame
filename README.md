# memoryGame
### Documentación en Markdown para el CSS del Juego de Memoria

#### 1. **Estilo General del Body**
```css
body {
  background-color: #f8f8f8;
  font-family: 'Arial', sans-serif;
}
```
- `background-color`: Color de fondo para toda la página web, un tono de gris claro.
- `font-family`: Define la tipografía para el texto en toda la página.

#### 2. **Estilo del Contenedor**
```css
.container {
  margin-top: 50px;
}
```
- `margin-top`: Añade un espacio en la parte superior de la clase `.container`.

#### 3. **Estilo de las Tarjetas**
```css
.card {
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  position: relative;
  cursor: pointer;
}
```
- `width` y `height`: Dimensiones de las tarjetas.
- `transform-style`: Mantiene las transformaciones 3D de los hijos.
- `transition`: Suaviza las transformaciones, en este caso, la rotación.
- `position`: Posición relativa para permitir posicionamiento absoluto de los hijos.
- `cursor`: Indica que las tarjetas son clickeables.

#### 4. **Estilo del Frente y Dorso de las Tarjetas**
```css
.card .card-front,
.card .card-back {
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```
- `backface-visibility`: Oculta el lado no visible de las tarjetas durante la rotación.
- `position`: Posiciona el frente y dorso de las tarjetas absolutamente dentro de `.card`.
- `top` y `left`: Aseguran que el frente y dorso comiencen desde la esquina superior izquierda.
- `width` y `height`: Ocupan completamente el espacio de `.card`.

#### 5. **Estilo del Frente de las Tarjetas**
```css
.card .card-front {
  transform: rotateY(180deg);
}
```
- `transform`: Rota el frente de las tarjetas para que inicialmente estén ocultas.

#### 6. **Estilo de Tarjetas No Volteadas**
```css
.card:not(.flipped) {
  transform: rotateY(180deg);
}
```
- `transform`: Rota las tarjetas que no están volteadas para mostrar su dorso.

#### 7. **Estilo del Tablero de Juego**
```css
#game-board {
  width: 840px; 
}
```
- `width`: Define el ancho del tablero del juego.

#### 8. **Estilo del Pie de Página**
```css
footer {
  margin-top: 20px;
}
```
- `margin-top`: Añade espacio arriba del `footer`.

#### 9. **Estilo de las Imágenes dentro de las Tarjetas**
```css
.card .card-front img,
.card .card-back img {
    width: 80%;
    height: auto;
}
```
- `width`: Establece un ancho fijo para las imágenes en las caras de las tarjetas.
- `height`: Ajusta la altura manteniendo la proporción de las imágenes.

Esta documentación en formato Markdown puede ser útil si estás considerando integrarla en un archivo README en un repositorio de GitHub o similar, proporcionando claridad y comprensión del código CSS del proyecto del juego de memoria. Si necesitas más detalles o ajustes, no dudes en pedir ayuda adicional.
