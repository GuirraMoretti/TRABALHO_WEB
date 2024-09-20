var mongoose = require('mongoose')

var produtoSchema = mongoose.Schema(
    {
        nome:{type:String, require:true},
        valor:{type:Number, min:0},
        categoria:{type:String},
        quantidade:{type:Number},
        data:{type:Date, default:Date.now}
    }
)

const Produto = mongoose.model('produto', produtoSchema)

module.exports = Produto