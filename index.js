const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.listen(process.env.PORT || 3000, () => {
    console.log('Super port 3000');
});

app.post('/comserv', (req, res) => {
    console.log('received');
    var a = req.body.choiceCom;
    var b = req.body.total;
    
    res.status(200).json( {tot : b , sel : a });
    res.end();      
    });

app.post('/resserv', (req, res) => {
    console.log('received');

    var choiceRes = req.body.choiceRes;
    var apptsRes = req.body.apptsRes;
    var basesRes = req.body.basesRes;
    var floorsRes = req.body.floorsRes;

    avgDoors = Math.ceil(apptsRes/floorsRes);

    reqShafts = Math.ceil(avgDoors/6);

    fl = Number(floorsRes);
    bs = Number(basesRes);
    st = fl + bs;

    columns = 1 + Math.floor(st/20);

     total = reqShafts*columns;

     //AVOID INCONSISTENCIES IN RESULTS //////////
     if(isNaN(total) ||floorsRes ==0) {
        total ="";
    } 
        
    res.status(200).json( {tot : total , sel : choiceRes });
    res.end();      
     });

app.post('/hybserv', (req, res) => {
    console.log('received');
    
    var selectHyb = req.body.selectHyb;
    var tenantsHyb = req.body.tenantsHyb;
    var basementsHyb = req.body.basementsHyb;
    var floorsHyb = req.body.floorsHyb;

    f1 = Number(floorsHyb);
    b1 = Number(basementsHyb);

    stories1 = f1 + b1;

    totalTenants1 = stories1*tenantsHyb;

    elevatorsRequired1 = Math.ceil(totalTenants1/1000);

    columnsRequired1 = Math.ceil(stories1/20);

    elevatorPerColumn1 = Math.ceil(elevatorsRequired1/columnsRequired1);

    total = elevatorPerColumn1*columnsRequired1;
            
    res.status(200).json( {tot : total , sel : selectHyb });
    res.end();      
    });

app.post('/corpserv', (req, res) => {
    console.log('received');

    var selectCorp = req.body.selectCorp;
    var tenantsCorp = req.body.tenantsCorp;
    var basementsCorp = req.body.basementsCorp;
    var floorsCorp = req.body.floorsCorp;

    f = Number(floorsCorp);
    b = Number(basementsCorp);

    stories = f + b;

    totalTenants = stories*tenantsCorp;

    elevatorsRequired = Math.ceil(totalTenants/1000);

    columnsRequired = Math.ceil(stories/20);

    elevatorPerColumn = Math.ceil(elevatorsRequired/columnsRequired);

    total = elevatorPerColumn*columnsRequired;
            
    res.status(200).json( {tot : total , sel : selectCorp });
    res.end();      
    });