const USER_CONTROLLER = require('../controllers/UserController')

module.exports = (app) => {
    app.get('/usuario', USER_CONTROLLER.getAll);
    app.post('/usuario', USER_CONTROLLER.create);
}