Juego de la serpiente
Este proyecto es una implementación del clásico juego de Snake, desarrollado con HTML, CSS y JavaScript. El juego se ejecuta en un lienzo (<canvas>) y permite a los jugadores controlar una serpiente para recoger manzanas y aumentar su puntuación. A medida que la serpiente crece, la velocidad del juego aumenta, proporcionando un desafío adicional.

[![imagen-2024-08-20-085232926.png](https://i.postimg.cc/MK2njtJH/imagen-2024-08-20-085232926.png)](https://postimg.cc/w32qCXvY)

Estructura del Proyecto
Archivos Principales
index.html: Contiene la estructura básica del juego, incluyendo un lienzo (<canvas>) para la representación gráfica del juego y estilos básicos.
style.css: Define el estilo visual del juego, incluyendo la apariencia del lienzo y el fondo de la página.
index.js: Implementa la lógica del juego, incluyendo el movimiento de la serpiente, la detección de colisiones, el manejo de la puntuación y la reproducción de sonidos.
HTML
El archivo HTML establece la estructura de la página, que incluye:

Un título de la página que muestra "Snake".
Un lienzo (<canvas>) con un identificador game, donde se dibuja el juego.
CSS
El archivo CSS proporciona el estilo para la página:

Establece un fondo gris para la página.
Aplica una sombra al lienzo del juego para darle un efecto visual atractivo.

pulg.mp3: se aplica este sonido cada vez que la serpiente recoge una manzana

JavaScript
El archivo JavaScript maneja la lógica del juego:

Clase SnakePart: Define los segmentos de la serpiente.
Variables: Controlan la velocidad, el tamaño de los segmentos, y el estado del juego.
Funciones:
drawGame(): Ejecuta el bucle del juego, actualiza la posición de la serpiente, y redibuja el juego.
isGameOver(): Verifica si el juego ha terminado debido a una colisión.
drawScore(): Muestra la puntuación actual en la pantalla.
clearScreen(): Limpia el lienzo antes de redibujar el juego.
drawSnake(): Dibuja la serpiente y actualiza su longitud.
changeSnakePosition(): Actualiza la posición de la serpiente según la velocidad.
drawApple(): Dibuja la manzana en el lienzo.
checkAppleCollision(): Verifica si la serpiente ha comido la manzana y actualiza la puntuación y la longitud de la serpiente.
keyDown(event): Maneja los eventos de teclado para controlar la dirección de la serpiente.

Instrucciones
Abre index.html en tu navegador para comenzar a jugar.
Usa las teclas de flecha o las teclas W, A, S, D para controlar la dirección de la serpiente.
Intenta recoger las manzanas para aumentar tu puntuación y la longitud de la serpiente.
Evita las colisiones con los bordes del lienzo y con la propia serpiente para no perder el juego.
