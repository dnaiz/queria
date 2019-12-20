const fs = require('fs');

const fetchData = (cb)=> {
    let dataArray;
    fs.readFile('data.json','utf-8',(err,data)=>{
        
        if(err){
            console.log('unable to read file data.json');
            cb([]);
        }else{
            try{
                dataArray = JSON.parse(data);
            }catch{
                //if json file is empty err won't catch anything
                console.log('json file is corrupt');
            }            
            cb(dataArray);                         
        }
    });        
};

const writeData = (dataObj,cb)=> {
    fetchData((dataArray)=>{
        dataArray.push(dataObj);
        let dataString;
        dataString = JSON.stringify(dataArray);
        
        fs.writeFile('data.json', dataString, 'utf8', (err)=>{
            if(err) 
                console.log('unable to write to data.json');
            else
                console.log('file saved successfully');
        });
    });
};

module.exports = {
    fetchData,
    writeData
};