# ejercicio-react-wolox
Ejercicio de React JS con Wolox

- Configuración inicial del proyecto
- Landing Page
    * Maquetado del diseño
    * Estilos
    * Link barra superior, scroll hasta la sección correspondiente
    * Botón "Conocer más"
    * Botón "registrarse" (redirección a la pantalla de Registro)
    * Boton "login" (sin pantalla)
- Register Page
    * MapToEndpointRegistrar  nombre, apellido, país, provincia (Departamento), email, teléfono y contraseña.
    * Validación campos nombre y apellido
    * Componente de listado de paises y provincias
    * Validación email formato válido
    * Validación contraseña alfanumérica
    * Campo para repetir contraseña, no se envia pero validar que sea la misma de la contraseña
    * Checkbox de acepto terminos y condiciones /*LINK TODO*/
    * Usuario Registrado en local storage
    * La próxima vez que se conecte debe ingresar al listado
    * En la landing no debe verse el botón de registro
    * Todos los campos son obligatorios.
    * Submit Button deshabilitado si no cumple
    * Errores de formulario a la vista 

- List Page
    * Listar los elementos retornados por el endpoint con todos sus datos
    * Filtrar por nombre (cambiando al tipear), tipo. Si el filtro está vacio se deben mostrar todos los elementos
    * Ordenar por nombre, asc y desc
    * Mostrar cantidad total de tecnologías mostradas. totalCount
    * Opcion de favorito o me gusta,  que indique si la tecnologia le gusta al usuario. Persistir en localStorage
    * Navbar cantidad de favoritos, si no tiene, no mostrar nada

- React
    * Implementar una solución de routing para poder marcar con un flag rutas privadas y que el usuario no conectado no pueda acceder a ellas. Public/Private Routes
    * Usar un state management a eleccion propia Redux
    * Implementar test de componente de listado con Jest y react testing library.
    * Implementar lazy loading por screen con React.Lazy y React.Suspense.
    * Utilizar react hooks.

    * poner i18N para todos los textos, agregar boton para cambiar idioma
    * Error Boundaries (?
    * Deploy simil productivo
