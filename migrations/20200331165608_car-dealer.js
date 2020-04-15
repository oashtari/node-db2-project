
exports.up = function (knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();

        tbl.string('VIN', 128)
            .notNullable()
            .unique()
            .index()

        tbl.string('make', 128)
            .notNullable()
            .index()

        tbl.string('model', 128)
            .notNullable()
            .index()

        tbl.float('mileage')
            .notNullable()
            .index()

        tbl.string('transmission_type', 128)

        tbl.string('title_status', 128)
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cars')
};
