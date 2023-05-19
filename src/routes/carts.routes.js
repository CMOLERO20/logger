const { Router } =  require("express");   
const {getCarts,getCartsById,createCart,addProduct,deleteProducts} = require('../controllers/cartController')

const routerCarts = Router();


routerCarts.get('/', getCarts);
routerCarts.post('/', createCart);
routerCarts.get('/:cid', getCartsById);
routerCarts.post('/:cid/product/:pid', addProduct);
routerCarts.delete('/:cid/product/:pid', deleteProducts);

module.exports = routerCarts;