// STRETCH
const cars = [
    {
        vin: "1111111111111",
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: "1111133111111",
        make: 'toyota',
        model: 'corolla',
        mileage: 115000,
        title: 'salvaged',
    },
    {
        vin: "1178111111111",
        make: 'ford',
        model: 'focus',
        mileage: 15000,
    },
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}