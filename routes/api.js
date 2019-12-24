const router = require('express').Router()
const controllers  = require('../controllers/index') 


router.post('/auth',controllers.judgeController.auth)
router.post('/addMatch',controllers.matchController.addMatch)

router.get('/getMatch',controllers.matchController.getMatch)
router.get('/incomingMatch',controllers.matchController.getIncoming)
router.get('/getMatchbyUser/:id',controllers.judgeController.getMatchbyUser)
router.get('/getScore/:sport/:Day',controllers.matchController.getScorebyFilter)
module.exports =  router;