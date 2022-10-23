const ACCESS_TOKEN =
  "ya29.a0Aa4xrXPLtZey3urp_-foFFt8JB4MVPKiz-SglgF5QREPqvfcdUCCY57w8ipPkJzfY9lDkcyLuoCzRtUbZA1yv7XK53e60Hun9EhWtMS0EnZEn27RCQtRWjzcRtdQAahXxIGkgrUmMYAFPbb4QapyuYZumSmRaCgYKATASARESFQEjDvL9S-HQwdaehUeNFB-mJyOA-g0163";
 
const SHEET_ID = '1fmtkDbW7Dd6ZhWICDMC4SwlY__eXp16l7nO6AZhQRT0';



function onRegistrarEmprendedor() {

  //Obtenemos los datos del formulario
  const Rubro = document.getElementById('Rubro').value;
  const NombreyApellido = document.getElementById('Nombre y Apellido').value;
  const RUC = document.getElementById('RUC').value;
  const Númerodecontacto = document.getElementById('Númerodecontacto').value;
  
  //Creamos el JSON que espera nuestra API
  let data = {};
  
  let values = [];
  
  let fila = [Rubro, NombreyApellido, RUC, Númerodecontacto];

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
  document.getElementById('NombreyApellido').value = "";
  document.getElementById('RUC').value = "";
  document.getElementById('Númerodecontacto').value = "";
};