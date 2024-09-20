const Produto = require('../entities/Produto')

class ProdutoService{

    static async create(produto) {
        try {
            const newProduto = await Produto.create(produto); // Esperar o MongoDB criar o usuário
            return newProduto;
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            return null;
        }
    }

    static async findById(id) {
        try {
            const produto = await Produto.findById(id);
            return produto;
        } catch (error) {
            console.error('Erro ao buscar usuário por ID:', error);
            return null;
        }
    }

    static async findAll() {
        try {
            const produto = await Produto.find();
            return produto;
        } catch (error) {
            console.error('Erro ao buscar todos os usuários:', error);
            return null;
        }
    }
}

module.exports = ProdutoService