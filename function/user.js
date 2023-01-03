const knex = require("../connection");

function HelloWorld(){
    return 'Hello World Boy from function';
}

async function registerCustomer(customerName,customerAge){

    // buat query, return result
    let result = null;

    try{

        result = await knex.connect('customer').insert({
            name: customerName,
            age: customerAge,
        })

    } catch (error) {
        return '0';
    }

    return '1';

    // 1 row inserted
}

async function selectCustomer(){

    // buat query, return result

    let result = null;

    result = await knex.connect('employees').select('*');

    console.log(result);

    return result;
}

module.exports = {
    HelloWorld,
    selectCustomer,
    registerCustomer
};