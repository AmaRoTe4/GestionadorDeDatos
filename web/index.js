let newJson = [];

function parseCSV(text) {
  // Obtenemos las lineas del texto
  let lines = text.replace(/\r/g, "").split("\n");
  return lines.map((line) => {
    // Por cada linea obtenemos los valores
    let values = line.split(",");
    return values;
  });
}

function reverseMatrix(matrix) {
  let output = [];
  // Por cada fila
  matrix.forEach((values, row) => {
    // Vemos los valores y su posicion
    values.forEach((value, col) => {
      // Si la posición aún no fue creada
      if (output[col] === undefined) output[col] = [];
      output[col][row] = value;
    });
  });
  return output;
}

function readFile(evt) {
  let file = evt.target.files[0];
  let reader = new FileReader();
  reader.readAsText(file , 'utf8');
  reader.onload = (e) => {
    // Cuando el archivo se terminó de cargar
    let lines = parseCSV(e.target.result);
    let output = reverseMatrix(lines);
    listarEnJson(output);
  };
  // Leemos el contenido del archivo seleccionado
  reader.readAsBinaryString(file);
}

const listarEnJson = (data) => {
  let json = [];
  
  data.forEach((n , y) => {
    const name = n.shift();
    n.forEach((m , i) => {
      json[i] = {...json[i] , [name]: m};
    });
  })

  console.log(json)
};

document.getElementById("file").addEventListener("change", readFile , false);
