const database = require('../config/database')

module.exports =  {
    getMatch (req,res,next){
        database.query('SELECT * FROM `match` ORDER BY `match`.`updated` DESC',(err,data)=>{
            console.log(err);
            res.json(data);
        })
    },
    getIncoming(req,res,next){
        database.query('SELECT * FROM `incomingmatch` ORDER BY `incomingmatch`.`startTime` ASC',(err,data)=>{
            res.json(data);
        })
    }
}