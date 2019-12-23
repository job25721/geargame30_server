const router = require('express').Router()
const controllers  = require('../controllers/index') 


router.post('/auth',controllers.judgeController.auth)

router.get('/getMatch',controllers.matchController.getMatch)
router.get('/incomingMatch',controllers.matchController.getIncoming)

module.exports =  router;