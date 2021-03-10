//this is async this type of file read does not block the
//the code down below , but it requires a callback function

var fs= require('fs')
fs.readFile('./readme.txt','utf-8', function(err,data){
    console.log(data)
    fs.writeFile('.writeMe.txt',data,(err,result)=>{console.log(result)})

    }
)
