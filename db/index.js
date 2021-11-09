const pg = require('pg');
const client  = new pg.Client('postgres://localhost/todo');

const setUp = async() => {
    try {
        await client.connect();
        console.log('connected to database')
    }
    catch(ex){
        console.log(ex)
    }
}
module.exports = {client}

setUp();