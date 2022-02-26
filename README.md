# _PUBLINOTE_

### Proyecto _PUBLINOTE_ desarrollado en NODEJS, EXPRESS y MONGODB ATLAS.

_En este proyecto puedes pubiicar notas de uso personal, en donde puedes poner el Titulo de la nota que deseas crear, una breve descripcion de lo que vas escribir, 
y el contenido de la nota, adicional de tu nombre como author de la nota._

_**Acá unas capturas reales del proyecto con algunas notas publicadas:**_

![Pagina principal](/detail/cap1.jpeg "Pagina de inicio")

![Notas publicadas](/detail/cap2.jpeg "Pagina de notas publicadas")

![Nueva nota](/detail/cap3.jpeg "Pagina de nueva nota")

![Pagina de vista previa](/detail/cap4.jpeg "Detalle de la nota")

![Pagina de editar y borrar](/detail/cap5.jpeg "Pagina de editar y borrar")

![About](/detail/cap6.jpeg "Pagina de About")

_**Implementacines del proyecto**_

- Conexión a base de datos MONGODB ATLAS. Se accedió mediante el navegador y NO en local.
- Se implementó el Schema de la coleccion en un model.
- Un controlador donde se van desarrollando los verbos GET, POST, PUT, DELETE.
- Manejo de Rutas para diferentes vistas para el usuario final.
- Interaccion con eventos del DOM donde se asigna el evento click al boton eliminar y con fetch() obtener el id del registro y poder eliminarlo.
- Interaccion con eventos del DOM donde se asigna el evento submit del formulario y así poder actualizar el dato que necesitamos, para eso también se usó fetch() para obtener el id del registro a actualizar.
- Se implementó EJS para inyectar codigo javascript en documento html.
- Se implementó un framework CSS para el diseño del proyecto: [UI-Kit](https://getuikit.com/)

> Considero este proyecto el más importante que he creado en mi camino de _Desarrollador Web_. Este Proyecto lo imaginé en mi tiempo libre, y a medida que lo iba imaginando, 
> analizaba como lo iba a estructurar y a como manejar las rutas con las vistas para un usuario final. Finalmente este proyecto fue el resultado.
- Ulises AFC'dev.
