const fs = require('fs');
const path = require('path');
const dirPath= path.join(__dirname,'crud');
const filePath = `${dirPath}/apple.txt`;
// fs.writeFileSync(filePath,'this is a simple file'); //apple.txt file created inside inside crud folder

// fs.readFile(filePath,'utf8',(err,item)=>{     //reading text of apple.txt
// console.log(item);
// })
// fs.appendFile(filePath,' for fruits',(err)=>{   //adding text inside apple.txt
// if(!err) console.log("file is updated")
// })
// fs.rename(filePath, `${dirPath}/fruit.txt`,(err)=>{   //renaming file name of apple.txt
// if(!err) console.log("file name is updated")
// })

// fs.unlinkSync(`${dirPath}/fruit.txt`);    // removing file fruit.txt from crud folder