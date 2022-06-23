module.exports = (sequelize, Sequelize) => {
    const USER = sequelize.define("usuario", {
        nome: { type: Sequelize.STRING },
        idade: { type: Sequelize.INTEGER }
    })

    return USER;
}