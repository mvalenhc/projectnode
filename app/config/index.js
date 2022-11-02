const path = require('path')
const dotenv = require('dotenv').config({
    path : path.resolve(__dirname,`enviroment/${process.env.ENTORNO}.env`)
})

console.log(process.env.ENTORNO);

module.exports = callbackPort = ()=>{
    let men = `se esta ejecutando en el puerto http://localhost:${port}`;
    switch (process.env.ENTORNO) {
        
        case 'qa':
            console.log(men.bgYellow);
        break;
        case 'produccion':
            console.log(men.bgRed);
        break;
        case 'developer':
            console.log(men.bgGreen);
        break;
    
        default:
            console.log(men.rainbow);
            break;
    }
}