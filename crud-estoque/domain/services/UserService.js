const User = require('../entities/User')

class UserService{

    async create(user) {
        try {
            const newUser = await User.create(user); // Esperar o MongoDB criar o usuário
            return newUser;
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            return null;
        }
    }

    async findById(id) {
        try {
            const user = await User.findById(id);
            return user;
        } catch (error) {
            console.error('Erro ao buscar usuário por ID:', error);
            return null;
        }
    }

    async findAll() {
        try {
            const users = await User.find();
            return users;
        } catch (error) {
            console.error('Erro ao buscar todos os usuários:', error);
            return null;
        }
    }
}

module.exports = UserService