const knex = require("../connection");

//INSERT
async function regCust(userFname, userLname, userEmail, userPhone) {
    let result = null;

    try {
        result = await knex.connect('user').insert({
            first_name: userFname,
            last_name: userLname,
            email: userEmail,
            phone: userPhone,
        });

        console.log(result);
    } catch (error) {
        console.log(error);
    }
    return result;
}

//SELECT
async function selectCust() {
    let result = null;

    try {
        result = await knex.connect('user').select('id', 'first_name', 'last_name', 'phone', 'email').from('user');

        console.log(result);
    } catch (error) {
        console.log(error);
    }
    return result;
}

//SELECT SPECIFIC CUSTOMER
async function selectspeccust(id) {
    let result = null;

    try {
        result = await knex.connect('user').select('id', 'first_name', 'last_name', 'phone', 'email').from('user').where('id', '=', id);

        console.log(result);
    } catch (error) {
        console.log(error);
    }
    return result;
}

//UPDATE
async function updateCust(id, userFname, userLname, userEmail, userPhone) {
    let result = null;

    try {
        result = await knex.connect('user').where('id', '=', id).update({
            First_name: userFname,
            Last_name: userLname,
            Email: userEmail,
            Phone: userPhone
        });

        console.log(result);
    } catch (error) {
        console.log(error);
    }
    return result;
}

//DELETE
async function deleteCust(id) {
    let result = null;

    try {
        result = await knex.connect('user').where('id', id).del()
        console.log(result);
    } catch (error) {
        console.log(error);
    }
    return result;
}

module.exports = {
    regCust,
    selectCust,
    selectspeccust,
    updateCust,
    deleteCust
};