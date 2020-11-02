const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

    async create(req,res) {
          
        //Destruturando a requisição
        const {name , email, whatsapp, city, uf} = req.body;

        data = req.body;

        console.log(data);
        
        //Gerando ID
        const id = crypto.randomBytes(4).toString('HEX');
        
        try {
            
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

            return res.json({id});

        }catch(err){

            return res.json({"Error" : "Não foi possível inserir os dados"});

        }

    }
    ,

    async buscaTodos(req,res) {
        
        try {

            const ongs = await connection('ongs').select('*');

            return res.json(ongs);

        } catch(err){

            return res.json({"Erro" : "Busca com falha"});

        }
    }
}
