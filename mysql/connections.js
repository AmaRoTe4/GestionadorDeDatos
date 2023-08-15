import mysql from "mysql2";

export const database = () => {
  const connection = (database) => {
    return mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "",
      database,
    });
  };

  const connect = (conn) =>
    conn.connect((err) => {
      if (err) {
        console.error("Error al conectar:", err);
      } else {
        console.log("Conexión exitosa a la base de datos.");
      }
    });

  const endconnect = (conn) =>
    conn.end((err) => {
      if (err) {
        console.error("Error al desconectar:", err);
      } else {
        console.log("conexion cerrada.");
      }
    });

  const query = (conn, query) =>
    conn.query(query, (err, results, fields) => {
      if (err) {
        console.error("Error en la consulta:", err);
      } else {
        console.log("OK");
        console.log(fields);
        return results;
      }
    });

  return {
    query,
    connection,
    connect,
    endconnect,
  };
};
