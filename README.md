Evaluacion inicial - Patrones TypeScript

Nombre: Roman  
Apellidos: Chornobai  
Curso: 2º Grado Superior  
Fecha: 23/09/2026  

| Patron | Implementado | Entendido |
| --- | --- | --- |
| Singleton | Si | Si |
| Factory | Si | Si |
| DAO | Si | Si |
| Dependency Injection | Si | Si |

Preguntas finales

Que patron te ha resultado mas sencillo?
El Singleton, porque solo es poner el constructor en privado y guardar la instancia en una variable estatica.

Cual te ha resultado mas complicado?
El DAO, sobre todo entender bien en que se diferencia con el patron Repository a nivel teorico.

Cual utilizarias con mas frecuencia?
Dependency Injection, porque pasar las clases por el constructor hace que el codigo sea mucho mas ordenado y facil de cambiar o probar.

Que patron o concepto crees que sera especialmente util en desarrollo movil?
Singleton para guardar configuraciones o sesiones del usuario en la app, y Factory para crear distintas pantallas o tipos de tarjetas en la interfaz.

Que patron crees que aparecera con frecuencia cuando trabajemos con NestJS?
Dependency Injection, porque NestJS se basa en crear servicios con @Injectable() y meterlos en los controladores por el constructor.
