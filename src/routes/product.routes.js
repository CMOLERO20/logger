const { Router } =  require("express");   
const routerProducts = Router();

const {getProducts,getProductById,addProduct,deleteProduct,updateProduct} = require("../controllers/productController")

routerProducts.get('/', getProducts)

routerProducts.get('/:pid', getProductById );

routerProducts.post('/', addProduct)

routerProducts.put('/:pid', updateProduct)

routerProducts.delete('/:pid',deleteProduct)


module.exports = routerProducts;