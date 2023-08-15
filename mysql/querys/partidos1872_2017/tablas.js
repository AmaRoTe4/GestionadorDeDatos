//falta crear las relaciones con los id

const crearTablaEquipos = `
    CREATE TABLE equipos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
    )
`;

//ver si agregamos el pais
const crearTablaPartidos = `
    CREATE TABLE partidos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        fecha VARCHAR(10) NOT NULL,
        id_equipo_local INT NOT NULL,
        id_equipo_visitante INT NOT NULL,
        gol_local INT NOT NULL,
        gol_visitante INT NOT NULL,
        neutralidad BOOLEAN NOT NULL,
        id_ciudad_disputa INT NOT NULL,
        FOREIGN KEY (id_equipo_local) REFERENCES equipos(id),
        FOREIGN KEY (id_equipo_visitante) REFERENCES equipos(id),
        FOREIGN KEY (id_ciudad_disputa) REFERENCES ciudades(id),
        CONSTRAINT chk_equipos_different CHECK (id_equipo_local != id_equipo_visitante)
    )
`;

const crearTablaTorneos = `
    CREATE TABLE torneos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
    )
`;

const crearTablaPaices = `
    CREATE TABLE paices (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
    )
`;

const crearTablaCiudades = `
    CREATE TABLE ciudades (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
        id_pais INT NOT NULL,
        FOREIGN KEY (id_pais) REFERENCES paices(id),
    )
`;

const crearTablaPaicesDondeSeJuegoLosTorneos = `
    CREATE TABLE paices_torneos (
        id_torneo INT NOT NULL,
        id_pais INT NOT NULL,
        FOREIGN KEY (id_torneo) REFERENCES torneos(id),
        FOREIGN KEY (id_pais) REFERENCES paices(id),
        CONSTRAINT pk_partidos PRIMARY KEY (id_torneo, id_pais)
    )
`;

const crearTablaCiudadDondeSeJuegoLosTorneos = `
    CREATE TABLE paices_torneos (
        id_torneo INT NOT NULL,
        id_ciudad INT NOT NULL,
        FOREIGN KEY (id_torneo) REFERENCES torneos(id),
        FOREIGN KEY (id_ciudad) REFERENCES ciudades(id),
        CONSTRAINT pk_partidos PRIMARY KEY (id_torneo, id_ciudad)
    )
`;

export const crearTabla = {
    crearTablaEquipos,
    crearTablaCiudadDondeSeJuegoLosTorneos,
    crearTablaCiudades,
    crearTablaEquipos,
    crearTablaPaicesDondeSeJuegoLosTorneos,
    crearTablaPaices,
    crearTablaTorneos,
    crearTablaPartidos
}