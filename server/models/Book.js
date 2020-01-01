const { Model, snakeCaseMappers } = require("objection");

class Book extends Model {

    static get tableName(){
        return "books";
    }

    static get relationMappings() {

        const User = require("./User");

        return {

            emails: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: "books.userId",
                    to: "users.id"
                }
            }
        };
    }
}

module.exports = Book;