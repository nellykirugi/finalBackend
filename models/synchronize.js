const User = require('./user')
const Message = require('./message')
const Product = require('./product')
const sequelize = require('./index')

const synchronizeModels = async () => {
    try {
        
        await sequelize.sync({ alter: true });
        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.log(error.message)
    }
}

// synchronizeModels()