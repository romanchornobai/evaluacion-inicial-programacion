Patron Factory

Que problema resuelve Factory?
Nos ahorra tener que hacer new de clases concretas por todos lados cuando tenemos varias opciones que hacen cosas parecidas.

Que ventaja tiene respecto a utilizar new directamente por toda la aplicacion?
Que si cambia el constructor o la forma de crear un objeto, solo lo cambias dentro de la Factory y no tienes que buscar por 20 archivos para arreglar los new.

Que tendria que ocurrir si manana anadimos WhatsAppNotification?
Creamos la clase WhatsAppNotification con la misma interfaz y en el Factory anadimos otro else if para WhatsApp. El resto del programa sigue funcionando igual.

Quien tiene la responsabilidad de crear los objetos?
La Factory. El resto del codigo solo le pide el objeto y se despreocupa de como se crea.

Que ventaja proporciona Factory respecto al acoplamiento?
Reduce el acoplamiento porque el programa trabaja con la interfaz y no depende directamente de las clases finales.
