
exports.up = function(knex) {
   /*
    Método de criação da tabela 
   */

     return  knex.schema.createTable('ongs', (table) => {

        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf').notNullable();

    });
};

exports.down = function(knex) {
   /*
   Método de rollback da tabela
  */

     return knex.schema.dropTable('ongs');
 
};
