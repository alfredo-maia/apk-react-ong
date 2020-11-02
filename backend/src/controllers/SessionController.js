const connection = require('../database/connection');

module.exports = {
   
    async create (req,res){
        const {id} = req.body;

        try{
            const ong = await connection('ongs')
                .where('id',id)
                .select('name')
                .first();
            
            console.log(ong);
            
            if(!ong){
                 
                res.status(400).json({error: 'Not found ONG with this ID'});
            }

            return res.json(ong);
         } catch(err){
               res.status(400).json({error: err});
         }
    }
 
}