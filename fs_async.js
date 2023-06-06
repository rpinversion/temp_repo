

const fs = require('fs') 
console.log('start')
fs.readFile('./first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    
    const first = result;

    fs.readFile('./second.txt','utf-8',(err,result) =>{
        if(err){
            console.log(err)
            return;
        }
        const sec = result;
        fs.writeFile(
            './anotherresult.txt',`this is another result which contains ${first}, ${sec}` ,(err,result) =>
            {
                if(err){
                console.log(err)
                return;}

                console.log("done with the  task");
                
            }
        )
        

    })}



)
console.log('starting next task')
