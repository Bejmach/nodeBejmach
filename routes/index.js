const express = require('express');
const prisma = require('prisma');
const PrismaClient = require("@prisma/client");
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/comment/create/:userName/:text', function(req, res, next){
  const comment = prisma.Komentarz.create({
      data:{
        user_name:req.user_name,
        comment:req.text,
      }

  })
});

router.get('/api/comment/find/:id', function(req, res, next){
  const comment = prisma.Komentarz.findUnique({
      where:{
        id: req.id,
      }
  })
  console.log(comment);
});

router.get('/api/comment/delete/:id', function(req, res, next){
  const comment = prisma.Komentarz.create({
      where: {
        id: req.id,
      }
  })
});

router.get('/api/comment/update/:id/:userName/:text', function(req, res, next){
  const comment = prisma.Komentarz.create({
      where: {
        if: req.id,
      },
      data:{
        user_name:req.user_name,
        comment:req.text,
      }

  })
});


module.exports = router;
