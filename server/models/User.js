const { Model, snakeCaseMappers } = require("objection");

class User extends Model{

    static get tableName(){
        return "users";
    }

    static get relationMappings() {

        const Book = require("./Book");

        return {

            books: {
                relation: Model.HasManyRelation,
                modelClass: Book,
                join: {
                    from: "users.id",
                    to: "books.userId"
                }
            }
        };
    }
}


module.exports = User;