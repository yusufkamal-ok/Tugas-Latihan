const fs = require('fs');

fs.readFile('text_latihan.txt', 'utf-8', (err, data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
});