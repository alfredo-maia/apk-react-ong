
exports.up = function(knex) {
    /*
     Método de criação da tabela 
    */
      return  knex.schema.createTable('incidents', (table) => {
        
        //Auto incremento cria campo id como primary key
         table.increments();

         table.string('title');
         table.string('description').notNullable();
         table.decimal('value').notNullable();
        
         table.string('ong_id').notNullable();

         //Chave estrangeira
         table.foreign('ong_id').references('id').inTable('ongs');
     });
 };
 
 exports.down = function(knex) {
    /*
    Método de rollback da tabela
   */
 
      return knex.schema.dropTable('incidents');
  
 };
 