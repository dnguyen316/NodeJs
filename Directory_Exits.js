const fs= require("fs"); 
let dirName = 'testFile'; 
   
fs.stat(dirName, (err,stat)=> 
    { 
    if (err) {
        console.log('Directory not exists'); console.log(true);
    }
    else {
        console.log("Directory exists");
        console.log(false);
    }
})
