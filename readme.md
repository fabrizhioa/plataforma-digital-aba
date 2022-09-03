# # Title

Pagina de perfil en ejercicio de prueba

Se utiliza el stack MERN: 

- **Mongodb** - Mongoose para conexiones con la base de datos
- **Express** - Servidor local echo en nodejs
- - *cors* - para control de solicitudes locales
- - *express-fileupload* - para subida de archivos desde express
- **React** - Framework de frontend para control de datos en cliente
- - *React Icons* - Paquete de iconos disponibles para react
- - *TailwindCSS* - Framework CSS para crear y desarrollar sitios
- **Nodejs** - Motor de javascript que permite la ejecucion del servidor y otras instancias
- - *Babel* - Compilador de Javascript utilizado para compilar react 
- - *Postcss* - Compilador de CSS utilizado para preprocesar TailwindCSS
- - *Nodemon* - Escuchante de actualizaciones de servidor
- - *Webpack* - Empaquetador de modulos
- - *Axios* - Fetch de forma actualizacion para iterar entre cliente y servidor

# # Preparar mongodb

- Para hacer prueba de ello necesita crear una database en mongodb llamada mern-test y una coleccion de documentos con la siguiente jerarquia

*Ejemplo*:


userName: "fabrizhioda" (string)
firstName: "Fabrizhio" (string)
lastName: "Al chariti" (string)
birthDate: 1999-01-22T04:00:00.000+00:00 (date)
email: "fabrizhioal.2011@gmail.com" (string)
password: "testing" (string)
phone: "584121075052" (Number)
userPhoto:"https://www.elcorreo.com/xlsemanal/wp-content/uploads/sites/5/2022/05/bill-gates-antivacunas-jefrey-epstein-50.jpg" (string)

**Nota**: Cambiar URI mongo en database.js dentro de la carpeta server
  
# # Correr

Correr comando:

~~~
npm start
~~~

abrir en navegador: http:localhost:3001
