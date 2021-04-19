const express = require('express');
const furnitures = require('../seeds/furnitures');

const router = express.Router();

//display all products

router.get('/', (request, response) => {

  response.render('pages/index', {pageTitle: "Smile Furnitures"});
})

//Tony's code : display single product

router.get('/:title', (request, response) => {
  
  const furniture = furnitures.find(function(item){
    return (request.params.title).toLowerCase() === (item.title).toLowerCase()
  })

  if (!furniture) {
    response.render('pages/404', {pageTitle: "Smile Furnitures"});
    
  }

  response.render('pages/singleitem', {
    pageTitle: "Smile Furnitures" ,
    furniture:furniture
  });
})

module.exports = router;