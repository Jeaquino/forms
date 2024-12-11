const fs = require('fs')

const productsController = {
    detail: (req,res,next) => {
        const id = req.params.id;
        const bicicletas = JSON.parse(fs.readFileSync('./data/bicicletas.json', 'utf-8'));
        const bicicleta = bicicletas.find(element => element.id == id);
        console.log(bicicleta);
        if(bicicleta){
            res.render('products/detail',{bicicleta});
        }else{
            res.send("El producto seleccionado no existe");
        }
    },

    all:(req,res,next)=>{
        const {marca,color,velocidades} = req.query;
        
        let bicicletas = JSON.parse(fs.readFileSync('./data/bicicletas.json', 'utf-8'));
        
        if(marca || color || velocidades){
            bicicletas = bicicletas.filter(element => element.marca == marca || element.color == color || element.velocidades == velocidades);        
        }
        
        res.render('products/all',{bicicletas})
    }
}

module.exports = productsController;