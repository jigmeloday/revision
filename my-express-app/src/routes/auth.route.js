const router = require('express').Router();
const authService = require('../services/auth.service');

router.post('/register', async(req, res, next) =>{
  try{
    const user = await authService.register(req.body);
    res.status(201).json(user)
  } catch(err){
    next(err)
  }
});

router.post('/login', async(req, res,next) => {
  try{
    const user = await authService.login(req.body);
    res.status(201).json(user)
  } catch(err){
    next(err)
  }
})

module.exports = router;