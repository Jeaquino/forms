const fs = require('fs');

const indexController = {
    home: (req,res,next) => {
        const bicicletas = JSON.parse(fs.readFileSync('./data/bicicletas.json', 'utf-8'));
        res.render('home',{bicicletas})
    }
}
module.exports = indexController;