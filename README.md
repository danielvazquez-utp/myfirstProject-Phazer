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

