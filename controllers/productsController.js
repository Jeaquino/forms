const fs = require('fs')

const productsController = {
    detail: (req,res,next) => {
        const id = req.params.id;
        const bicicletas = JSON.parse(fs.readFileSync('./data/bicicletas.json', 'utf-8'));
        const bicicleta = bicicletas.find(element => element.id == id);
        console.log(bicicleta);
        if(bicicleta){
            res.send(bicicleta);
        }else{
            res.send("El producto seleccionado no existe");
        }
    },
    all:(req,res,next)=>{
        const {marca,color,velocidades} = req.query;
        
        const bicicletas = JSON.parse(fs.readFileSync('./data/bicicletas.json', 'utf-8'));
        const resultado = bicicletas.filter(element => element.marca == marca || element.color == color || element.velocidades == velocidades);        
        res.send(resultado)
    }
}

module.exports = productsController;