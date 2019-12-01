const express = require('express')
const router = express.Router()

const users = require('./controllers/users.js')
const quimicos = require('./controllers/quimicos.js')
const auth = require('./middleware/auth')

router.get('/users', auth, users.getUser)
router.post('/login', users.login)
router.post('/logout', auth, users.logout)
router.post('/users', users.createUser)
router.patch('/users', auth, users.updateUser)
router.delete('/users', auth, users.deleteUser)

router.get('/quimicos/:id', quimicos.getQuimico)
router.get('/quimicos', quimicos.getQuimicos)
router.post('/quimicos', auth, quimicos.createQuimico)
router.patch('/quimicos/:id', auth, quimicos.updateQuimico)
router.delete('/quimicos/:id', auth, quimicos.deleteQuimico)

router.get('*', function(req, res) {
  res.send({
    error: 'This route does not exist, try /users or /quimicos'
  })
})

module.exports = router
