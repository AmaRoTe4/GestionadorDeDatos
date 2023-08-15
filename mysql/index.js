import { database } from "./connections.js";

const { connection, connect, endconnect , query } = database();

//aca ponemos el nombre de la tabla
const conn = connection("Partidos1872_2017");

//inicialisa la conexion
connect(conn);

//query(conn , query)

//cierra la conexion
endconnect(conn);
