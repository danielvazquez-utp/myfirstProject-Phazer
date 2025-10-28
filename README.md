# Mi primer video juego con Phazer

## Recomendaciones
- Es deseable tener una experiencia básica en Javascript sin embargo, no es obligatorio.
- Tener instalado Phazer Launcher https://phaser.io/download/phaser-launcher
<img width="1895" height="979" alt="image" src="https://github.com/user-attachments/assets/549a3436-5dd1-4b30-b597-7b3cf5c7f02a" />
<img width="1895" height="979" alt="image" src="https://github.com/user-attachments/assets/7c209456-c969-4124-bad9-6a7cc97682c2" />
- Descargar la carpeta de *assets.zip* https://drive.google.com/file/d/1yB5er06krYFtuISioqmqRtw_4-DHLzwB/view?usp=sharing

## Paso 1. Crear un nuevo proyecto

- Ir a la pestaña de Projects y seleccionar *Nuevo*, y seleccionar un template como *Snake*.
<img width="1272" height="711" alt="image" src="https://github.com/user-attachments/assets/83d3745b-b975-4a7b-a961-54d56cf310fc" />

- Seleccionar una carpeta, asignar un nombre y crear.
<img width="1272" height="711" alt="image" src="https://github.com/user-attachments/assets/60253f72-dc96-40f5-8a57-df1e1fd0ab4f" />

## Paso 2. Identificar la estructura del proyecto 

- **Archivos y carpetas**: (ubicado del lado izquierdo de la pantalla) Muestra la estructura del proyecto.
<img width="1606" height="891" alt="image" src="https://github.com/user-attachments/assets/f218bf5f-3991-4b45-9c37-71b17833e09e" />

- **Ejecutar projecto**: En la parte superior se muestra un botón de reproducir para ejecutar el video juego e ir visualizando los cambios aplicados.
<img width="1605" height="888" alt="image" src="https://github.com/user-attachments/assets/3177e0a4-0fb5-4b6d-9d8b-6bb77a6ca4a4" />

- **Acceso rápido a herramientas y recursos**: Serie de botones ubicados en la parte superior derecha que ofrecen diferentes funcionalidades como exportar proyecto a .zip, documentación, etc.
<img width="1606" height="890" alt="image" src="https://github.com/user-attachments/assets/b1cf8476-83a9-463d-8c57-5003d5a5e135" />

Algunos archivos/carpetas importantes que hay que identificar son:
- **project.config**: Contiene algunos parámetros generales de configuración del proyecto como el nombre del juego, el tamaño, versión, etc.
- **src**: Esta carpte contiene una archivo principal *main.js* que se encarga de la gestión de las escenas que componen el juego.
- **scenes**: Esta carpeta contiene cada una de las escenas que en conjunto ayudan a estructurar al juego.
- **assets**: Esta carpeta contiene imagenes, sonidos o cualquier otro recurso multimedia que pueda ocupar el proyecto.
<img width="1603" height="893" alt="image" src="https://github.com/user-attachments/assets/10714f44-7109-4014-8152-2bb6f7b5c705" />

## Paso 3. Configuración inicial del proyecto

- Modificar el tamaño del video juego a 800x600, tanto en el archivo *project.config* como en *src/main.js*
<img width="478" height="281" alt="image" src="https://github.com/user-attachments/assets/7bd495ed-8edd-4fa0-88e2-f31185789898" />
<img width="423" height="286" alt="image" src="https://github.com/user-attachments/assets/aa0581da-8e85-4457-a256-dcb694856dca" />

- NOTA: Para guardar un cambio realizado en cualquier archivo es necesario presionar la combinación de teclas **ctrl+s**.
- Vaciar el métodos principales en *src/Game.js* para que queden de la siguiente manera:
<img width="480" height="394" alt="image" src="https://github.com/user-attachments/assets/26a07560-4aac-470e-ab8d-a7b3a9758035" />

