const CartDao = require("../dao/cartDao");


const cartService = new CartDao();

const getCarts = async(req,res) =>{
    try {
        const data = await cartService.getCarts();
        if(!data){
            return res.status(500).json({
                message: 'something was wrong in GatCarts'
            })
        }
        return res.json({
            message: 'GetCarts',
            carts: data
        })
    } catch (error) {
        console.log("🚀 ~ file: cartManager.js:9 ~ getCarts ~ error:", error)
        
    }
}

const getCartsById = async(req,res) =>{
    try {
        const {cid} = req.params
        const data = await cartService.getCartsById(cid);
        if(!data){
            return res.status(500).json({
                message: 'something was wrong in GetCartsByid'
            })
        }
        return res.json({
            message: 'GetCartById',
            cart: data
        })
    } catch (error) {
        console.log("🚀 ~ file: cartManager.js:37 ~ getCartsById ~ error:", error)
        
        
    }

}

const createCart = async(req,res) =>{
    try {
        const data = await cartService.createCart();
        if(!data){
            return res.status(500).json({
                message: 'something was wrong in createCart'
            })
        }
        return res.json({
            message: 'createCart',
            carts: data
        })
    } catch (error) {
        console.log("🚀 ~ file: cartManager.js:57 ~ createCart ~ error:", error)
        
        
    }
}

const addProduct = async(req,res) =>{
    try {
        const {cid,pid} = req.params
        const data = await cartService.addProduct(cid,pid);
        if(!data){
            return res.status(500).json({
                message: 'something was wrong in AddProduct'
            })
        }
        return res.json({
            message: 'AddProduct',
            cart: data
        })
    } catch (error) {
        console.log("🚀 ~ file: cartManager.js:77 ~ addProduct ~ error:", error)
         
    }

}

const deleteProducts = async(req,res) =>{
    try {
        const {cid,pid} = req.params
        const data = await cartService.deleteProduct(cid,pid);
        if(!data){
            return res.status(500).json({
                message: 'something was wrong in deleteProduct'
            })
        }
        return res.json({
            message: 'deleteProduct',
            cart: data
        })
    } catch (error) {
       console.log("🚀 ~ file: cartManager.js:97 ~ deleteProducts ~ rror:", rror)
       
         
    }

}



module.exports = {getCarts,getCartsById,createCart,addProduct,deleteProducts};