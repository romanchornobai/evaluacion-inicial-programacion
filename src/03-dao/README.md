Patron DAO

Que significa DAO?
Data Access Object (Objeto de Acceso a Datos).

Cual es su responsabilidad principal?
Encargarse de guardar, leer, modificar y borrar datos, para que la logica de la aplicacion no tenga que meterse en como se guardan.

Que relacion tiene DAO con una base de datos?
Es la clase que habla directamente con la base de datos o con la lista en memoria donde se guardan los datos.

Que operaciones aparecen habitualmente en un DAO?
Las operaciones CRUD normales: selectAll(), selectById(), insert(), update() y delete().

Que diferencia existe entre DAO y Repository?
DAO (COMO acceder a los datos): Esta enfocado a la base de datos y a las tablas. Se preocupa de como se hace la consulta exacta, los inserts o las operaciones tecnicas de la tabla.
Repository (QUE datos necesita la aplicacion): Esta mas enfocado a la logica del programa. Se usa como si fuera una lista de objetos en memoria y pide datos segun lo que necesita la app (por ejemplo buscarAlumnosAprobados), sin importarle si por debajo hay una tabla, dos tablas o una llamada externa.
