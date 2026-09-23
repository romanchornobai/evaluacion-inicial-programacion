Patron Singleton

Que problema intenta resolver Singleton?
Evitar que se creen muchos objetos de la misma clase cuando solo necesitamos uno para toda la aplicacion.

Por que suele utilizarse un constructor private?
Para que nadie pueda hacer new MiClase() desde fuera y obligar a usar el metodo que te da la instancia.

Como se obtiene una instancia de la clase?
Llamando al metodo estatico getInstance(). Este metodo mira si ya se habia creado el objeto antes; si no esta creado lo crea, y si ya existia te devuelve ese mismo.

Que ocurriria si pudieramos utilizar new libremente?
Que tendriamos copias distintas del objeto en memoria y si guardamos datos en uno, los demas no se enteran.

Pon un ejemplo real donde utilizarias Singleton.
En la conexion a la base de datos o en una clase para guardar la configuracion general de la app.

Que inconveniente puede tener abusar de Singleton?
Que al ser accesible desde cualquier parte, crea dependencias ocultas y luego cuesta mucho hacer pruebas unitarias o cambiar cosas sin romper otra parte.
