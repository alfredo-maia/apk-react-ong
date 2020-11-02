const connection = require('../database/connection');

module.exports = {

    async busca_unica(req,res){

        try{

            const ong_id = req.headers.authorization;

            const incidents = await connection('incidents')
               .where('ong_id',ong_id)
               .select('*');

            res.json(incidents);

        }catch(err){
            console.log(err);

            res.status(404).json({error : "Caso não encontrado"});
        }
    }
}