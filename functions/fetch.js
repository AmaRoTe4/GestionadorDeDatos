export const fetch = async (url  , method , body = {}) => {
  const resultado = await fetch(url , {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body,
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));

  if (resultado?.error) {
    console.log(resultado?.error);
    return resultado;
  }
  return resultado;
};
