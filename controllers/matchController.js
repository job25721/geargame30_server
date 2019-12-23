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
    },
    addMatch(req,res,next){
        const data = req.body.data;
        console.log(data);
        database.query(`select judgeID from judge where username = '${data.judgeID.username}'`,(err,judge)=>{
            if(judge[0].judgeID  === undefined) {
                console.log("session expired");
            }
            else {
                let id = judge[0].judgeID
                database.query(`select fieldNumber from field where '${data.sportField}' = fieldName`,(err,fieldNum)=>{
                    let field
                    if(fieldNum.length < 0) field = null
                    else field = parseInt(fieldNum[0].fieldNumber) 
                    database.query('INSERT INTO `match`(`judgeID`, `nameTeam1`, `nameTeam2`, `nameTeam3`, `scoreTeam1`, `scoreTeam2`, `scoreTeam3`, `team1Player`, `team2Player`, `team3Player`, `sportType`, `sportCategory`, `fieldNumber`, `matchStartTime`, `matchEndTime`) VALUES ('+id+',"'+data.nameTeam1+'","'+data.nameTeam2+'","'+data.nameTeam3+'","'+data.scoreTeam1+'" ,"'+data.scoreTeam2+'","'+data.scoreTeam3+'","'+data.player1+'","'+data.player2+'","'+data.player3+'","'+data.sportType+'","'+data.sportCategory+'",'+field+',"'+data.startTime+'" ,"'+data.endTime+'")'
                    )
                })
            }
                       
        })
        
        
    }
}