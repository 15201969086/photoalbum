var data = require('../database/admin');

function Admin() {

}
Admin.login = function(username, password) {
    for (var i=0; i<data.length; i++) {
        if (data[i].username == username && data[i].password == password) {
            return true;
        }
        return false;
    }
};

module.exports = Admin;