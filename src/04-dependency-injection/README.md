Inyeccion de Dependencias

Que es una dependencia?
Es una clase o servicio que otra clase necesita para poder funcionar bien (por ejemplo, si un servicio de usuarios necesita otro para enviar correos).

Que significa inyectar una dependencia?
Pasarle a la clase el objeto que necesita desde fuera (por el constructor) en vez de que la propia clase haga el new por su cuenta.

Que diferencia existe entre crear una dependencia con new y recibirla mediante el constructor?
Si haces new dentro, la clase esta atada a esa clase concreta para siempre. Si la pasas por el constructor, puedes pasarle cualquier clase que cumpla la misma interfaz sin tocar el codigo original.

Que problema genera un alto acoplamiento?
Que todo el codigo depende mucho entre si y si cambias una clase pequena se te pueden romper otras cinco clases distintas.

Que ventaja proporciona Dependency Injection para realizar pruebas?
Que para los tests puedes pasarle una clase falsa (mock) por el constructor para probar la logica sin enviar correos reales ni tocar bases de datos.

Por que este concepto es especialmente importante en frameworks como NestJS?
Porque NestJS funciona practicamente entero asi: marcas las clases con @Injectable() y el propio Nest se encarga de crear las instancias e inyectarlas en los constructores donde hagan falta.
