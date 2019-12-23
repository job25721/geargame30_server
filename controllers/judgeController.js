const database = require('../config/database')

module.exports = {
    auth(req,res,next){
        console.log(req.body);
        const username = req.body.user.username
        const password = req.body.user.password
        database.query(`select * from judge where username = '${username}' and password = '${password}'`,(err,data)=>{
            if(data.length > 0) res.send(true)
            else res.send(false)
        })
        
    }
}