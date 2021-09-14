
const express = require('express')
const router = express.Router()
const { post } = require('../controllers')


router.get('/', (req, res) => {
  const { context } = req 
  res.render('index', context) 
})


router.get('/posts', async (req, res) => {
  try {
    const posts = await post.get()
    res.json({
      confirmation: 'success',
      data: posts
    })
  } catch (error) {
    res.json({
      confirmation: 'fail',
      message: error.message
    })    
  }
})

module.exports = router