- Cargar con contenido de la carpeta descargada *assets.zip* en la carpeta assets del proyecto (imagenes). Esto se puede hacer arrastrando desde el *explorador de archivos* hacia la carpeta *assets* en Phazer Launcher.
<img width="1607" height="892" alt="image" src="https://github.com/user-attachments/assets/9f4866ef-e2ea-4a4b-b55e-d10e0dae01ac" />

## Paso 4. Precarga de recursos del proyecto

En este punto, el archivo *preloading.js* es quien se encarga de llevar a cabo la precarga de los recursos que serán empleados por el videojuego (imágenes y otros) y ademas les asocia un identificador (nombre) mediante el cual serán invocados en el proyecto. Por ello, hay que modificar el contenido del método *preload()* de la siguiente manera:

<img width="626" height="368" alt="image" src="https://github.com/user-attachments/assets/04d00e8a-1f75-4a7d-8b02-ab0f51df413e" />

## Paso 5. Agregando elementos a escena

A partir de la carga de recursos, es posible comenzar a hacer uso de ellos dentro de una escena, concretamente en *Game.js*. Por ello, se pueden agregar tanto un fondo de imagen que simule el cielo, asi como bloques rellenos de simulen un piso como se muestra a continuación:

<img width="653" height="333" alt="image" src="https://github.com/user-attachments/assets/e424a55b-fec0-4325-9e86-685053a6fe51" />

En este punto también es posible agregar otros elementos como sonidos asociados a los movimientos del persona principal (jugador) o eventos, como el lanzamiento de una bomba del videojuego.

<img width="900" height="213" alt="image" src="https://github.com/user-attachments/assets/237eb101-61e5-453a-b38d-3cd4e81446f5" />

Lo cual se renderizará de la siguiente manera:

<img width="923" height="722" alt="image" src="https://github.com/user-attachments/assets/3abb4b76-2f6c-45c2-806c-cffa2a40b960" />

## Paso 6. Agregando al personaje

Es necesario modificar la estructura del proyecto agregando una nueva carpeta dedntro de *src* para definir objetos adicionales que van a ser empleados en el videojuego (tales como un personaje). Por ello se crea dentro de la nueva carpeta (*gameObjects*) el archivo *Player.js* para definir sus características y comportamiento.

<img width="328" height="312" alt="image" src="https://github.com/user-attachments/assets/b85dfe19-c7d8-4413-b389-522f0b5e9fe5" />

Dicho archivo *Player.js* deberá contener la siguiente estructura general:

<img width="527" height="443" alt="image" src="https://github.com/user-attachments/assets/3f367f17-b1b0-4407-a06b-5c7e68f8434b" />

Donde:
- **constructor()**: Se encarga de inicializar el objetito de tipo de Player.
- **initAnimations()**: Se encarga de la inicialización de los movimientos que puede realizar el jugador.
- **moveLeft(), moveRight(), idle(), jump()**: Contienen la definición de los movimientos del jugador.

A la par de ello, en *Game.js* es necesario que dentro del método *Create()* se incluya un jugador que tendrá características como que no puede atravesar los bloques de piso, y el comportamiento dle jugador (movimientos).


## Paso 7. Agregando estrellas y bombas

Una vez definido al personaje y su comportamiento, ahora toca turno a los objetos que van a interactuar con el personaje, es decir, las estrellas (que recolectará el personaje) y las bombas que buscarán evitar que el personaje cumplá su misión. Estos objetos al igual que los anteriores, serán definidos en *Game.js* dentro del método *Create()*

En el mismo archivo *Game.js*, se definen de la misma manera el comportamiento de cada uno de los objetos agregados en 3 diferentes métodos:
- **collectStar(player, star)**: Indica la manera y lógica con la que el jugador recoge estrellas, suma puntos al score y lanza el evento que libera una bomba cuando cumple la recolección de un lote de 12 estrellas.
- **hitBomb(player, bomb)**: Indica la manera en que termina el juego una vez que el jugador es tocado por una bomba.
- **releaseBomb()**: Indica la manera en que una bomba es liberada
- **update**: Es un ciclo que se ejecuta y lee los movimientos del jugador para ajustar su nueva posición conforme a las teclas presionadas por el usuario del videojuego.
