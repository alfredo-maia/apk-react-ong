 const connection = require('../database/connection');
const { buscaTodos } = require('./OngController');

module.exports = {
    async create(req,res) {

        const {title, description, value} = req.body;

        const ong_id = req.headers.authorization;

        try{

            const [id] = await connection('incidents').insert({
                ong_id,
                title,
                description,
                value
            })

            res.json({id});

       }
        catch(err){
        
            res.json({"Erro na inserção" : err});

        }

    } ,

    async buscaTodos(req, res){
        
        try{

            const {page = 1} = req.query;

            const [count] = await connection('incidents')
                .count();
            
            const casos = await connection('incidents')
                .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
                .limit(5)
                .offset((page - 1 ) * 5)
                .select(['incidents.*'
                         , 'ongs.name'
                         , 'ongs.email'
                         , 'ongs.whatsapp'
                         , 'ongs.city',
                           'ongs.uf']); 

            res.header('X-Total-Count' , count['count(*)']);

            return res.json(casos);

        }catch(err){
            res.json({"Erro na busca dos casos" : err});

        }
        
    } ,
    async deletar_caso(req, res){

        try {

            const {id} = req.params;

            const ong_id = req.headers.authorization;

            const incedent = await connection('incidents')
                .where('id',id)
                .select('ong_id')
                .first();

            if(incedent.ong_id ==! ong_id){
                return res.status(401).json({error : 'Operação não autorizada'});
            }

            await connection('incidents')
               .where('id',id)
               .delete();
            
            return res.status(204).send();

        } catch(err){

            console.log(err);

            res.json({"Erro na deleção dos casos" : err});

        }
    }
}