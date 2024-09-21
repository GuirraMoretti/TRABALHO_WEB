const express = require('express');
const router = express.Router();

const ProdutoService = require('../domain/services/ProdutoService')


/**
 * @swagger
 * /items/:
 *   get:
 *     summary: Retorna uma lista de items
 *     tags: [items]
 *     responses:
 *       200:
 *         description: Lista de items
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
 * /items/{id}:
 *   get:
 *     summary: Retorna um items específico
 *     tags: [items]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do Item
 *     responses:
 *       200:
 *         description: Item encontrado
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
 *                   example: "Item A"
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
 * /items/:
 *   post:
 *     summary: Cria um novo items
 *     tags: [items]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: "item A"
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
 *         description: item criado
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
 *                   example: "item A"
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
 *         description: item não criado
 */
router.post('/', async (req, res) => {
    let produto = req.body;
    return res.json(await ProdutoService.create(produto));
});


module.exports = router;
