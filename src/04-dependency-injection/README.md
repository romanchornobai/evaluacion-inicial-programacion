Inyeccion de Dependencias

Que es una dependencia?
Es una clase o servicio que otra clase necesita para poder funcionar bien

Que significa inyectar una dependencia?


Que diferencia existe entre crear una dependencia con new y recibirla mediante el constructor?
Si haces new dentro, la clase esta atada a esa clase concreta para siempre. Si la pasas por el constructor, puedes pasarle cualquier clase que cumpla la misma interfaz sin tocar el codigo original.

Que problema genera un alto acoplamiento?
Que todo el codigo depende mucho entre si y si cambias una clase pequena se te pueden romper otras cinco clases distintas.

Que ventaja proporciona Dependency Injection para realizar pruebas?


Por que este concepto es especialmente importante en frameworks como NestJS?

