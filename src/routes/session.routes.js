const { Router } = require("express");
const { find , userModel } = require("../model/user.model");
const productModel = require('../model/products.model')
const adminMdw = require("../middleware/admin.middleware");
const {createHash, isValidPass } = require("../utils/bcrypt");
const passport = require("passport");
const {generateJWT }= require("../utils/jwt")
const {logOut, login, passportCall} = require('../controllers/sessionController')

const router = Router();

router.get("/logout", logOut);

router.post("/login", passport.authenticate('login',{failureRedirect:'/api/session/fail_login'}), login);

router.get("/current",  passportCall('jwt'), async (req, res) => {
    console.log(" VALIDANDO REQ", req.user);
    return res.json({ message: `jwt en las cookies` });
  }
);

router.get('/fail_login', (req,res)=>{ res.send({error:"Failed login"})
  });
  
router.post('/register',passport.authenticate('register',{failureRedirect:'/fail_register'}), async(req,res)=>{
res.render('login');
})

router.get('/fail_register',async(req,res)=>{
  console.log("Failed Strategy");
  res.send({error:"Failed"})
})

router.get('/github',passport.authenticate('github',{scope:['user,email']}), async(req,res)=>{

})

router.get('/githubcallback', passport.authenticate('github',{failureRedirect:'/login'}),async(req,res)=>{
  req.session.user = req.user;
  console.log('login succesfull');
 
  const products = await productModel.find({}).lean();
  
  return res.render("products", { productos: products,
    first_name: req.session.user.first_name,
   
    
    rol: "usuario", 
    
  });


})


module.exports = router;