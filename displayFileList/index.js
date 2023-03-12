const fs= require('fs');
const path=require('path');
const dirPath= path.join(__dirname,'files');
//console.log(dirPath) giving following path //C:\Users\Xt2 Server\Desktop\node js\node_backend\displayFileList\files


//creating files inside files folder.
for(i=0;i<5;i++)
{
    fs.writeFileSync(`${dirPath}/hello${i}.txt`,"some simple text in file")

}
// reading files names inside of files folder
fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        console.warn("file name is : ",item)
    });
}
)