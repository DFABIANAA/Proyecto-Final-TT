const ACCESS_TOKEN =
  "1fmtkDbW7Dd6ZhWICDMC4SwlY__eXp16l7nO6AZhQRT0";
 
const SHEET_ID = '1fmtkDbW7Dd6ZhWICDMC4SwlY__eXp16l7nO6AZhQRT0';

function onRegistrarEmprendedor() {

  //Obtenemos los datos del formulario
  const Rubro = document.getElementById('Rubro').value;
  const Sector de Actividad = document.getElementById('sector-actividad').value;
  const Nombre y Apellido = document.getElementById('Nombre y Apellido').value;
  const RUC = document.getElementById('RUC').value;
  const Número de contacto = document.getElementById('Número de contacto').value;
  
  //Creamos el JSON que espera nuestra API
  let data = {};
  
  let values = [];
  
  let fila = [Rubro, Sector de Actividad, Nombre y Apellido, RUC, Número de contacto];

  values.push(fila);
  
  //Verificar que coincida con el nombre de la hoja de nuestro sheet
  data.range = "hojaEmprendedores";
  
  data.majorDimension = "ROWS";
  data.values = values;

  //Invocamos al método POST de la API
  fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/hojaEmprendedores:append?valueInputOption=USER_ENTERED`,
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify(data)
    }
  ).then(function (response) {
    response.json().then(function (data) {

    });
  });

  //Limpiamos los campos del formulario para permitir cargar un nuevo emprendedor
  document.getElementById('Nombre y Apellido').value = "";
  document.getElementById('RUC').valueAsDate = new Date();
  document.getElementById('Númerode contacto').value = "";
};