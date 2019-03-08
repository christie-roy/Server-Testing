const db = require('./dbConfig');

module.exports = {
    insert,
    update,
    remove,
    get,
    findById,
};

async function insert(avenger){
    const [id] = await db('avengers').insert(avenger, 'id');

    return db('avengers')
        .where({ id })
        .first();
}

async function update(update, id, change){
    return null;
}

function remove(id){
    return null;
}

function get() {
    return db('avengers');
}

function findById(id){
    return null;
}