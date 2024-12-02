const express = require('express');
const prisma = require('prisma');
const PrismaClient = require("@prisma/client");
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/comment/:userName/:text', function(req, res, next){
  const comment = prisma.Komentarz.create({
      data:{
        user_name:req.user_name,
        comment:req.text,
      }

  })
})

module.exports = router;
