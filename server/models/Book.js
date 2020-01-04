const { Model, snakeCaseMappers } = require("objection");

class Book extends Model {

    static tableName = "books";

    static get relationMappings() {

        const User = require("./User");

        return {

            books: {
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