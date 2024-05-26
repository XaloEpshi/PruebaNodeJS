var express = require('express')
var cors = require('cors')
var routes = require('./user/routes')
var app = express()


//realice este codigo solo para probar que el servicio fucione atraves de module export app llamare al servidor

/*app.get('/', (req, res)=>{
    return res.send('Servidor corriendo')
})

app.listen(3000, ()=>{
    console.log('Server Running')
})*/

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/api', routes)
module.exports = app;
