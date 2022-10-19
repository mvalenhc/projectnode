const express = require('express')
const server = express()
const dotenv = require('dotenv')
dotenv.config();
const port = process.env.PORT
const encabezado = process.env.ENCABEZADO
const nombre = process.env.NOMBRE
const tarjeta = process.env.TARJETA
const telefono = process.env.TELEFONO
const imagen = process.env.IMG

server.get('/', (req, res) => {
    res.send(`<center><table border=1>

    <tr>
  
      <th colspan="3">${encabezado}</th>
  
    </tr>
  
    <tr>
        <td>${nombre}</td>
        <td>${tarjeta}</td>
        <td>${telefono}</td>
  
    </tr>
    <tr>
        <td colspan = "3"><img src="${process.env.IMG}"></td>
  
    </tr>


  
  </table></center>`)
})


server.listen(port, () => {
    console.log(`estoy en el puerto ${port}`);
})