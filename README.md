# MercadoLibre Challenge

Proyecto realizado como solución al frontend challenge de MercadoLibre. Consiste principalmente de 3 vistas:

* Buscador: Barra de búsqueda.
* Resultados: Página con hasta 4 posibles resultados. Contiene imagen del producto, nombre, precio y localización.
* Detalles: Página con imagen, título, precio y descripción del producto. Además del botón de compra.

El stack usado está compuesto principalmente por `React` para el front y `Node + Express` para el backend. Además, se utilizaron las siguientes librerías:

* [Axios](https://www.npmjs.com/package/axios): Usada para reemplazar el fetch de JS.
* [React Router](https://reactrouter.com/): Utilizado para habilitar la navegación dinámica del lado del cliente.
* [Sass](https://sass-lang.com/): Para dar estilos a los diferentes componentes genéricos aprovechando la reutilización de variables y mixins ya que varios estilos, como por ejemplo el padding, son estándar a lo largo de la app.

## Funcionamiento
Ingresar el producto a buscar en la barra de búsqueda. Al presionar ENTER o al hacer clic en el botón de buscar, nos dirige a la vista de resultados donde se podrán visualizar hasta 4 productos a la vez. Al hacer clic sobre la imagen o el título de alguno navegaremos hasta la vista de detalles del mismo.

## Live Demo
El proyecto se encuentra deployado en heroku. Para una live demo ingresar a https://meli-challenge-jnieva93.herokuapp.com/

La aplicación  es `responsive`, puede visualizarse correctamente desde un celular, tablet o PC de escritorio.

## Instalación entorno de desarrollo
Si se desea levantar el proyecto en el entorno de desarrollo, ejecutar los siguientes comandos por consola:

```
npm install

npm start

npm run dev-front
```

La app se levantará en http://localhost:3000

## Estructura
La aplicación se divide en dos carpetas: `server` y `client`.

En la carpeta server se encuentran los endpoints que llaman a la API de MercadoLibre. Aquí se formatea la respuesta adaptándola para su uso en el cliente.

Al ser un challenge de frontend, el grueso de la aplicación se encuentra en la carpeta client. Para organizarla se utilizó la siguiente estructura:

### components
Aquí se alojan los componentes genéricos. Dentro de cada carpeta de componente se coloca su código jsx y su hoja de estilos scss. Notar que para mantener su reutilidad son, en su mayoría, presentacionales, y las API calls se realizan fuera de ellos.

### pages
Carpeta con las vistas principales. Cada componente página renderiza los distintos componentes genéricos necesarios para su funcionamiento. Además, se encarga de realizar las API calls para obtener los props que cada componente utiliza.

Notar que solo hay dos páginas porque la principal estaba compuesta únicamente por la barra de búsqueda, la cual aparece en las otras vistas también.

### sass
Contiene los archivos utilizados por las diferentes hojas de estilos scss. `_global.scss` contiene los estilos globales de la app. `_mixins.scss` contiene los estilos que pueden reutilizarse, principalmente para hacer la app responsive. `_variables.scss`, como su nombre lo indica, contiene las variables que se utilizan a lo largo de las hojas.

### utils
Aquí van las funciones que se utilizan en el frontend para formatear datos para
presentarlos de mejor manera. Entre ellas se incluyen funciones para agregar el punto de mil, agregar decimales, manejar monedas, etc.

## Notas
* Se consideró usar react-redux o React ContextAPI pero no hubo necesidad de hacerlo debido a que los componentes reciben muy pocos props y además no están anidados. De este modo se favoreció la reutilidad de los mismos.

* Se consultó por la definición del objeto price que se debía trabajar en ambos endpoints. Se llegó al acuerdo de que la propiedad amount era el precio en enteros y decimals serían solo las cifras decimales.

* Se agregó un componente de error que se muestra cuando el backend arroja uno. El mismo, además de mostrar el código y el mensaje, permite volver a la página principal.

* Para mantener la aplicación responsiva, los diseños del modo celular y tablet son algo diferentes. Para los mismos se tomó inspiración de la página oficial de MercadoLibre. La app en modo escritorio sigue las especificaciones originales que se dieron como consigna.

* Es posible navegar por la aplicación sin utilizar el mouse.
