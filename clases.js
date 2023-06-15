/**
 * Clase Usuario representa a un usuario de la aplicación de cine.
 * @class
 */
class Usuario {
    /**
     * Crea una instancia de la clase Usuario.
     * @constructor
     * @param {string} nombre - El nombre del usuario.
     * @param {string} email - El correo electrónico del usuario.
     */
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }

    /**
     * Obtiene el nombre del usuario.
     * @returns {string} El nombre del usuario.
     */
    getNombre() {
        return this.nombre;
    }

    /**
     * Obtiene el correo electrónico del usuario.
     * @returns {string} El correo electrónico del usuario.
     */
    getEmail() {
        return this.email;
    }

    /**
     * Realiza una reserva de entradas para una película.
     * @param {Pelicula} pelicula - La película para la reserva.
     * @param {number} cantidad - El número de entradas a reservar.
     * @returns {Reserva} La reserva realizada.
     */
    realizarReserva(pelicula, cantidad) {
        // Lógica de reserva
        const reserva = new Reserva(this, pelicula, cantidad);
        // ...
        return reserva;
    }
}
  
/**
 * Clase Reserva representa una reserva de entradas para una película.
 * @class
 */
class Reserva {
    /**
     * Crea una instancia de la clase Reserva.
     * @constructor
     * @param {Usuario} usuario - El usuario que realiza la reserva.
     * @param {Pelicula} pelicula - La película de la reserva.
     * @param {number} cantidad - El número de entradas reservadas.
     */
    constructor(usuario, pelicula, cantidad) {
        this.usuario = usuario;
        this.pelicula = pelicula;
        this.cantidad = cantidad;
    }

    /**
     * Obtiene el usuario de la reserva.
     * @returns {Usuario} El usuario de la reserva.
     */
    getUsuario() {
        return this.usuario;
    }

    /**
     * Obtiene la película de la reserva.
     * @returns {Pelicula} La película de la reserva.
     */
    getPelicula() {
        return this.pelicula;
    }

    /**
     * Obtiene la cantidad de entradas reservadas.
     * @returns {number} La cantidad de entradas reservadas.
     */
    getCantidad() {
        return this.cantidad;
    }
}
  
  /**
   * Clase Pelicula representa una película en la aplicación de cine.
   * @class
   */
class Pelicula {
    /**
     * Crea una instancia de la clase Pelicula.
     * @constructor
     * @param {string} titulo - El título de la película.
     * @param {string} genero - El género de la película.
     * @param {number} duracion - La duración de la película en minutos.
     */
    constructor(titulo, genero, duracion) {
        this.titulo = titulo;
        this.genero = genero;
        this.duracion = duracion;
    }

    /**
     * Obtiene el título de la película.
     * @returns {string} El título de la película.
     */
    getTitulo() {
        return this.titulo;
    }

    /**
     * Obtiene el género de la película.
     * @returns {string} El género de la película.
     */
    getGenero() {
        return this.genero;
    }

    /**
     * Obtiene la duración de la película en minutos.
     * @returns {number} La duración de la película en minutos.
     */
    getDuracion() {
        return this.duracion;
    }
}