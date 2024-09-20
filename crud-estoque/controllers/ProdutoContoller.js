const express = require('express');
const router = express.Router();

const ProdutoService = require('../domain/services/ProdutoService')


/**
 * @swagger
 * /produtos/:
 *   get:
 *     summary: Retorna uma lista de produtos
 *     tags: [Produtos]
 *     responses:
 *       200:
 *         description: Lista de produtos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   __id:
 *                     type: string
 *                     example: 66ecafd0be031f5ab155b2d0
 *                   nome:
 *                     type: string
 *                     example: "Produto A"
 *                   valor:
 *                     type: number
 *                     example: 49.99
 *                   categoria:
 *                     type: string
 *                     example: "Eletrônicos"
 *                   quantidade:
 *                     type: number
 *                     example: 20
 *                   data:
 *                     type: string
 *                     format: date
 *                     example: "2024-09-18T12:34:56Z"
 */
router.get('/', async (req, res) => {
    return res.json(await ProdutoService.findAll());
});

/**
 * @swagger
 * /produtos/{id}:
 *   get:
 *     summary: Retorna um produto específico
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do produto
 *     responses:
 *       200:
 *         description: Produto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 __id:
 *                   type: string
 *                   example: 66ecafd0be031f5ab155b2d0
 *                 nome:
 *                   type: string
 *                   example: "Produto A"
 *                 valor:
 *                   type: number
 *                   example: 49.99
 *                 categoria:
 *                   type: string
 *                   example: "Eletrônicos"
 *                 quantidade:
 *                   type: number
 *                   example: 20
 *                 data:
 *                   type: string
 *                   format: date
 *                   example: "2024-09-18T12:34:56Z"
 */
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    res.json(await ProdutoService.findById(id));
});

/**
 * @swagger
 * /produtos/:
 *   post:
 *     summary: Cria um novo produto
 *     tags: [Produtos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: "Produto A"
 *               valor:
 *                 type: number
 *                 example: 49.99
 *               categoria:
 *                 type: string
 *                 example: "Eletrônicos"
 *               quantidade:
 *                 type: number
 *                 example: 20
 *     responses:
 *       200:
 *         description: Produto criado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 __id:
 *                   type: string
 *                   example: 66ecafd0be031f5ab155b2d0
 *                 nome:
 *                   type: string
 *                   example: "Produto A"
 *                 valor:
 *                   type: number
 *                   example: 49.99
 *                 categoria:
 *                   type: string
 *                   example: "Eletrônicos"
 *                 quantidade:
 *                   type: number
 *                   example: 20
 *       404:
 *         description: Produto não criado
 */
router.post('/', async (req, res) => {
    let produto = req.body;
    return res.json(await ProdutoService.create(produto));
});


module.exports = router;
